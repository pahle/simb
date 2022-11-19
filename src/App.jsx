import styles from "./styles";
import { Navbar, TableComponent, TitleSectionComponent, ButtonComponent, CardComponent } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div
      className={`${styles.paddingX} ${styles.flexCenter}`}
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

    {/* pra bencana */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-center`}>
        <TitleSectionComponent title="Pra Bencana" />
        <ButtonComponent variant="contained" Button="Mitigasi Bencana" />
        <CardComponent />
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
