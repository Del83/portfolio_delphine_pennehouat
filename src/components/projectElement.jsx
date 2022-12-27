import github from "../assets/github.png";
import "../styles/App.css";

export default function ProjectElement({ image, alt, linkGithub, linkSite }) {
  return (
    <figure className="projects-element">
      <img src={image} className="projects-element-image" alt={alt}></img>

      <figcaption>
        <a
          href={linkSite}
          className="projects-element-link-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="logo-networks" alt="logo github"></img>
          <span className="projects-element-link">lien vers le site</span>
        </a>
        <a
          href={linkGithub}
          className="projects-element-link-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="logo-networks" alt="logo github"></img>
          <span className="projects-element-link">lien Github</span>
        </a>
      </figcaption>
    </figure>
  );
}
