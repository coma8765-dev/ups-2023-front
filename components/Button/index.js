const Button = ({ className = "", children = "Button", ...props }) => {
  return (
    <button
      type="button"
      className={className + " border-2 border-aeroport uppercase py-5 w-80"}
      {...props}
    >
      <div className="text-2xl font-squartiqa">{children}</div>
    </button>
  );
};

export default Button;
