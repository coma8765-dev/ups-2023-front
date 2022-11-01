import Image from "next/image";
import Hide from "../../assets/img/field-hide.png";

const InputField = ({
  className = "",
  type = "text",
  placeholder = "Field",
  password = false,
  ...props
}) => {
  return (
    <div className="relative flex flex-row">
      <input
        className={
          "border-white py-3.5 placeholder:text-white w-80 my-2.5 pl-5 border-2 focus:outline-none bg-input text-lg text-white" +
          (password ? " pr-16" : " pr-5")
        }
        placeholder={placeholder}
        type={password ? "password" : type}
        {...props} />
      {password && (
        <Image
          className="absolute right-7 top-8"
          src={Hide}
          alt={"hide field"} />
      )}
    </div>
  );
};

export default InputField;
