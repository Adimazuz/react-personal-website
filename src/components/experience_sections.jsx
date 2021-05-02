// import ExperienceEntry from "./Experience_entry";
// import experience_data from "../data/experince_data";

// function createExperinceEntry(entry) {
//   return (
//     <ExperienceEntry
//       company={entry.company}
//       product={entry.department}
//       dates={entry.dates}
//       description={entry.description}
//       bullet_points={entry.bullet_points}
//     />
//   );
// }

function Experience_section(props) {
  const div_style = {
    backgroundColor: props.color,
  };

  return (
    <div id="experience" class="container my-rounded section" style={div_style}>
      <h1>Experience</h1>
      <p>
        All The Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id
        neque aliquam vestibulum morbi. Et ligula ullamcorper malesuada proin
        libero. In massa tempor nec feugiat nisl pretium fusce. Sed adipiscing
        diam donec adipiscing tristique risus.
      </p>
      {/* {experience_data.map(createExperinceEntry)} */}
    </div>
  );
}

export default Experience_section;
