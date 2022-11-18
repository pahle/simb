import React from "react";

const TableComponent = (props) => {
    return (
        <div className="w-full">
            <div className="text-center text-xl font-semibold p-3">
                {props.title}
            </div>
        </div>
    );
}

TableComponent.defaultProps = {
    title: 'Judul'
}

export default TableComponent;