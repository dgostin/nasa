import Home from "./Home";
import Services from "./Services";
// import Contact from "./Contact";
import About from "./About";

const links = [
  { to: "/", text: "Home", comp: Home() },
  { to: "/services", text: "Services", comp: Services() },
  { to: "/about", text: "About", comp: About() },
];

export default links;
