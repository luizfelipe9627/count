import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ children, event, className }) => {
  return (
    <button onClick={event} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  event: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
