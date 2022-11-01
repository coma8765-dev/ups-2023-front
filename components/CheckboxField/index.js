const CheckboxField = ({ className = "", text = "Some label", ...props }) => {
  return (
    <label className="my-2.5 text-white font-normal text-base block">
      <input
        type="checkbox"
        className="mr-2 h-4 w-4 mb-1 basis-full align-middle" />
      {text}
    </label>
  );
};

export default CheckboxField;
