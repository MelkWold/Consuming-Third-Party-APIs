import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function NavBar(){
    return(
        <nav className={style.nav}>
            <ul>
                <li><Link to = {"/planets"}>Planets</Link></li>
                <li><Link to = {"/starships"}>Starships</Link></li>
                <li><Link to = {"/"}>People</Link></li>
            </ul>
        </nav>
    )
}