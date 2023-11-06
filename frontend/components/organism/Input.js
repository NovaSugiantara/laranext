import React from "react";

export default function Input({
    type = text,
    disabled = false,
    className = "",
    ...props
}) {
    return (
        <input
            type={type}
            disabled={disabled}
            className={`${className} outline-none border border-indigo-400 h-10 px2 text-black rounded-lg`}
            {...props}
        />
    );
}
