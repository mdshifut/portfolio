import { secondaryColor } from "../../styles/constants-style";

const ProfileHeading = () => {
  return (
    <div className="profile-heading text-center">
      <h1>Md Shifut Hossain</h1>
      <h3>Web Developer</h3>

      <style jsx>
        {`
          .profile-heading {
            margin-top: 8rem;
          }

          h1 {
            font-size: 3.4rem;
            margin-top: 1rem;
            margin-bottom: 1.3rem;
            line-height: 1;
            font-family: "Merienda", cursive;
          }

          h3 {
            color: ${secondaryColor};
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
};

export default ProfileHeading;
