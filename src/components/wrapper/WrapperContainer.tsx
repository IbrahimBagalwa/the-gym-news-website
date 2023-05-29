import { ReactNode, FC } from "react";

type WrapperContainerProp = {
  children: ReactNode;
};
const WrapperContainer: FC<WrapperContainerProp> = ({ children }) => {
  return <section className="mx-auto max-w-[1600px]">{children}</section>;
};

export default WrapperContainer;
