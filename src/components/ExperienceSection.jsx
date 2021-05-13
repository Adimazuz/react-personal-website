import ExperienceEntry from "./ExperienceEntry";

function Experience_section(props) {
  const div_style = {
    backgroundColor: props.color,
  };

  return (
    <div class="container my-rounded section" style={div_style}>
      <h1>Experience</h1>
      <h3 class="education-sub-heading my-text-left">Career</h3>
      <ExperienceEntry
        company="Intel"
        period="Feb 2021 - Currently"
        title="Software Engineer"
        description=" All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
      id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada
      proin libero. In massa tempor nec feugiat nisl pretium fusce."
        link="https://www.intel.com/content/www/us/en/architecture-and-technology/realsense-overview.html"
        location="Haifa"
        img="res/intel-logo.png"
      />
      <ExperienceEntry
        company="Intel"
        period="Aug 2018 - Feb 2021"
        title="Software Engineer Intern"
        description="
        All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
      id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada
      proin libero. In massa tempor nec feugiat nisl pretium fusce."
        location="Haifa"
        link="https://www.intel.com/content/www/us/en/products/docs/io/thunderbolt/thunderbolt-technology-general.html#:~:text=Thunderbolt%E2%84%A2%20ports%20connect%20computers,office%2C%20or%20on%20the%20go."
        img="res/intel-logo.png"
      />
      <hr />
      <h3 class="education-sub-heading my-text-left">Education</h3>
      <ExperienceEntry
        company="Technion"
        period="2016 - 2020"
        title="Bachlors in Computer Engineering"
        description=" All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
      id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada
      proin libero. In massa tempor nec feugiat nisl pretium fusce."
        location="Haifa"
        img="https://iim.technion.ac.il/wp-content/uploads/2016/08/cat-temp-image.jpg"
      />

      <ExperienceEntry
        company="Technion"
        period="2015 "
        title="Technion Prepratory"
        description="All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa."
        location="Haifa"
        img="https://iim.technion.ac.il/wp-content/uploads/2016/08/cat-temp-image.jpg"
      />
    </div>
  );
}

export default Experience_section;
