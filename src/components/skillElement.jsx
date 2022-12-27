import "../styles/App.css";

export default function SkillElement({
  image,
  alt,
  skillName,
  level1,
  level2,
  level3,
  level4,
  level5,
}) {
  return (
    <figure className="skills-element">
      <div className="skills-element-background">
        <img src={image} className="logo-languages" alt={alt}></img>
      </div>

      <figcaption>
        <h4 className="skills-element-name">{skillName}</h4>
        <div>
          <img src={level1} className="skills-star" alt="level star"></img>
          <img src={level2} className="skills-star" alt="level star"></img>
          <img src={level3} className="skills-star" alt="level star"></img>
          <img src={level4} className="skills-star" alt="level star"></img>
          <img src={level5} className="skills-star" alt="level star"></img>
        </div>
      </figcaption>
    </figure>
  );
}
