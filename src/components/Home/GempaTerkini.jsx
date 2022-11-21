import React from "react";
import TitleSection from "../TitleSection";
import InformasiGempa from "./InfromasiGempa";
import Leaflet from "./Leaflet";

const GempaTerkini = () => {
    return (
        <>
            <div className="w-full h-screen bg-gradient-to-l from-white via-white/70 to-transparent absolute flex items-center justify-end z-[1]">
                <div className="flex justify-center basis-1/2 flex-col p-28 text-right mr-4">
                    <div className="w-full pb-4">
                        <div className="text-right text-5xl font-semibold py-3">
                            GEMPA TERKINI
                        </div>
                    </div>
                    <InformasiGempa info="Wilayah" valueinfo="gempa dirasakan di daerah Kab. Pangandaran Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda!"/>
                    <InformasiGempa info="Waktu" valueinfo="5:12 WIB. 20-Nov-2024"/>
                    <InformasiGempa info="Magnitude" valueinfo="5.12"/>
                    <InformasiGempa info="Kedalaman" valueinfo="12 KM"/>
                    <InformasiGempa info="Potensi Tsunami" valueinfo="Tidak ada potensi"/>
                </div>
            </div>
            <div className="w-full h-screen overflow-hidden mb-5 relative z-0">
                {/* <img src="../../../src/assets/images/Home/Screenshot.png" className="w-full" alt="image placeholder" /> */}
                <Leaflet />
            </div>
        </>
    );
}

export default GempaTerkini;