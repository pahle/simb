import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardBody, CCardText, CCol, CRow, CCardHeader } from '@coreui/react';

const CardPenanggulangan = () => {
    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            <CCol xs>
                <CCard>
                    <CCardHeader className="font-semibold">Legislasi</CCardHeader>
                    <CCardBody>
                        <blockquote className="blockquote mb-0">
                        <CCardText>Pemerintah Indonesia telah mengesahkan Undang-Undang Nomor 24 Tahun 2007 Tentang Penanggulangan Bencana. Produk hukum di bawahnya antara lain Peraturan Pemerintah , Peraturan Presiden, Peraturan Kepala Kepala Badan, serta peraturan daerah.</CCardText>
                        <footer className="blockquote-footer mt-0">
                            Source <cite title="Source Title">bnpb.go.id</cite>
                        </footer>
                        </blockquote>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                    <CCardHeader className="font-semibold">Kelembagaan</CCardHeader>
                    <CCardBody>
                        <blockquote className="blockquote mb-0">
                        <CCardText>Badan Nasional Penanggulangan Bencana (BNPB) merupakan focal point lembaga pemerintah di tingkat pusat. Sementara itu, focal point penanggulangan bencana di tingkat provinsi dan kabupaten/kota adalah Badan Penanggulangan Bencana Daerah (BPBD).</CCardText>
                        <footer className="blockquote-footer mt-0">
                            Source <cite title="Source Title">bnpb.go.id</cite>
                        </footer>
                        </blockquote>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xs>
                <CCard>
                    <CCardHeader className="font-semibold">Pendanaan</CCardHeader>
                    <CCardBody>
                        <blockquote className="blockquote mb-0">
                        <CCardText>Keseriusan Pemerintah Indonesia terhadap masalah bencana sangat tinggi dengan dibuktikan dengan penganggaran yang signifikan khususnya untuk pengarusutamaan pengurangan risiko bencana dalam pembangunan.</CCardText>
                        <footer className="blockquote-footer mt-0">
                            Source <cite title="Source Title">bnpb.go.id</cite>
                        </footer>
                        </blockquote>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

CardPenanggulangan.defaultProps = {
    title: "Title Here",
    thumbnail: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque."
}

export default CardPenanggulangan; 