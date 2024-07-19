import "./form-input.style.scss";
const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      {/* If label exists, render label */}
      <input className="form-input" {...inputOptions}></input>
      {label && (
        <label
          className={`${
            inputOptions.value.length ? `shrink` : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
