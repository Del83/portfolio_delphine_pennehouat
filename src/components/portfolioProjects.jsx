import "../styles/App.css";
import oMmyFoodPicture from "../assets/ohmyfood.png";
import toleArtPicture from "../assets/toleArt.png";
import fishEyePicture from "../assets/fisheye.png";
import lespetitsplatsPicture from "../assets/lespetitsplats.png";
import kasaPicture from "../assets/kasa.png";
import sportSeePicture from "../assets/sportSee.png";
import argentBankPicture from "../assets/argentBank.png";
import HRnetPicture from "../assets/HRnet.png";

import projectIcon from "../assets/projects.png";
import ProjectElement from "./projectElement";

export default function PortfolioProjects() {
  return (
    <section className="projects">
      <div className="projects-frame">
        <p id="projects" className="projects-title">
          Mes projets
        </p>
        <div className="projects-ctn">
          <div className="skills-icon-ctn">
            <img
              src={projectIcon}
              className="icon-languages"
              alt="icon projects"
            />
          </div>
          <div className="projects-box">
            <div className="projects-list">
              <ProjectElement
                image={oMmyFoodPicture}
                alt="Oh my food picture"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_3_23112021"
                linkSite="https://del83.github.io/Pennehouat_Delphine_3_23112021/index.html"
              />
              <ProjectElement
                image={toleArtPicture}
                alt="Tôle Art picture"
                linkSite="https://boutique.tole-art.fr/"
              />
              <ProjectElement
                image={fishEyePicture}
                alt="FishEye picture"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_6_Front-End-Fisheye-main_0222"
                linkSite="https://del83.github.io/Pennehouat_Delphine_6_Front-End-Fisheye-main_0222/index.html"
              />
              <ProjectElement
                image={lespetitsplatsPicture}
                alt="les petits plats picture"
                linkGithub=""
                linkSite=""
              />
              <ProjectElement
                image={kasaPicture}
                alt="kasa picture"
                linkGithub=""
                linkSite=""
              />
              <ProjectElement
                image={sportSeePicture}
                alt="Sport See picture"
                linkGithub=""
                linkSite=""
              />
              <ProjectElement
                image={argentBankPicture}
                alt="Argent Bank picture"
                linkGithub=""
                linkSite=""
              />
              <ProjectElement
                image={HRnetPicture}
                alt="HR net picture"
                linkGithub=""
                linkSite=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
