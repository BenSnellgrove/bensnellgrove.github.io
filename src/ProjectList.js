import Project from "./Project";

import jsonData from "./assets/projectlist.json";

let projects = [];
let featuredProject = null;

for (let i = 0; i < jsonData.projects.length; i++) {
  let _proj = (
    <Project
      {...{
        name: jsonData.projects[i].name,
        desc: jsonData.projects[i].description,
        link: jsonData.projects[i].projectLink,
        img: jsonData.projects[i].imageName,
      }}
    />
  );

  if (jsonData.projects[i].featured) {
    featuredProject = _proj;
    continue;
  }

  if (!jsonData.projects[i].featured) {
    projects.push(_proj);
  }
}

function ProjectList() {
  return <div className="projectList">{projects}</div>;
}

export default ProjectList;
