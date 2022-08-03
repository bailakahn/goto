import PropTypes from "prop-types";

function TextInput(props) {
  const { id, onChange, placeholder, style } = props;
  return <input type="text" {...{ id, onChange, placeholder, style }} />;
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

export default TextInput;
