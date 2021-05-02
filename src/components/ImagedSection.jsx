import React from "react";

export default function Imagedsection(props) {
  const t_style = {
    backgroundImage: `url(${props.image})`,
    height: "30rem",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div class="container fluid" id={props.id} style={t_style}>
      <div class="h-100 row align-items-center ">
        <div class="col">
          <h1 class="display-2 over-image-text">Hi, Im Adi</h1>
          <p class="display-6 over-image-text">A Programmer</p>

          <a
            href="../res/CV_Adi_Mazuz_2020_w.pdf"
            download="CV_Adi_Mazuz.pdf"
            class="btn btn-primary my-btn btn-danger my-button "
            rel="noopener noreferrer"
          >
            <i class="far fa-file-alt"></i> My CV
          </a>

          <a
            href="https://www.linkedin.com/in/adi-mazuz/"
            class="btn btn-primary my-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i> Linkdin
          </a>
          <a
            href="https://github.com/Adimazuz"
            class="btn btn-dark my-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
}
