import Home from "./Home";
import Services from "./Services";
// import Contact from "./Contact";
import About from "./About";
import Nasa from "./Nasa";

const links = [
  { to: "/", text: "Home", comp: Home() },
  { to: "/services", text: "Services", comp: Services() },
  { to: "/about", text: "About", comp: About() },
  { to: "/nasa", text: "Nasa", comp: Nasa() },
];

export default links;
