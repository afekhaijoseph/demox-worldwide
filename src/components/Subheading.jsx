const Subheading = ({ 
  children, 
  variant = "primary", 
  size = "sm", 
  className = "",
}) => {
  const base = "inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-accentSecond text-secondAccent",
    secondary: "bg-secondary text-secondAccent",
  };

  const sizes = {
    sm: "px-6 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };


  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Subheading