import './header.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul> 
                    <li className="logo">
                        <img src="logo.png" alt="Logo" />
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                   
                    <li>
                        <Link href="/Login">Login</Link>
                    </li>
                    <li>
                        <Link href="/card">Card</Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}
