import html from "../assets/html5.png";
import css from "../assets/css3.png";
import sass from "../assets/sass.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";

import github from "../assets/github.png";
import git from "../assets/git.png";
import mongoDb from "../assets/mongodb.png";
import postman from "../assets/postman.png";
import npm from "../assets/npm.png";
import figma from "../assets/figma.png";
import trello from "../assets/trello.png";

import wordpress from "../assets/WP.png";
import elementor from "../assets/elementor.png";
import woocommerce from "../assets/woocommerce.png";
import stripe from "../assets/stripe.png";

import starFull from "../assets/starWhiteFull.png";
import starEmpty from "../assets/starWhiteEmpty.png";
import language from "../assets/language.png";
import tools from "../assets/tools.png";
import cms from "../assets/cms.png";

import SkillElement from "./skillElement";

import "../styles/App.css";

export default function PortfolioSkills() {
  return (
    <section className="skills">
      <div className="skills-frame">
        <p id="skills" className="skills-title">
          Mes compétences
        </p>
        <div className="skills-ctn">
          <div className="skills-box">
            <div className="skills-icon-ctn">
              <img
                src={language}
                className="icon-languages"
                alt="icon languages"
              />
            </div>

            <span className="skills-section">Langages de développement</span>

            <div className="skills-list">
              <SkillElement
                image={html}
                alt="logo HTML"
                skillName="HTML"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={css}
                alt="logo CSS"
                skillName="CSS"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={sass}
                alt="logo SASS"
                skillName="SASS"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={js}
                alt="logo JS"
                skillName="JavaScript"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={react}
                alt="logo REACT"
                skillName="React"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={redux}
                alt="logo Redux"
                skillName="Redux"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-icon-ctn">
              <img src={tools} className="icon-languages" alt="icon tools" />
            </div>

            <span className="skills-section">Outils de développement</span>
            <div className="skills-list">
              <SkillElement
                image={git}
                alt="logo GIT"
                skillName="Git"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={mongoDb}
                alt="logo mongoDB"
                skillName="MongoDB"
                level1={starFull}
                level2={starFull}
                level3={starEmpty}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={npm}
                alt="logo npm"
                skillName="NPM"
                level1={starFull}
                level2={starFull}
                level3={starEmpty}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={postman}
                alt="logo postman"
                skillName="PostMan"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={figma}
                alt="logo figma"
                skillName="Figma"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={trello}
                alt="logo Trello"
                skillName="Trello"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
            </div>
          </div>

          <div className="skills-box">
            <div className="skills-icon-ctn">
              <img src={cms} className="icon-languages" alt="icon cms" />
            </div>

            <span className="skills-section">CMS et ses extensions</span>
            <div className="skills-list">
              <SkillElement
                image={wordpress}
                alt="logo wordpress"
                skillName="WordPress"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starEmpty}
                level5={starEmpty}
              />
              <SkillElement
                image={elementor}
                alt="logo elementor"
                skillName="Elementor Pro"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={woocommerce}
                alt="logo woocommerce"
                skillName="WooCommerce"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
              <SkillElement
                image={stripe}
                alt="logo stripe"
                skillName="Stripe"
                level1={starFull}
                level2={starFull}
                level3={starFull}
                level4={starFull}
                level5={starEmpty}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
