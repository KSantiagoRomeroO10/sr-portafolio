import './Navbar.css';

interface NavbarProps {
  buttons: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ buttons }) => {
  return (
    <nav className="navbar">
      {buttons}
    </nav>
  );
};

export default Navbar;

