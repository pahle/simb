import React from "react";

const InformasiGempa = (props) => {
    return(
        <>
            <p className="font-semibold text-lg">{props.info}</p>
            <p className="pb-3">{props.valueinfo}</p>
        </>
    );
}

InformasiGempa.defaultProps = {
    info: "Jenis Informasi",
    valueinfo: "Deskripsi informasi disini"
}

export default InformasiGempa;