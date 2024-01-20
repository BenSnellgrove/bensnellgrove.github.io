const name = "This website";
const desc =
  "This is some information regarding the project. It is an interesting project, for which an associated image can be found to the right of this brief description. CLICK ME to find out more";
const projectLink = "https://github.com/BenSnellgrove/bensnellgrove.github.io/";
const imageName = "node_modules.jpg";

const images = require.context("./assets", true);
const itemImg = images("./" + imageName);

function Project() {
  return (
    <div>
      <a href={projectLink}>
        <div className="project">
          <div className="project-image">
            <img
              className="project-image"
              src={itemImg}
              alt="This is an pictographic section!"
            />
          </div>
          <div className="project-words">
            <div class="project-words" id="title">
              <h2>{name}</h2>
            </div>
            <div class="project-words" id="description">
              <p id="description">{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
