import Link from "next/link";
import PropTypes from "prop-types";

const Button = ({
  internal,
  external,
  href,
  download,
  className,
  text,
  icon
}) => {
  const link = (
    <a className={`button ${className}`} href={href} download={download}>
      <div className="button__content button--front">
        {text}
        <svg className={`button__icon ${className}__icon`}>
          <use xlinkHref={icon} />
        </svg>
      </div>
      <div className="button__content  button--back">
        {text}
        <svg className={`button__icon ${className}__icon`}>
          <use xlinkHref={icon} />
        </svg>
      </div>

      <style jsx>
        {`
          .button {
            position: relative;
            width: 100%;

            &__content {
              display: flex;
              justify-content: center;
              align-items: center;
              text-transform: uppercase;
              font-weight: 500;
              transition: 0.4s;
              padding: 2.5rem 1.5rem;
            }

            &--back {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              opacity: 0;
              visibility: hidden;
              transform: scale(0);
            }

            &:hover &--back {
              transform: scale(1);
              opacity: 1;
              visibility: visible;
            }

            &:hover &--front {
              transform: scale(1.5);
              opacity: 0;
              visibility: hidden;
            }

            &__icon {
              width: 2rem;
              height: 2rem;
              margin-left: 0.9rem;
              fill: currentColor;
            }
          }
        `}
      </style>
    </a>
  );

  return (
    <>
      {internal && <Link href={href}>{link}</Link>}
      {external && link}
    </>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  internal: PropTypes.bool,
  external: PropTypes.bool,
  download: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  internal: false,
  external: false,
  download: false,
  className: ""
};

export default Button;
