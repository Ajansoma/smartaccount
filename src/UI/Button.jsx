const Button = (props) => {
  const { name, style } = props;
  return (
    <div className={`hover:scale-105 hover:duration-300 rounded ${style}`}>
      <button type="submit" className="w-full h-10">
        {name}
      </button>
    </div>
  );
};

export default Button;
