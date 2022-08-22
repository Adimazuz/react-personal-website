import React from "react";


interface RoundedSectionProps {
    children : React.ReactElement<any, any>
    title: string;
    sectionId? : string;
}

export default function RoundedSection(props: RoundedSectionProps) {
    const {children, title, sectionId} = props;

    return (
        <div className="container my-rounded-section section">
            <h1 id={sectionId}>{title}</h1>
            {children}
        </div>
    );
}