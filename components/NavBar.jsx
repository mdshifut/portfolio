import Link from "next/link";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animationTime } from "../styles/constants-style";

const MenuItem = ({ title, href, icon }) => {
  const router = useRouter();
  const { route, events } = router;
  const [classNames, setClassNames] = useState("scale-up");
  const [prevRoute, setPrevRoute] = useState("");

  const handleRouteChange = () => setPrevRoute(route);

  useEffect(() => {
    if (route === "/" && prevRoute !== href) {
      setClassNames("scale-up");
    }
    if (route !== "/" && route !== href) {
      setClassNames("scale-down");
    }

    if (route === "/" && prevRoute === href) {
      setClassNames("fade-in hover-disabled");
    }
    if (route !== "/" && route === href) {
      setClassNames("fade-out");
    }
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

              &:hover {
                z-index: 2;
              }

              &.scale-down {
                animation: scaleDown ${animationTime}ms;
                border-radius: 0;
              }

              &.scale-up {
                animation: scaleUp ${animationTime}ms;
              }

              &.fade-out {
                animation: fadeOut 10000ms;
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

              &.hover-disabled:hover {
                box-shadow: none;
              }

              &__content {
                transition: 0.3s;
              }

              &:hover &__content {
                transform: scale(1.1);
              }

              &.hover-disabled:hover &__content {
                transform: scale(1);
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
                box-shadow: none;
              }
              15% {
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

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
};

const NavBar = () => {
  return (
    <nav>
      <MenuItem title="About Me" href="/about" icon="icon-user" />
      <MenuItem title="My Resume" href="/resume" icon="icon-file-text2" />
      <MenuItem title="My Work" href="/work" icon="icon-embed2" />
      <MenuItem title="Contact Me" href="/contact" icon="icon-phone" />

      <style jsx>
        {`
          nav {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            &::before,
            &::after {
              position: absolute;
              content: "";
              transition: 100ms;
              z-index: 1;
            }
            &::before {
              top: 0;
              left: 50%;
              height: 100%;
              width: 1px;
              background: #ddd;
              transform: translateX(-50%);
              background: -moz-linear-gradient(
                top,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              background: -webkit-linear-gradient(
                top,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              background: linear-gradient(
                to bottom,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#007db9e8',GradientType=0 );
            }
            &::after {
              top: 50%;
              left: 0;
              height: 1px;
              width: 100%;
              background: #ddd;
              transform: translateY(-50%);
              background: -moz-linear-gradient(
                left,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              background: -webkit-linear-gradient(
                left,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              background: linear-gradient(
                to right,
                rgba(30, 87, 153, 0) 0%,
                rgba(221, 221, 221, 1) 50%,
                rgba(125, 185, 232, 0) 100%
              );
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#007db9e8',GradientType=1 );
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
