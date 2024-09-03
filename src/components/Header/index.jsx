import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return(
        <header id="cabecalho">
        <h1>Minha Página HTML - básico</h1>
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
        </header>
    )
}