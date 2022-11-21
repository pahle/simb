import React from "react";
import GempaTerkini from "./Home/GempaTerkini";
import TitleSection from "./TitleSection";
import CardBerita from "./Home/CardBerita";
import Leaflet from "./Home/Leaflet";

const Home = () => {
    return(
        <section>            
            {/* berita */}
            <TitleSection title="Berita Gempa Bumi"/>
            <CardBerita thumbnail=""/>

            {/* about sitasu */}
            <TitleSection title="Tentang SiTaSu"/>
        </section>

    );
}

export default Home;