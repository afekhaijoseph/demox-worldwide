const Button = ({ 
  label, 
  variant = "primary", 
  size = "sm", 
  className = "",
}) => {
  const base ='bg-accent px-4 py-2 rounded-tl-xl rounded-br-xl mx-auto text-secondary border-2 border-accent font-bold';

  const variants = {
    primary : "hover:bg-transparent hover:border-2 hover:border-secondary",
    secondary: "hover:text-darkBackground hover:bg-transparent hover:border-2 hover:border-darkBackground",
  };

  const sizes = {
    sm: "px-6 py-1 text-base",
  };


  return (
    <a href="https://wa.me/2349030865030" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {label}
    </a>
  );
};

export default Button