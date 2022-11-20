import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardImage, CCardBody, CCardText, CCardTitle, CCol, CRow, CCardFooter } from '@coreui/react';
import Button from "../Button";

const CardBerita = (props) => {
    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src={props.thumbnail} alt="Thumbnail Berita" />
                <CCardBody>
                    <CCardTitle>{props.title}</CCardTitle>
                    <CCardText>
                    {props.excerpt}
                    </CCardText>
                </CCardBody>
                <div className="text-center pb-3">
                    <Button Button="Read more"/>
                </div>
                <CCardFooter>
                    <small className="text-medium-emphasis">Published {props.createdNews} mins ago</small>
                </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    );
}

CardBerita.defaultProps = {
    title: "Title Here",
    thumbnail: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque.",
    createdNews: "0"
}

export default CardBerita; 