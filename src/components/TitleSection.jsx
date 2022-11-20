import React from "react";

const TableComponent = (props) => {
    return (
        <div className="w-full pb-4">
            <div className="text-center text-5xl font-semibold p-3">
                {props.title}
            </div>
        </div>
    );
}

TableComponent.defaultProps = {
    title: 'Judul'
}

export default TableComponent;