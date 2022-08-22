import React, {CSSProperties} from "react";

interface SkillEntryProps {
    img: string
    alt: string
    text: string
}

export default function SkillEntry(props: SkillEntryProps) {
    const {img, alt, text} = props;
    const img_style = {
        marginRight: "0.5rem",
    };

    const listStyle: CSSProperties = {
        alignSelf: 'left'
    }

    return (
        <>
            <div className="container">
                <div style={listStyle}>
                    <img
                        className="bullet-logo"
                        src={img}
                        alt={alt}
                        style={img_style}
                    />
                    <strong>{text}</strong>
                </div>
            </div>
        </>
    );
}
