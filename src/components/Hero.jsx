import styles from "../styles";

const Hero = () => (
  <section
    id="beranda"
    className={`flex md:flex-row flex-col ${styles.paddingY} bg-gradient-to-r from-[#030F6B] to-[#23284F] h-[420px] md:h-[365px] text-center text-sm px-5 sm:p-0`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
      <div className="flex flex-row justify-between items-center w-full text-center">
        <h1 className="flex-1 font-poppins font-semibold text-white ss:text-[72px] xs:text-[52px] text-[48px] ss:leading-[100px] leading-[75px] w-[100%]">
          PUSAT PERINGATAN{" "}
          <span className="text-gradient">TSUNAMI</span>
        </h1>
      </div>
    </div>

    {/* <div className="absolute z-[0] w-[40%] h-[35%] top-40 blue__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 yellow__gradient" /> */}
  </section>
);

export default Hero;
