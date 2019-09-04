import propTypes from "prop-types";
import PageWrapper from "../components/PageWrapper";

const Work = ({ isServer }) => {
  return (
    <PageWrapper isServer={isServer} position="BOTTOM_LEFT">
      <h1 className="resume">Work</h1>
    </PageWrapper>
  );
};

Work.propTypes = {
  isServer: propTypes.bool.isRequired
};

Work.getInitialProps = async ({ req }) => ({ isServer: !!req });

export default Work;
