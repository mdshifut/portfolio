import propTypes from "prop-types";
import PageWrapper from "../components/PageWrapper";

const Resume = ({ isServer }) => {
  return (
    <PageWrapper isServer={isServer} position="TOP_RIGHT">
      <h1 className="resume">Resume</h1>
    </PageWrapper>
  );
};

Resume.propTypes = {
  isServer: propTypes.bool.isRequired
};

Resume.getInitialProps = async ({ req }) => ({ isServer: !!req });

export default Resume;
