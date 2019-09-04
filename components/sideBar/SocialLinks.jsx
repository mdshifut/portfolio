import PropTypes from "prop-types";
import { secondaryColor } from "../../styles/constants-style";

const SocialLink = ({ href, icon }) => {
  return (
    <li>
      <a href={href}>
        <svg className="icon">
          <use xlinkHref={`/static/sprite.svg#${icon}`} />
        </svg>
      </a>

      <style jsx>
        {`
          li {
            display: inline-block;
            margin: 0 0.8rem;

            a {
              display: block;
            }

            .icon {
              fill: currentColor;
              height: 1.8rem;
              width: 1.8rem;
              transition: 0.3s;
            }
            a:hover .icon {
              color: ${secondaryColor};
            }
          }
        `}
      </style>
    </li>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const SocialLinks = () => {
  return (
    <div className="socials">
      <ul className="text-center">
        <SocialLink href="http://www.facebook.com" icon="icon-facebook" />
        <SocialLink href="www.facebook.com" icon="icon-twitter" />
        <SocialLink href="www.facebook.com" icon="icon-youtube" />
        <SocialLink href="www.facebook.com" icon="icon-github" />
        <SocialLink href="www.facebook.com" icon="icon-stackoverflow" />
      </ul>
      <style jsx>
        {`
          .socials {
            margin-top: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default SocialLinks;
