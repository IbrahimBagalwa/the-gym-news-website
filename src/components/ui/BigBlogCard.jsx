import bigImage from "/images/bi-im.jpg";
const BigBlogCard = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="uppercase text-[#3b444d]">Africa</h1>
      <div className="hover:group hover:underline cursor-pointer">
        <img src={bigImage} alt="big-image" />
        <h2 className="text-[#002D5A] hover:underline text-4xl cursor-pointer mb-4">
          US Vice President Kamala Harris kicks off Africa trip
        </h2>
      </div>
      <div>
        <p className="text-[#3b444d] text-sm mb-2">
          Kamala Harris has arrived in Ghana, the first leg in her weeklong trip
          to the continent aimed at deepening US ties.
        </p>
        <div className="flex gap-x-2 divide-x-2 text-xs text-[#5c666e]">
          <span className="uppercase">Politics</span>
          <span className="pl-2">4 hours</span>
        </div>
      </div>
    </div>
  );
};

export default BigBlogCard;
