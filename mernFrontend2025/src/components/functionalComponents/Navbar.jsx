import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isLearningDropdownOpen, setIsLearningDropdownOpen] = useState(false);
  const [isHooksDropdownOpen, setIsHooksDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    navigate(`/learn-react#${sectionId}`);
    setIsLearningDropdownOpen(false);
    setIsHooksDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">SECE MERN</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsLearningDropdownOpen(true)}
          onMouseLeave={() => setIsLearningDropdownOpen(false)}
        >
          <Link to="/learn-react" className="dropdown-toggle">
            Learning React <span className="arrow">▼</span>
          </Link>
          {isLearningDropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => handleSectionClick('props')}>Props</button></li>
              <li><button onClick={() => handleSectionClick('state')}>State</button></li>
            </ul>
          )}
        </li>
        <li 
          className="dropdown"
          onMouseEnter={() => setIsHooksDropdownOpen(true)}
          onMouseLeave={() => setIsHooksDropdownOpen(false)}
        >
          <span className="dropdown-toggle">
            Hooks <span className="arrow">▼</span>
          </span>
          {isHooksDropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => handleSectionClick('usestate')}>useState Hook</button></li>
              <li><button onClick={() => handleSectionClick('useeffect')}>useEffect Hook</button></li>
              <li><button onClick={() => handleSectionClick('useref')}>useRef Hook</button></li>
              <li><button onClick={() => handleSectionClick('usememo')}>useMemo Hook</button></li>
              <li><button onClick={() => handleSectionClick('usecallback')}>useCallback Hook</button></li>
            </ul>
          )}
        </li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar