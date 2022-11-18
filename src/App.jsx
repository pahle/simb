import styles from "./styles";
import { Navbar } from "./components";

const App = () => (
  <div className="bg-blue-500 w-full overflow-hidden">
    <div
      className={`${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Hero /> */}
        Hero
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
