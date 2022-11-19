import styles from "./styles";
import { Navbar, TableComponent, TitleSectionComponent, ButtonComponent, CardComponent } from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div
      className={`${styles.flexCenter}`}
    >
      <div className="w-full">
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

    {/* mitigasi bencana */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-center`}>
        <TitleSectionComponent title="Mitigasi Bencana" />
        {/* <ButtonComponent variant="contained" Button="Mitigasi Bencana" /> */}
        <CardComponent title="Gempa Bumi" />
      </div>
    </div>

    {/* berita terkini */}
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-center`}>
        <TitleSectionComponent title="Berita Terkini" />
        <CardComponent title="Gempa Bumi" />
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
