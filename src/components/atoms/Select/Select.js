import PropTypes from "prop-types";

function Select(props) {
  const { id, onChange, options, name, value, style, className, placeholder } =
    props;
  return (
    <select {...{ id, onChange, name, value, style, className, placeholder }}>
      {options.map(({ value, label, ...props }, i) => (
        <option key={i} value={value} {...{ ...props }}>
          {label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
