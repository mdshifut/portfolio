import ProfileCover from "./ProfileCover";
import ProfileHeading from "./ProfileHeading";
import SocialLinks from "./SocialLinks";
import ProfileLinks from "./ProfileLinks";

const SideBar = () => {
  return (
    <aside className="profile-card">
      <ProfileCover />

      <ProfileHeading />

      <SocialLinks />

      <ProfileLinks />

      <style jsx>
        {`
          aside {
            width: 480px;
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
            position: relative;
            z-index: 333;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </aside>
  );
};

export default SideBar;
