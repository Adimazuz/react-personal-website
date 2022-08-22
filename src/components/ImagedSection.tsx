import React from "react";

interface ImagedsectionProps {
  id: string
  imageSrc: string
}

export default function Imagedsection(props : ImagedsectionProps) {

  const {id, imageSrc} = props;

  const t_style = {
    backgroundImage: `url(${imageSrc})`,
    height: "30rem",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="container fluid" id={id} style={t_style}>
      <div className="h-100 row align-items-center ">
        <div className="col">
          <h1 className="display-2 over-image-text">Hi, Im Adi</h1>
          <p className="display-6 over-image-text">A Programmer</p>

          <a
            href="../res/CV_Adi_Mazuz_2021_w.pdf"
            download="CV_Adi_Mazuz.pdf"
            className="btn btn-primary my-btn btn-danger my-button "
            rel="noopener noreferrer"
          >
            <i className="far fa-file-alt"></i> My CV
          </a>

          <a
            href="https://www.linkedin.com/in/adi-mazuz/"
            className="btn btn-primary my-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> Linkdin
          </a>
          <a
            href="https://github.com/Adimazuz"
            className="btn btn-dark my-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
}
