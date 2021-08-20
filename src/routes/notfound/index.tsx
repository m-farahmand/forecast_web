import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Notfound: FunctionalComponent = () => {
    return (
        <div class={style.notfound}>
            <h1>خطای 404</h1>
            <p>این صفحه در دسترس نمی باشد.</p>
            <Link href="/">
                <h4>صفحه اصلی</h4>
            </Link>
        </div>
    );
};

export default Notfound;
