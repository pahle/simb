import styles from "./styles";
import { Navbar } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div
      className={`${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        asd
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Hero /> */}
        asd
      </div>
    </div>

    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        {/* Imported Component */}
      </div>
    </div>
  </div>
);

export default App;
