const images = require.context("./assets", true);

function Project({ name, desc, link, img }) {
  let imageName = images("./image_not_found.png");
  try {
    imageName = images("./" + img);
  } catch (error) {}
  return (
    <div>
      <a href={link}>
        <div className="project">
          <div className="project-image">
            <img
              className="project-image"
              src={imageName}
              alt="This is an pictographic section!"
            />
          </div>
          <div className="project-words">
            <div className="project-words" id="title">
              <h2>{name}</h2>
            </div>
            <div className="project-words" id="description">
              <p id="description">{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
