import PropTypes from "prop-types";

function Button(props) {
  const { className, onClick, text, style } = props;
  return (
    <button data-testid="button" {...{ className, onClick, style }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Button;
