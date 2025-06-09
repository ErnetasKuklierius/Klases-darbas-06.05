import React, { useState } from 'react'

export const Catlist = () => {
    const [cats, setCats] = useState([]);
    const [inputCatName, setInputCatName] = useState("");
    const [inputCircleColor, setInputCircleColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCatName && inputCircleColor) {
            setCats([...cats, { name: inputCatName, color: inputCircleColor }]);
            setInputCatName("");
            setInputCircleColor("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputCatName}
                    onChange={e => setInputCatName(e.target.value)}
                    placeholder="Cat name"
                />
                <select value={inputCircleColor} onChange={e => setInputCircleColor(e.target.value)}>
                    <option value="">Pick a color</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <fieldset>
                <legend>Cat list</legend>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    {cats.map((cat, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: cat.color.toLowerCase(),
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            {cat.name}
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}
