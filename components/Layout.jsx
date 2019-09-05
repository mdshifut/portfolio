import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "./NavBar";
import SideBar from "./sideBar";
import { gradientBg } from "../styles/constants-style";

const generateClassNames = animation => ({
  enter: `page-${animation}-enter`,
  enterActive: `page-${animation}-enter-active`,
  enterDone: `page-${animation}-enter-done`,
  exit: `page-${animation}-exit`,
  exitActive: `page-${animation}-exit-active`,
  exitDone: `page-${animation}-exit-done`
});
const Layout = ({ children }) => {
  const { route, events } = useRouter();

  const [animationType, setAnimationType] = useState("zoom");

  const handleRouteChange = url => {
    if (route !== "/" && url !== "/") {
      setAnimationType("scale");
    } else {
      setAnimationType("zoom");
    }
  };

  useEffect(() => {
    events.on("routeChangeStart", handleRouteChange);

    return () => {
      events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <div className="body">
      <div className="container">
        <SideBar />

        <main>
          <NavBar />

          <TransitionGroup component={null}>
            <CSSTransition
              key={route}
              classNames={generateClassNames(animationType)}
              timeout={10000}
            >
              {children}
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
      <style jsx>
        {`
          .body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            ${gradientBg}

            .container {
              width: 80vw;
              height: 80vh;
              min-height: 60rem;
              max-height: 80rem;
              overflow: hidden;
              display: flex;
            }
            main {
              flex-grow: 1;
              margin: 20px 0;
              border-radius: 0 5px 5px 0;
              position: relative;
              overflow: hidden;
              background: #ddd;
            }
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = { children: propTypes.element.isRequired };

export default Layout;
