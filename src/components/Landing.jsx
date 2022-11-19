import styles from "./../styles";
import CardBerita from "./Landing/CardBerita";

const Landing = () => (
  <div className="w-full overflow-hidden">
    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart}`}
    >
        <CardBerita />
      <div className={`${styles.boxWidth}`}>
      </div>
    </div>
  </div>
);

export default Landing;
