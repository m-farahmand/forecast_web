import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>صفحه اصلی</h1>
            <p>این برنامه برای نمونه ساخته شده است</p>
        </div>
    );
};

export default Home;
