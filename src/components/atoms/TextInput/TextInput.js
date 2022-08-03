import PropTypes from "prop-types";

function TextInput(props) {
  const { id, onChange, placeholder, style, value } = props;
  return (
    <input
      data-testid="input"
      type="text"
      {...{ id, onChange, placeholder, style, value }}
    />
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
