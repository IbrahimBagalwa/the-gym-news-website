const WrapperContent = ({ children, className }) => {
  return (
    <section className={` mx-auto max-w-[1140px] relative ${className}`}>
      {children}
    </section>
  );
};

export default WrapperContent;
