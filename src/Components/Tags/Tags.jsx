import React from "react";

function Tags({ tags }) {
    return (
        <div className="kas-tags">
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </div>
    );
}

export default Tags;
