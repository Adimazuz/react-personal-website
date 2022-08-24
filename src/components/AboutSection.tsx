import React from "react";

interface AboutSectionProps {
    color: string
}

function AboutSection(props: AboutSectionProps) {
    const {color} = props;

    const div_style = {
        backgroundColor: color,
    };

    const p_style = {
        margin: "0%",
        padding: "1 rem",
        fontSize: "18px"
    };

    return (
        <div id="about" className="container my-rounded section" style={div_style}>
            <h1>About</h1>
            <img src="res/me.jpg" alt="Avatar" className="img-thumbnail my-image"/>

            <p style={p_style}>
                My name is Adi Mazuz, im a programmer , I recived my Bachlors degree of
                computer engineering from the Technion.
            </p>
            <p style={p_style}> I like Coding, Gaming and Anime 💻</p>
        </div>
    );
}

export default AboutSection;
