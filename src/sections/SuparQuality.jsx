import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuparQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide you
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium confort and style, our meticulously crafted footwear
          is designed to elevate your experience, provideing you with unmached
          quallity, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ansure your satisfaction.
        </p>
        <div className="mt-11 ">
          <Button label="View details" />
        </div>
      </div>

      {/* Image section  */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuparQuality;
