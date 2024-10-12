type Args = {
  text:string,
  bgColor:string,
  textColor: string,
  handler: () => void,
}

const Button = ({ text, bgColor, textColor, handler }: Args) => {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
      onClick={handler}
    >
      {text}
    </button>
  );
};


export default Button;
