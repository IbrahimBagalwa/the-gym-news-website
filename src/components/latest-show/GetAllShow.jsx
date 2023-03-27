import { WrapperContent } from "../wrapper";

const GetAllShow = () => {
  return (
    <div className="bg-[#262E33] p-10">
      <WrapperContent styles="bg-[#3B444D] p-4">
        <div>
          <h2 className="text-white text-2xl hover:underline cursor-pointer font-bold">
            Get All the news shows!
          </h2>
          <p className="text-[#d8dde2] text-sm">
            Discover DW's outstanding documentaries, exciting talk shows, news
            and magazines.
          </p>
          <p className="flex items-center justify-end text-white">
            <span className="hover:underline cursor-pointer font-bold">
              Explore now
            </span>
            <i class="ri-arrow-right-s-line"></i>
          </p>
        </div>
      </WrapperContent>
    </div>
  );
};

export default GetAllShow;
