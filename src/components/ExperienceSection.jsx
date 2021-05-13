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
        company="intel"
        period="Feb 2021 - Currently"
        title="Software Engineer"
        description=" All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
      id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada
      proin libero. In massa tempor nec feugiat nisl pretium fusce."
      />
      <ExperienceEntry
        company="intel"
        period="Aug 2018 - Feb 2021"
        title="Software Engineer Intern"
        description="
        All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
      id neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada
      proin libero. In massa tempor nec feugiat nisl pretium fusce."
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
      />

      <ExperienceEntry
        company="Technion"
        period="2015 "
        title="Technion Prepratory"
        description="            All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa."
      />
    </div>
  );
}

export default Experience_section;
