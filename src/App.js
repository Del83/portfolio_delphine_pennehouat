import PortfolioTitle from "./components/portfolioTitle";
import PortfolioSkills from "./components/portfolioSkills";
import PortfolioAboutMe from "./components/portfolioAboutMe";
import PortfolioProjects from "./components/portfolioProjects";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PortfolioTitle />
      <PortfolioAboutMe />
      <PortfolioSkills />
      <PortfolioProjects />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
