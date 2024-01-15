import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({toggleDarkMode, darkMode}) => {
    return ( 
        <nav className="bg-light-rose dark:bg-dark-nav text-white px-2 py-4 w-full items-center drop-shadow-lg transition-colors duration-200">
            <div className="px-3 flex justify-between items-center">
                <a className="text-3xl font-medium ">
                    Taka Tasks
                </a>
                <div className="font-medium text-stone-700 flex gap-x-6">
                    <button
                        onClick={toggleDarkMode}
                    >
                        {
                            darkMode ?
                            <FontAwesomeIcon icon={faSun} style={{color: "#FFF5E0", width: "25px", height: "25px"}}/> :
                            <FontAwesomeIcon icon={faMoon} style={{color: "#FFF5E0", width: "25px", height: "25px"}}/>
                        }
                    </button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;