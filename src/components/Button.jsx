function Button({
  type,
  btnTitle,
  onBtnClick,
  btnVariant,
  isDisabled,
  size = "md",
}) {
  const variantClass =
    btnVariant === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : btnVariant === "secondary"
      ? "bg-violet-300"
      : "bg-slate-200 text-slate-900 hover:bg-slate-300";

  const sizeClass =
    size === "sm"
      ? "text-sm px-3 py-1 rounded-xs shadow-sm font-light"
      : "text-base px-5 py-2.5 rounded-sm shadow-sm font-medium";

  return (
    <button
      type={type}
      className={`${
        isDisabled ? "bg-gray-300! text-white! hover:bg-gray-300!" : ""
      } ${sizeClass} ${variantClass} cursor-pointer transition-all duration-300`}
      onClick={onBtnClick}
      disabled={isDisabled}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
