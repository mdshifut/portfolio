import { useRef, useEffect } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";

const getPosition = position => {
  switch (position) {
    case "TOP_LEFT":
      return "top:0;left:0";
    case "TOP_RIGHT":
      return "top:0;right:0";
    case "BOTTOM_LEFT":
      return "bottom:0;left:0";
    case "BOTTOM_RIGHT":
      return "bottom:0;right:0";

    default:
      return "top:0;left:0";
  }
};

const getShadow = position => {
  switch (position) {
    case "TOP_LEFT":
      return "10px 10px 15px #ddd";
    case "TOP_RIGHT":
      return "-10px 10px 15px #ddd";
    case "BOTTOM_LEFT":
      return "10px -10px 15px #ddd";
    case "BOTTOM_RIGHT":
      return "-10px -10px 15px #ddd";

    default:
      return "10px 10px 15px #ddd";
  }
};

const PageWrapper = ({ children, isServer, position }) => {
  const router = useRouter();
  const pageWrapper = useRef(null);

  useEffect(() => {
    const classList =
      pageWrapper && pageWrapper.current && pageWrapper.current.classList;

    if (
      classList.contains("page-zoom-exit-active") ||
      classList.contains("page-scale-exit-active")
    )
      classList.remove("show");
  });

  const BackBtnHandler = () => {
    if (isServer) {
      return router.push("/");
    }

    return router.back();
  };

  return (
    <div className="page-wrapper show" ref={pageWrapper}>
      <div className="page-wrapper__inner">
        <span
          className="back-btn"
          onClick={BackBtnHandler}
          onKeyPress={BackBtnHandler}
          role="link"
          tabIndex="0"
        >
          close
        </span>
        {children}
      </div>
      <style jsx>
        {`
          .page-wrapper {
            position: absolute;
            background: #fff;
            z-index: 3;
            height: 100%;
            width: 100%;
            ${getPosition(position)}

            &.show {
              z-index: 30;
            }

            &.page-zoom-enter {
              animation: pageIn 10000ms;
            }

            &.page-zoom-exit {
              animation: pageOut 10000ms;
            }

            &.page-scale-enter {
              animation: scaleIn 10000ms;
            }

            &.page-scale-exit {
              animation: scaleOut 10000ms;
            }

            &__inner {
              opacity: 1;
            }

            &.page-zoom-enter &__inner {
              opacity: 0;
              //TODO:Have to change animation time
              transition: opacity 4000ms 6000ms;
            }

            &.page-zoom-enter-active &__inner {
              opacity: 1;
            }

            &.page-zoom-exit &__inner {
              opacity: 1;

              //TODO:Have to change animation time
              transition: opacity 4000ms;
            }

            &.page-zoom-exit-active &__inner {
              opacity: 0;
            }
          }

          @keyframes pageIn {
            0% {
              height: 50%;
              width: 50%;
              box-shadow: ${getShadow(position)};
              opacity: 1;
              border-radius: 0;
              z-index: 12;
            }
            10% {
              z-index: 12;
              opacity: 1;
              height: 50%;
              width: 50%;
            }
            75% {
              box-shadow: ${getShadow(position)};

              border-radius: 0 5px 5px 0;
              z-index: 23;
            }
            100% {
              height: 100%;
              width: 100%;
              opacity: 1;

              box-shadow: 0;
              border-radius: 0 5px 5px 0;
            }
          }

          @keyframes pageOut {
            0% {
              height: 100%;
              width: 100%;
              opacity: 1;
              border-radius: 0 5px 5px 0;
              z-index: 12;
              box-shadow: ${getShadow(position)};
            }

            85% {
              z-index: 12;
              height: 50%;
              width: 50%;
              opacity: 1;
              box-shadow: 0;
              border-radius: 0;
            }

            100% {
              height: 50%;
              width: 50%;
              opacity: 0;

              box-shadow: 0;
              border-radius: 0;
            }
          }

          @keyframes scaleIn {
            0% {
              box-shadow: ${getShadow(position)};
              height: 100%;
              width: 100%;
              border-radius: 0;
              opacity: 0;
              visibility: hidden;
              top: 101%;
              transform: scale(0.8);
              bottom: auto;
            }

            5% {
              opacity: 1;
              visibility: visible;
              top: 101%;
              transform: scale(0.8);
            }

            65% {
              box-shadow: none;
              border-radius: 0 5px 5px 0;
              transform: scale(0.8);
            }
            85% {
              top: 0;
              z-index: 2223;
              transform: scale(1);
            }
          }

          @keyframes scaleOut {
            0% {
              border-radius: 0 5px 5px 0;
              transform: scale(1);
              z-index: 12;
            }
            95% {
              z-index: 12;
            }
            100% {
              opacity: 0;
              border-radius: 0;
              z-index: 2;
              transform: scale(0);
            }
          }
        `}
      </style>
    </div>
  );
};

PageWrapper.propTypes = {
  children: propTypes.element.isRequired,
  isServer: propTypes.bool.isRequired,
  position: propTypes.string.isRequired
};

export default PageWrapper;
