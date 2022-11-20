import styles from "./../styles";
import CardBerita from "./Landing/CardBerita";
import CardPenanggulangan from "./Landing/CardPenanggulangan";
import CardMitigasi from "./CardMitigasi";
import CarouselLanding from "./Landing/CarouselLanding";
import TitleSection from "./TitleSection";
import SubTitleSection from "./SubTitleSection";

const Landing = () => (
  <div className="w-full overflow-hidden mt-10">
    <div
      className={`bg-white ${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <div>
          <TitleSection title="Pengetahuan Kebencanaan" />
        </div>

        {/* definisi bencana */}
        <div>
          <SubTitleSection title="Definisi Bencana" />
        </div>
        <div className="flex pb-4 relative">
          <p className="basis-2/3 pr-10 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vero delectus? Consequuntur mollitia amet dolorum omnis reiciendis molestiae doloribus tempore odio ab ad quibusdam pariatur nulla voluptatum, sit quam veniam nostrum commodi aperiam ex eaque. Blanditiis eligendi aperiam dolorem minima enim libero eos reiciendis, harum officia, pariatur eius saepe soluta illum aspernatur distinctio hic, possimus corrupti nesciunt quidem? Corporis quod velit ex ratione iusto exercitationem, dolores rem quisquam laudantium! Dolor, amet magni quaerat eveniet reprehenderit velit facere eum qui nostrum asperiores doloremque doloribus. Corrupti autem rerum, dolore explicabo accusantium nulla esse, possimus, ullam temporibus nam et vel velit quas vitae.</p>
          <div className="basis-1/3">
            <CarouselLanding/>
          </div>
        </div>

        {/* card bencana */}
        <div className="w-2/3 mx-auto pb-3">
          <CardMitigasi/>
        </div>

        {/* potensi ancaman */}
        <div>
          <SubTitleSection title="Potensi Ancaman Bencana" />
          <img src="https://bnpb.go.id//uploads/24/3-4-1.jpg" alt="Peta Indonesia" className="w-2/3 rounded-[15px] mx-auto" />
          <p className="pb-3 pt-4 leading-8">Wilayah Indonesia terletak di daerah iklim tropis dengan dua musim yaitu panas dan hujan dengan ciri-ciri adanya perubahan cuaca, suhu dan arah angin yang cukup ekstrim. Kondisi iklim seperti ini digabungkan dengan kondisi topografi permukaan dan batuan yang relatif beragam, baik secara fisik maupun kimiawi, menghasilkan kondisi tanah yang subur. Sebaliknya, kondisi itu dapat menimbulkan beberapa akibat buruk bagi manusia seperti terjadinya bencana hidrometeorologi seperti banjir, tanah longsor, kebakaran hutan dan kekeringan. Seiring dengan berkembangnya waktu dan meningkatnya aktivitas manusia, kerusakan lingkungan hidup cenderung semakin parah dan memicu meningkatnya jumlah kejadian dan intensitas bencana hidrometeorologi (banjir, tanah longsor dan kekeringan) yang terjadi secara silih berganti di banyak daerah di Indonesia. Pada tahun 2006 saja terjadi bencana tanah longsor dan banjir bandang di Jember, Banjarnegara, Manado, Trenggalek dan beberapa daerah lainnya. Meskipun pembangunan di Indonesia telah dirancang dan didesain sedemikian rupa dengan dampak lingkungan yang minimal, proses pembangunan tetap menimbulkan dampak kerusakan lingkungan dan ekosistem. Pembangunan yang selama ini bertumpu pada eksploitasi sumber daya alam (terutama dalam skala besar) menyebabkan hilangnya daya dukung sumber daya ini terhadap kehidupan mayarakat. Dari tahun ke tahun sumber daya hutan di Indonesia semakin berkurang, sementara itu pengusahaan sumber daya mineral juga mengakibatkan kerusakan ekosistem yang secara fisik sering menyebabkan peningkatan risiko bencana.</p>
        </div>

        {/* penanggulangan */}
        <div className="w-full mx-auto pb-3">
          <SubTitleSection title="Sistem Penanggulangan Bencana" />
          <CardPenanggulangan/>
        </div>

        <CardBerita />
      </div>
    </div>
  </div>
);

export default Landing;
