import React from "react";

const TableComponent = (props) => {
    return (
        <div className="w-full my-3">
            <div className="text-left text-3xl font-semibold">
                {props.title}
            </div>
        </div>
    );
}

TableComponent.defaultProps = {
    title: 'Judul'
}

export default TableComponent;