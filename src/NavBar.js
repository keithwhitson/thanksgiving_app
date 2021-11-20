import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdReorder } from "react-icons/md";

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return(
    <>
    <div className="header-container">
    <nav className="NavbarItems"> 
    <MdReorder id="burger" className="toggleButton" onClick={() => setShowLinks(!showLinks)}/>
    <div id="menu-links">    
        <ul class="linked-list" id={showLinks ? "hidden" : ""}>
            <li className="links">
                <Link to="/thanksgiving_app" className="">Home</Link>
            </li>
            <li className="links">
                <Link to="/thanksgiving_app/starters" className="">Starters</Link>
            </li> 

            <li className="links">
                <Link to="/thanksgiving_app/desserts" className="">Desserts</Link>
            </li>
            <li className="links">
                <Link to="/thanksgiving_app/maincourse" className="">Main Courses</Link>
            </li>

            <li className="links">
                <Link to="/thanksgiving_app/drinks" className="">Drinks</Link>
            </li> 

        </ul>
                
        </div>
    </nav>
    </div>
    </>);

    };

export default NavBar;

// IoReorderFourSharp