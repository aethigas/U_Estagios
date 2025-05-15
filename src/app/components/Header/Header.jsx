import './header.css';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className='simbolocima'>
                <img src='simbolo1.png' className='img' alt="Símbolo" />
            </div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li className="logo">
                            <img src="logo.png" alt="Logo" />
                        </li>
                        <li>
                            <Link href="/Login">Login</Link>
                        </li>
                        <li>
                            <Link href="/card"></Link>
                        </li>
                    </ul>
                  
                    
                </nav>
                <label className="ui-switch">
                        <input type="checkbox" />
                        <div className="slider">
                            <div className="circle"></div>
                        </div>
                    </label>
            </header>
        </>
    );
}
