import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react';
import ButtonComponent from "./ButtonComponent";

const CardComponent = (props) => {
    return (
        <CCard style={{ width: '18rem' }}>
            <CCardImage orientation="top" src={props.thumbnail} alt="thumbnail berita" />
            <CCardBody>
                <CCardTitle>{props.title}</CCardTitle>
                <CCardText>
                {props.excerpt}
                </CCardText>
                <ButtonComponent Button="Read more" />
            </CCardBody>
        </CCard>
    );
}

CardComponent.defaultProps = {
    title: "Button Here",
    props: "thumbnail.png",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque magnam, officia velit maxime odio dolorum quo distinctio quis. Quam culpa eveniet libero neque enim vero architecto vitae. Harum, aperiam cumque."
}

export default CardComponent; 