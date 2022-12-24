import Data from "./Data";
import Social from "./Social";

const Home = (props) => {

    return (
        <section className="home" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data/>
                </div>

            </div>
        </section>

    );
}


export default Home;