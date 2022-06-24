import Link from 'next/link';
import styles from './style.module.scss';
import { SignInButton } from '../SignInButton/SignInButton';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo" />
                </Link>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/board">
                        <a>Meu board</a>
                    </Link>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}