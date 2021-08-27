import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>نمونه برنامه پیش بینی هوا</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    صفحه اصلی
                </Link>
                <Link activeClassName={style.active} href="/forecast">
                    نقشه
                </Link>
            </nav>
        </header>
    );
};

export default Header;
