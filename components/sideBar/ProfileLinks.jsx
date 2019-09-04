import Button from "../Button";

const ProfileLinks = () => (
  <div className="profile-btn">
    <Button
      external
      download
      href="./static/shifut-resume.pdf"
      text="Download cv"
      icon="/static/sprite.svg#icon-download3"
    />
    <Button
      internal
      href="/contact"
      text="Hire Me"
      icon="/static/sprite.svg#icon-paper-plane"
    />

    <style jsx>
      {`
        .profile-btn {
          display: flex;
          position: relative;
          margin-top: auto;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            height: 1px;
            width: 100%;
            background: #ddd;
          }
          &::after {
            position: absolute;
            top: 0;
            left: 50%;
            content: "";
            height: 100%;
            width: 1px;
            background: #ddd;

            transform: translateX(50%);
          }
        }
      `}
    </style>
  </div>
);

export default ProfileLinks;
