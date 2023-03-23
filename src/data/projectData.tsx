import {ProjectInterface} from "../interfaces/projectInterface";

export const PROJECTS_DATA: ProjectInterface[] = [
    {
        title: "Lopo",
        description: "geolocation-based messaging app that allows users to leave messages in specific locations on a map. " +
            "Whether you're out exploring the city or just taking a stroll in your neighborhood, Lopo makes it easy for you to share your thoughts, experiences, or tips with others.\n",
        link: "https://play.google.com/store/apps/details?id=com.messageWorld.message_world",
        imageSrc: "https://play-lh.googleusercontent.com/pcXqGEMqxS0EWxUudew3ZjHQtmbbVVbcSMIyMZO-ztXmDktJys4fl8_Qz331nd26ag=w526-h296-rw"
    },
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
]