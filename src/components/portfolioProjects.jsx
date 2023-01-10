import "../styles/App.css";
import oMmyFoodPicture from "../assets/projects/ohmyfood.png";
import toleArtPicture from "../assets/projects/toleArt.png";
import fishEyePicture from "../assets/projects/fisheye.png";
import lespetitsplatsPicture from "../assets/projects/lespetitsplats.png";
import kasaPicture from "../assets/projects/kasa.png";
import sportSeePicture from "../assets/projects/sportSee.png";
import argentBankPicture from "../assets/projects/argentBank.png";
import HRnetPicture from "../assets/projects/HRnet.png";

import oMmyFoodModal from "../assets/projects/ohmyfood_modal.png";
import toleArtModal from "../assets/projects/toleArt_modal.png";
import fishEyeModal from "../assets/projects/fisheye_modal.png";
import lespetitsplatsModal from "../assets/projects/lespetitsplats_modal.png";
import kasaModal from "../assets/projects/kasa_modal.png";
import sportSeeModal from "../assets/projects/sportSee_modal.png";
import argentBankModal from "../assets/projects/argentBank_modal.png";
import HRnetModal from "../assets/projects/HRnet_modal.png";

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
                image={toleArtPicture}
                imageModal={toleArtModal}
                techno="Wordpress"
                alt="Tôle Art picture"
                retail="Dans une démarche éco-responsable, le site propose des objets de décoration en provenance de Madagascar."
                textLink="Lien vers le site"
                linkSite="https://boutique.tole-art.fr/"
                textGithub=""
              />

              <ProjectElement
                image={oMmyFoodPicture}
                imageModal={oMmyFoodModal}
                techno="HTML5, CSS3, SASS"
                alt="Oh my food picture"
                retail="Site responsive, il répertorie les menus de restaurants gastronomiques. Réalisé à partir des maquettes mobile-first au format png. Les effets graphiques et animations ont été développés en CSS."
                textLink="Lien vers la démo du site"
                linkSite="https://del83.github.io/Pennehouat_Delphine_3_23112021/index.html"
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_3_23112021"
              />

              <ProjectElement
                image={fishEyePicture}
                imageModal={fishEyeModal}
                techno="HTML5, CSS3, JavaScript"
                alt="FishEye picture"
                retail="Site accessible pour une plateforme de photographes. Les fonctionnalités ont été développé avec JavaScript et des design patterns (gestion des likes, lightbox, formulaire de contact).
                Réalisé à partir des maquettes Figma."
                textLink="Lien vers la démo du site"
                linkSite="https://del83.github.io/Pennehouat_Delphine_6_Front-End-Fisheye-main_0222/index.html"
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_6_Front-End-Fisheye-main_0222"
                textFigma="Lien vers Figma"
                linkFigma="https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1&t=OXGTFguQCyr8yUxG-0"
              />
              <ProjectElement
                image={lespetitsplatsPicture}
                imageModal={lespetitsplatsModal}
                techno="HTML5, CSS3, JavaScript"
                alt="les petits plats picture"
                retail="Site de recettes de cuisine avec moteur de recherche par mots-clés. L’algorithme de recherche a été développé en JavaScript. Réalisé à partir des maquettes Figma."
                textLink=""
                linkSite=""
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_7_Les_petits_plats-main_0522"
                textFigma="Lien vers Figma"
                linkFigma="https://www.figma.com/file/xqeE1ZKlHUWi2Efo8r73NK/UI-Design-Les-Petits-Plats-FR?node-id=0%3A1&t=aQBImiypRUp26EFU-0"
              />
              <ProjectElement
                image={kasaPicture}
                imageModal={kasaModal}
                techno="HTML5, CSS3, JS, React, React Router"
                alt="kasa picture"
                retail="Plateforme web responsive de location d’appartements entre particuliers. L’ensemble de l’application est développé en React (les composants React, les routes React Router) en suivant les maquettes Figma."
                textLink="Lien vers la démo du site"
                linkSite="https://del83.github.io/kasa-pages/#/home"
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/kasa-pages"
                textFigma="Lien vers Figma"
                linkFigma="https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1&t=i8EgCw1BoPdrGMdb-0"
              />
              <ProjectElement
                image={sportSeePicture}
                imageModal={sportSeeModal}
                techno="HTML5, CSS3, JS, React, React Router, Recharts"
                retail="Tableau de bord d'analytics dédiée au coaching sportif, développé en REACT et Recharts. Les données proviennent d’une API."
                alt="Sport See picture"
                linkSite=""
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_12_SportSee_0822"
                textFigma="Lien vers Figma"
                linkFigma="https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1&t=n0k7LwW4AHT4OhuO-0"
              />
              <ProjectElement
                image={argentBankPicture}
                imageModal={argentBankModal}
                techno="HTML5, CSS3, JS, React, React Router, Redux"
                alt="Argent Bank picture"
                retail="Application bancaire permettant l’authentification des utilisateurs et la modification de leur profil. Le state de l’application est géré par Redux. Les données proviennent d’une API."
                linkSite=""
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine-13-ArgentBank-0822"
              />
              <ProjectElement
                image={HRnetPicture}
                imageModal={HRnetModal}
                techno="HTML5, CSS3, JS, React, React Router, Redux, Toolkit, NPM"
                alt="HR net picture"
                retail="Application de gestion des employés développée en React et le state est géré par Redux – Toolkit. Développement d’un plugin Table avec système de tri, de recherche et paging, publié sous NPM."
                linkSite=""
                textGithub="Lien vers github"
                linkGithub="https://github.com/Del83/Pennehouat_Delphine_14_HRnet_0922"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
