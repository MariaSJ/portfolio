import Data from "./Data";
import Social from "./Social";

const Home = (props) => {

    return (
    <>
        <section className="home" id="home">
            <div className="home__container">
                <div className="home__content">
                    <Social />
                    <div className="home__img"></div>
                    <Data/>
                </div>
            </div>
        </section>
        <footer className="home__footer">
           <p className="home__text">Made with ❤︎ by María SJ</p>     
        </footer>
    </>    
    );
}


export default Home;