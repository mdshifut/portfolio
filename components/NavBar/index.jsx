import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav>
      <NavItem title="About Me" href="/about" icon="icon-user" />
      <NavItem title="My Resume" href="/resume" icon="icon-file-text2" />
      <NavItem title="My Work" href="/work" icon="icon-embed2" />
      <NavItem title="Contact Me" href="/contact" icon="icon-phone" />

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
              z-index: 11;
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
