import testImage from "/images/testImage.jpg";
const Card = () => {
  return (
    <div className={`flex  text-white gap-2 px-10 z-50 hover-group`}>
      <img src={testImage} alt="test-image" className="cursor-pointer" />
      <div>
        <p className="hover:underline cursor-pointer">
          Green MEP Bütikofer: Xi visit to Moscow indicates desire for new world
          order
        </p>
        <p>
          <span>Category</span>
          <span>16 Hours ago</span>
          <span> 02:40 min</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
