import propTypes from "prop-types";
import PageWrapper from "../components/PageWrapper";

const About = ({ isServer }) => {
  return (
    <PageWrapper isServer={isServer} position="TOP_LEFT">
      <h1 className="about">About</h1>
    </PageWrapper>
  );
};

About.propTypes = {
  isServer: propTypes.bool.isRequired
};

About.getInitialProps = async ({ req }) => ({ isServer: !!req });

export default About;
