import Button from "./Button";

export const Product = ({ product }) => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center rounded-xl relative group overflow-hidden"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/100 via-transparent to-transparent
          transition-opacity duration-300 ease-in-out
          group-hover:opacity-50
        "
      />

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-secondary ">
       <p className="text-3xl mb-4">{product.name}</p>
       <Button label={'Learn more'} variant="primary"/>
       
      </div>
    </div>
  );
};

export default Product;