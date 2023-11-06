import React from "react";

const Errors = ({ errors = [], ...props }) => {
    return (
        <>
            {errors.length > 0 && (
                <div {...props}>
                    <div role="alert">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Error!
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            {errors.map((error) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Errors;
