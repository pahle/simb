import styles from "./styles";
import {
  Navbar, Button,
  Hero,
  Mitigasi,
  Home,
  GempaTerkini
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className="w-full relative z-[2]">
        <Navbar />
      </div>
    </div>
{/* 
    <div className={`bg-white ${styles.flexStart} `}>
      <div className="w-full">
        <Hero />
      </div>
    </div>

    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart} relative z-[1]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Mitigasi />
      </div>
    </div> */}

    {/* hero */}
    <div className={`bg-white ${styles.flexStart} `}>
      <div className="w-full">
        <GempaTerkini/>
      </div>
    </div>

    {/* content */}
    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart} relative z-[1]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    {/* table */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
      </div>
    </div>
  </div>
);

export default App;
