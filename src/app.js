import Hero from "./components/Hero";
import HP from "./components/Homepage";
import Footer from "./components/Footer";

async function App() {
  const template = document.createElement("template");
  template.innerHTML = `${Hero()}${HP()}${Footer()}`;
  return template.content.cloneNode(true);
}

export default App;
