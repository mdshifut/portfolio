import propTypes from "prop-types";
import PageWrapper from "../components/PageWrapper";

const Contact = ({ isServer }) => {
  return (
    <PageWrapper isServer={isServer} position="BOTTOM_RIGHT">
      <h1 className="about">Contact</h1>
    </PageWrapper>
  );
};

Contact.propTypes = {
  isServer: propTypes.bool.isRequired
};

Contact.getInitialProps = async ({ req }) => ({ isServer: !!req });

export default Contact;
