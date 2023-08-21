function Textfield({ labelText, subLabel, name, value, handleChange, error }) {
  return (
    <div className="mt-[50px] text-xl">
      <label>{labelText}:</label>
      <br />
      {subLabel && (
        <p className="text-xs mt-[15px] mb-[30px]">
          {subLabel} <br />
        </p>
      )}
      <input
        className="appearance-none bg-transparent border-b-2 border-b-emerald-50 w-[80%] text-white mr-3 pt-1 pb-4 px-2 focus:outline-none"
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <br />
      {error && (
        <span className="text-red-500 text-sm">
          {error} <br />
        </span>
      )}
    </div>
  );
}

export default Textfield;
