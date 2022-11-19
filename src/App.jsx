import styles from "./styles";
import {
  Navbar,
  TableComponent,
  TitleSectionComponent,
  ButtonComponent,
  CardComponent,
  Hero,
} from "./components";

const App = () => (
  <div className="w-full overflow-hidden">
    <div className={`${styles.flexCenter}`}>
      <div className="w-full">
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
      className={`bg-white ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <TableComponent />
        <TitleSectionComponent title="Mitigasi Bencana" />
        <CardComponent title="Gempa Bumi" />
        <TitleSectionComponent title="Berita Terkini" />
        <CardComponent title="Gempa Bumi" />
      </div>
    </div>
  </div>
);

export default App;
