import ExperienceEntry from "./Experience_entry";
import experience_data from "../data/experince_data";

function createExperinceEntry(entry) {
  return (
    <ExperienceEntry
      company={entry.company}
      product={entry.department}
      dates={entry.dates}
      description={entry.description}
      bullet_points={entry.bullet_points}
    />
  );
}

function Experience_section(props) {
  const div_style = {
    backgroundColor: props.color,
  };

  const p_style = {
    margin: "0%",
    padding: "1 rem",
  };

  return (
    <div id="experience" class="container rounded section" style={div_style}>
      <h1>Experience</h1>
      {experience_data.map(createExperinceEntry)}
    </div>
  );
}

export default Experience_section;
