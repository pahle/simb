import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardImage, CCardBody, CCardText, CCardTitle, CCol, CRow, CCardFooter } from '@coreui/react';
import ButtonComponent from "./Button";

const CardComponent = (props) => {
    return (
        // <CCard style={{ width: '18rem' }}>
        //     <CCardImage orientation="top" src={props.thumbnail} alt="thumbnail berita" />
        //     <CCardBody>
        //         <CCardTitle>{props.title}</CCardTitle>
        //         <CCardText className="pb-4">
        //         {props.excerpt}
        //         </CCardText>
        //         <ButtonComponent Button="Read more" />
        //     </CCardBody>
        // </CCard>

        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src="/images/react.jpg" alt="Thumbnail" />
                <CCardBody>
                    <CCardTitle>{props.title}</CCardTitle>
                    <CCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                    </CCardText>
                </CCardBody>
                <CCardFooter>
                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
    );
}

CardComponent.defaultProps = {
    title: "Title Here",
    thumbnail: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque."
}

export default CardComponent; 