import PropTypes from "prop-types";
import Feature from "../Features/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 rounded-md p-4 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-7xl font-semibold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>

      <button className="mt-12 bg-green-500 w-full py-2 font-bold rounded-md hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
