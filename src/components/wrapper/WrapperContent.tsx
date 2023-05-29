import { FC, ReactNode } from "react";

type WrapperContentProp = {
  children: ReactNode;
  styles?: string;
};
const WrapperContent: FC<WrapperContentProp> = ({ children, styles }) => {
  return (
    <section className={` mx-auto max-w-[1140px] relative ${styles}`}>
      {children}
    </section>
  );
};

export default WrapperContent;
