import Link from "next/link";

const ProfileCover = () => {
  return (
    <div className=" profile">
      <Link href="/">
        <a className="profile__photo">
          <img src="./static/profile.jpg" alt="Md Shifut Hossain" />
        </a>
      </Link>

      <style jsx>
        {`
          .profile {
            height: 30rem;
            background-image: url(./static/cover.jpg);
            background-position: bottom center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            &__photo {
              display: block;
              width: 15rem;
              height: 15rem;
              border-radius: 50%;
              border: 0.4rem solid #fff;
              overflow: hidden;
              transform: translateY(50%);
              transition: 0.3s;
            }
            &__photo img {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>

      <style jsx global>
        {`
          .profile-card:hover .profile__photo {
            transform: translateY(50%) scale(1.15);
          }
        `}
      </style>
    </div>
  );
};

export default ProfileCover;
