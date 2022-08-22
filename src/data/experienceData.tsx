import {ExperienceInterface} from "../interfaces/expirenceInterface";

export const EXPERIENCE_DATA: ExperienceInterface[] = [
    {
        company: "Klear",
        period: "Nov 2021 - Currently",
        title: "Full Stack Engineer",
        description : " Developing web stuff.",
        link : "https://klear.com/",
        location : "Haifa",
        imgSrc : "data:image/png;base64,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",
        bullets : [
            "front end",
            "back end ",
            "more more ",
            "hello?",
            "Experience with Git and CI/CD process"],
    },
    {
        company : "Intel",
        period : "Feb 2021 - Nov 2021",
        title : "Software Engineer",
        description : " Developing a python testing framework for intel’s RealSense Technology.",
        link : "https://www.intel.com/content/www/us/en/architecture-and-technology/realsense-overview.html",
        location : "Haifa",
        imgSrc : "res/intel-logo.png",
        bullets : [
            "Working with a concurrent multithreaded framework",
            "leading major refactors to code using OOP/Clean code ",
            "working with agile methodology and conducting code reviews ",
            "Hands-on experience in Python, Java(Android)",
            "Experience with Git and CI/CD process",
        ]
    },
    {
        company : "Intel",
        period : "Aug 2018 - Feb 2021",
        title : "Software Engineer Intern",
        description : " Owner and developer of development tools for Intel’s Thunderbolt and next-generation USB",
        location : "Haifa",
        link : "https://www.intel.com/content/www/us/en/products/docs/io/thunderbolt/thunderbolt-technology-general.html#:~:text=Thunderbolt%E2%84%A2%20ports%20connect%20computers,office%2C%20or%20on%20the%20go.",
        imgSrc : "res/intel-logo.png",
        bullets :
            [
                "Tools development using OOP and Clean code methodologies",
                "Redesign of existing tool to be generic and non-project dependent",
                "Hands-on experience in Python, C++ and C#",
            ],
    },
    {
        company : "Technion",
        period : "2016 - 2020",
        title : "Bachlors in Computer Engineering",
        description : " Joint major of Electricity and Computer Science faculties.",
        location : "Haifa",
        imgSrc : "data:image/png;base64,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",
        bullets : ["3 Times Dean's excellence", "GPA 84"]

    }
]