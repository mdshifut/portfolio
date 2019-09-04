import propTypes from "prop-types";
import { useRouter } from "next/router";
import { animationTime } from "../styles/constants-style";

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

  const BackBtnHandler = () => {
    if (isServer) {
      return router.push("/");
    }

    return router.back();
  };

  return (
    <div className="page-wrapper">
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
            height: 100%;
            width: 100%;
            background: #fff;
            z-index: 22;
            ${getPosition(position)}

            &.page-enter {
              animation: pageIn ${animationTime}ms;
            }

            &.page-exit {
              animation: pageOut ${animationTime}ms;
            }

            &__inner {
              opacity: 1;
            }

            &.page-enter &__inner {
              opacity: 0;
              transition: opacity 400ms ease-in-out ${0.6 * animationTime}ms;
            }

            &.page-enter-active &__inner {
              opacity: 1;
            }

            &.page-exit &__inner {
              opacity: 1;
              transition: opacity 400ms ease-in-out;
            }
            &.page-exit-active &__inner {
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
              z-index: 1;
            }
            10% {
              z-index: 1;
              opacity: 1;
              height: 50%;
              width: 50%;
              border-radius: 0 5px 5px 0;
            }
            75% {
              box-shadow: ${getShadow(position)};

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
              box-shadow: 0;
            }
            25% {
              box-shadow: ${getShadow(position)};
            }

            85% {
              height: 50%;
              width: 50%;
              opacity: 1;
              border-radius: 0;
            }

            100% {
              height: 50%;
              width: 50%;
              box-shadow: ${getShadow(position)};
              opacity: 0;
              border-radius: 0;
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
