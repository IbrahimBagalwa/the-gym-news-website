import { WrapperContent } from "../wrapper";
import bigImage from "/images/bi-im.jpg";

const LatestShow = () => {
  return (
    <div className="bg-[#323C45] pt-8 pb-6">
      <h1 className="mx-auto max-w-[1140px] text-[#d8dde2] text-3xl uppercase font-bold mb-6">
        Lastest Show
      </h1>
      <WrapperContent styles="grid grid-cols-3">
        <img
          src={bigImage}
          alt="big-image"
          className="col-span-2 w-full cursor-pointer"
        />
        <div className="bg-black px-10 py-4 grid h-full">
          <div>
            <h2 className="text-white text-4xl cursor-pointer hover:underline mb-4">
              Prague – Charles Bridge, Kafka and beer
            </h2>
            <p className="text-[#d8dde2] text-sm text-4xl font-bold">
              How does the "Golden City" – once one of the most visited in
              Europe – plan to attract visitors?
            </p>
          </div>
          <div className="divide-x-2 text-xs text-[#b2bcc5] self-end">
            <span className="">03/26/2023March 26, 202326:05 min</span>
          </div>
        </div>
      </WrapperContent>
    </div>
  );
};

export default LatestShow;
