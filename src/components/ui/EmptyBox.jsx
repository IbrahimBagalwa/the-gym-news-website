import emptyBoxIcon from "../../assets/empty-box.svg";
const EmptyBox = () => {
  return (
    <div className="col-span-3">
      <div className="flex flex-col items-center justify-center">
        <img src={emptyBoxIcon} className="w-[50%]" alt="box" />
        <p>No publication for this publisher</p>
      </div>
    </div>
  );
};

export default EmptyBox;
