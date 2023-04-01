"use client";

const Error = ({ error, reset }) => {
    return (
        <div>
            This ain't loading up: {error.message}
            <button onClick={() => reset()}>reset</button>
        </div>
    );
};

export default Error;