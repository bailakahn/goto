import PropTypes from "prop-types";

function Button(props) {
  const { className, onClick, text, style, disabled } = props;
  return (
    <button data-testid="button" {...{ className, onClick, style, disabled }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
