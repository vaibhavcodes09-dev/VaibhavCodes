import "../styles/glass.css";

const Navbar = () => {
  return (
    <nav className="glass mt-4 rounded-lg w-1/2 mx-auto fixed top-0 left-0 right-0 z-10">
      <ul className="flex  px-6 py-4 justify-between items-center ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
