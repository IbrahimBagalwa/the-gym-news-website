const WrapperContent = ({ children, styles }) => {
  return (
    <section className={` mx-auto max-w-[1140px] relative ${styles}`}>
      {children}
    </section>
  );
};

export default WrapperContent;
