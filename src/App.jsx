import styles from "./styles";
import { Navbar, TableComponent, TitleSectionComponent } from "./components";

const App = () => (
  <div className="bg-blue-500 w-full overflow-hidden">
    <div
      className={`${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <Hero /> */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-center`}>
        Hero Content
      </div>
    </div>

    {/* table */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TitleSectionComponent title="Daftar Gempa Terkini" />
        <TableComponent />
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
