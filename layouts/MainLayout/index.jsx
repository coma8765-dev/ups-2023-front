const MainLayout = ({ children, className = "", ...props }) => {
  return (
    <div
      className={
        className + " w-screen h-screen bg-aeroport bg-no-repeat p-8 font-medium"
      }
      {...props}
    >
      <div className="bg-bold w-full h-full px-12 bg-default relative">
        <div className="float-left">{children}</div>
        <div className="float-right">
          <div
            className="font-squartiqa-light
                          translate-y-16
                          leading-[595px]
                          h-[595px]
                          text-aeroport
                          hidden
                          lg:block
                          lg:text-[400px]
                          llg:text-[500px]
                          lllg:text-[595px]"
          >
            88
          </div>
          <div className="flex flex-row uppercase text-center inline absolute mb-8 mr-8 right-0 bottom-0">
            <div className="bg-zone text-white pt-[14px] pb-[14px] top-0 px-8 text-2xl leading-10">
              вы находитесь в зоне
            </div>
            <div className="bg-zone2 text-aeroport py-[14px] font-squartiqa leading-10 text-4xl px-8">
              standard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
