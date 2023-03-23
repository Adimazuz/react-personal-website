import React from "react";


interface RoundedSectionProps {
    children : React.ReactElement<any, any>
    title: string;
}

export default function RoundedSection(props: RoundedSectionProps) {
    const {children, title} = props;

    return (
        <div className="container my-rounded-section section">
            <h1>{title}</h1>
            {children}
        </div>
    );
}