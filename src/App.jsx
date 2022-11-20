import styles from "./styles";
import {
  Navbar,
  TableGempa,
  TitleSection,
  CardMitigasi,
  Hero,
  Landing,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className="w-full relative z-[2]">
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart} `}>
      <div className="w-full">
        <Hero />
      </div>
    </div>

    {/* table */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
      </div>
    </div>

    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart} relative z-[1]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Landing />
      </div>
    </div>
  </div>
);

export default App;
