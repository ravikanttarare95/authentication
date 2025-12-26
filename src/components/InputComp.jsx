import React from "react";

function InputComp({
  type,
  id,
  name,
  value,
  placeholder,
  inputLegend,
  isMandatory,
  onchange,
  min,
  max,
}) {
  return (
    <fieldset className="border-2 border-gray-300 rounded-md px-2 pb-2 focus-within:border-violet-600">
      <legend className="px-2 text-sm font-semibold text-violet-600">
        {inputLegend}
        {isMandatory && <span className="text-rose-500 font-bold">*</span>}
      </legend>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        className="w-full px-3 border-none outline-none text-gray-900 placeholder-gray-400 bg-transparent text-sm"
        onChange={onchange}
      />
    </fieldset>
  );
}

export default InputComp;
