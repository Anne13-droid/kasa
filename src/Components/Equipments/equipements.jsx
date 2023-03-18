import React from "react";

function equipments() {
    const equipList = [{ equipments }];
console.log(equipList);
    return (
        <ul>
            {equipList.map((equipments) => (
                <li key={equipments}>{equipments}</li>
            ))}
        </ul>
    );
}

export default equipments;
