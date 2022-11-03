import "./Navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";




const Navbar = () => {
    return (
        <div className="NavBar">
            <div className="Nav-one">
                <h1>Netflax</h1>
                <div className="Nav-button">Home</div>
                <div className="Nav-button">Serial</div>
                <div className="Nav-button">Movies</div>
                <div className="Nav-button">My List</div>
            </div>
            <div className="Nav-two">
                <div className="SearchIcon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                <div className="Bell">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="img-cat">
                    <img src='http://placekitten.com/g/64/64' alt=''></img>
                </div>
            </div>

        </div>



    )
}

export default Navbar

//najpierw navbar  2 divy w jednym dużym divie

//component hero, ma mieć 2 divy w tym jeden tekst, a drugi button
// szerokość 100%, wysokość np 300px

//sekcja filmów (MoviesList) component, niech zwraca pusego diva
//sekcja dla pojedynczego fiolmi Tile - ma zwracać img z url daj link obrazka