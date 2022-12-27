import picture from "../assets/AvatarMaker1.svg";
import "../styles/App.css";

export default function PortfolioAboutMe() {
  return (
    <section className="about-me-ctn">
      <p id="about-me" className="about-me-title">
        Je suis développeuse et j'adore ça !
      </p>
      <div className="about-me-picture-ctn">
        <img src={picture} className="about-me-picture" alt="me"></img>
      </div>

      <p className="about-me-text">
        Après une belle carrière en tant que responsable planning d’une
        vingtaine de techniciens, <br />
        j’ai décidé de suivre un de mes rêves, apprendre le codage informatique.{" "}
        <br />
        <br />
        Passionnée par le monde de la tech, je me suis d'abord formée en
        autodidacte au <br />
        CMS Wordpress pour la création de la « boutique.tole-art.fr ». <br />
        <br />
        Puis l’envie d’aller plus loin m’a alors conduite à apprendre le métier
        de développeuse Front end.
        <br />
        <span className="about-me-identity">
          Delphine PENNEHOUAT <br /> 39 ans
        </span>
      </p>
    </section>
  );
}
