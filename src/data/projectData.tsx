import React from "react";
import {ProjectInterface} from "../interfaces/projectInterface";

export const PROJECTS_DATA: ProjectInterface[] = [
    {
        title: "Auto RaceCar",
        description: " C++ based project, ground up architecture, Using Arduino for " +
            "sensors control, definition and implementation of communication and control APIs," +
            "controlled remotely using TCP/UDP, integrating between different sensors, programed on a Linux OS",
        link: "https://github.com/Adimazuz/AutoRaceCar",
        imageSrc: "res/auto-racecar.jpeg"
    },
    {
        title: "Improved object detection",
        description: "Python based project, created a smart system to choose bounding boxes for object localization using scikit and Deep" +
            " learning algorithms YOLO/Masked-RCNN, creating and preprocessing datasets, analyzing results",
        link: "https://github.com/DimaKolt/YoloAndmRCNN",
        imageSrc: "res/od.png"
    },
    {
        title: "This Website",
        description: "This website was created with using react, I started this site as a personal project after completing a full-stack course in udemy in which i learnd: HTML, CSS, Bootstrap, JavaScript, Node.js, Databases, Rest-API, React",
        link: "https://github.com/Adimazuz/react-personal-website",
        imageSrc: "res/placeholder.jpeg",
    },
]