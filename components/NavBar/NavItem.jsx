import Link from "next/link";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animationTime } from "../../styles/constants-style";

const NavItem = ({ title, href, icon }) => {
  const { route, events } = useRouter();

  const [classNames, setClassNames] = useState("scale-up");

  const handleRouteChange = url => {
    if (url === "/" && route !== href) {
      setClassNames("scale-up hover-disabled");
    }
    if (url !== "/" && url !== href) {
      setClassNames("scale-down");
    }

    if (url === "/" && route === href) {
      setClassNames("fade-in hover-disabled");
    }

    if (url !== "/" && url === href && !!route) {
      setClassNames("fade-out");
    }

    if (url !== "/" && route !== "/") {
      setClassNames("hide");
    }
  };

  useEffect(() => {
    events.on("routeChangeStart", handleRouteChange);
    return () => {
      events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const mouseMoveHandler = () => {
    if (classNames === "fade-in hover-disabled") {
      setClassNames("fade-in");
    }
    if (classNames === "scale-up hover-disabled") {
      setClassNames("scale-up");
    }
  };

  return (
    <Link href={href}>
      <a className={`nav-link ${classNames}`} onMouseMove={mouseMoveHandler}>
        <span className="nav-link__content  text-center">
          <svg className="nav-link__icon">
            <use xlinkHref={`/static/sprite.svg#${icon}`} />
          </svg>

          <span className="nav-link__text">{title}</span>
        </span>
        <style jsx>
          {`
            .nav-link {
              flex: 0 0 50%;
              max-width: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #646464;
              background-color: #fff;
              position: relative;
              transition: box-shadow 0.3s;

              z-index: 10;
              &.scale-down {
                animation: scaleDown ${animationTime}ms;
                border-radius: 0;
              }

              &.scale-down:hover {
                z-index: 2;
              }

              &.scale-up {
                animation: scaleUp ${animationTime}ms;
              }
              &:hover {
                z-index: 24;
              }
              &.scale-up:nth-child(2) {
                border-radius: 0 5px 0 0;
              }
              &.scale-up:nth-child(4) {
                border-radius: 0 0 5px 0;
              }

              &:nth-child(1):hover {
                box-shadow: 10px 10px 15px #ddd;
              }
              &:nth-child(2):hover {
                box-shadow: -10px 10px 15px #ddd;
              }
              &:nth-child(3):hover {
                box-shadow: 10px -10px 15px #ddd;
              }
              &:nth-child(4):hover {
                box-shadow: -10px -10px 15px #ddd;
              }
              &.fade-out {
                //TODO:Have change animation time
                animation: fadeOut 4000ms;
              }

              &.fade-in {
                //TODO:Have change animation time
                animation: fadeIn 10000ms;
              }

              &.hide {
                opacity: 0;
                visibility: hidden;
              }

              &.fade-out:hover {
                transition: box-shadow 0;
                box-shadow: none !important;
                z-index: 1;
              }

              &.fade-out &__content {
                transform: scale(1.1);
              }

              &.hover-disabled:hover {
                box-shadow: none;
              }

              &.hover-disabled:hover &__content {
                transform: scale(1);
              }

              &__content {
                transition: 0.3s;
              }

              &:hover &__content {
                transform: scale(1.1);
              }

              &__icon {
                height: 50px;
                width: 50px;
                fill: currentColor;
                margin-bottom: 1rem;
              }

              &__text {
                display: block;
                font-size: 2.8rem;
                font-weight: 600;
                text-transform: uppercase;
                transition: 0.3s;
              }
            }

            @keyframes fadeOut {
              0% {
                z-index: 23;
                opacity: 1;
              }

              30% {
                z-index: 23;
                opacity: 1;
              }

              95% {
                z-index: 23;
                opacity: 0;
              }

              100% {
                z-index: 1;
                opacity: 0;
              }
            }

            @keyframes fadeIn {
              0% {
                z-index: 23;
                opacity: 0;
                box-shadow: none;
              }
              30% {
                z-index: 23;
                opacity: 0;
              }

              100% {
                z-index: 23;
                opacity: 1;

                box-shadow: none;
              }
            }

            @keyframes scaleUp {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              15% {
                transform: scale(0);
                opacity: 0;
              }

              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes scaleDown {
              0% {
                transform: scale(1);
                opacity: 1;
              }

              85% {
                transform: scale(0);
                opacity: 0;
              }

              100% {
                transform: scale(0);
                opacity: 0;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
};

NavItem.propTypes = {
  title: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
};

export default NavItem;
