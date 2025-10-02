import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function NavBar(){
    return(
        <nav className={style.nav}>
            <ul>
                <Link to = {"/planets"}><li>Planets</li></Link>
                <Link to = {"/starships"}><li>Starships</li></Link>
                <Link to = {"/"}><li>People</li></Link>
            </ul>
        </nav>
    )
}