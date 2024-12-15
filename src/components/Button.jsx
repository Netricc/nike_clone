const Button = (props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${
          props.backgroundColor
            ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
            : `bg-coral-red text-white border-coral-red ${
                props.fullWidth ? "w-full" : ""
              }`
        }
            rounded-full
        
      `}
    >
      {props.label ? props.label : "Button"}
      {props.iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={props.iconURL ? props.iconURL : ""}
          alt=""
        />
      )}
    </button>
  );
};

export default Button;
