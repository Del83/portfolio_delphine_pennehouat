//import github from "../assets/github.png";
import "../styles/App.css";

export default function ProjectElement({
  image,
  imageModal,
  techno,
  alt,
  retail,
  textLink,
  linkSite,
  textGithub,
  linkGithub,
  textFigma,
  linkFigma,
}) {
  return (
    <figure className="projects-element">
      <img src={image} className="projects-element-image" alt={alt}></img>

      <figcaption className="projects-elements-retail">
        <img
          src={imageModal}
          className="projects-element-modal"
          alt={alt}
        ></img>
        <div className="projects-element-retail-ctn">
          <div className="projects-element-retail-techno-ctn">
            <p>{retail}</p>
            <span className="projects-element-retail-techno">
              <strong>Stacks</strong> {techno}
            </span>
          </div>
          <div className="projects-element-retail-links">
            <a
              href={linkSite}
              className="projects-element-link-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="projects-element-link">{textLink}</span>
            </a>
            <a
              href={linkGithub}
              className="projects-element-link-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="projects-element-link">{textGithub}</span>
            </a>
            <a
              href={linkFigma}
              className="projects-element-link-figma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="projects-element-link">{textFigma}</span>
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
