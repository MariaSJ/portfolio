import ProyectElement from "./ProyectElement";
import ScrollUp from "./ScrollUp";

//Images
import RickAndMorty from "../images/rickandmorty.png"
import RingsOfPower from "../images/ringsofpower.png"
import BreakingBad from "../images/breakingbad.png"
import AdviceGenerator from "../images/advicegenerator.png"
import DebuggerCards from "../images/debuggercards.png"
import MinionCards from "../images/minioncard.png"
import TeamWeb from "../images/teamweb.png"
import AnonymusProxy from "../images/anonymus.png"

const Proyects = () => {

    return (
        <section className="proyects" id="proyects">
            <h1 className="proyects__title fade-in">Proyectos</h1>
            <div className="proyects__list fade-in-bottom">

                {/* RICK AND MORTY WEB */}
                <ProyectElement
                    title={'Rick and Morty Web'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-react proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                        </div>
                    }
                    img={RickAndMorty}
                    codeLink={'https://github.com/MariaSJ/rick-and-morty-website'}
                    webLink={'https://mariasj.github.io/rick-and-morty-website/'}
                />

                {/* THE RINGS OF POWER */}
                <ProyectElement
                    title={'The Rings of Power: The Game'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                        </div>
                    }
                    img={RingsOfPower}
                    codeLink={'https://github.com/MariaSJ/the-rings-of-power-game'}
                    webLink={'https://mariasj.github.io/the-rings-of-power-game/'}
                />

                {/* BREAKING BAD WEB */}
                <ProyectElement
                    title={'Breaking Bad Web'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                        </div>
                    }
                    img={BreakingBad}
                    codeLink={'https://github.com/MariaSJ/breaking-bad-characters-website'}
                    webLink={'https://mariasj.github.io/breaking-bad-characters-website//'}
                />

                {/* ADVICE GENERATOR */}
                <ProyectElement
                    title={'Advice Generator'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                        </div>
                    }
                    img={AdviceGenerator}
                    codeLink={'https://github.com/MariaSJ/advice-generator'}
                    webLink={'https://mariasj.github.io/advice-generator/'}
                />

                {/* AWESOME PROFILE CARDS I */}
                <ProyectElement
                    title={'Awesome Profile Cards I'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                        </div>
                    }
                    img={DebuggerCards}
                    codeLink={'https://github.com/MariaSJ/project-promo-r-module-2-team-9'}
                    webLink={'http://beta.adalab.es/project-promo-r-module-2-team-9/'}
                />

                {/* AWESOME PROFILE CARDS II */}
                <ProyectElement
                    title={'Awesome Profile Cards II'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-javascript proyects__techIcon'></i>
                            <i className='bx bxl-react proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon' ></i>
                            <i className='bx bx-server proyects__techIcon' ></i>
                        </div>
                    }
                    img={MinionCards}
                    codeLink={'https://github.com/MariaSJ/project-promo-r-module-4-team-8'}
                    webLink={'https://project-promo-r-module-4-team-8-production.up.railway.app/'}
                />

                {/* TEAM WEB */}
                <ProyectElement
                    title={'Team Web'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-html5 proyects__techIcon'></i>
                            <i className='bx bxl-css3 proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon'></i>
                        </div>
                    }
                    img={TeamWeb}
                    codeLink={'https://github.com/MariaSJ/proyect-promo-r-module-1-team-8'}
                    webLink={'http://beta.adalab.es/proyect-promo-r-module-1-team-8/'}
                />

                {/* ANONYMUS PROXY */}
                <ProyectElement
                    title={'Anonymus Proxy'}
                    techIcon={
                        <div className="proyects__tech">
                            <i className='bx bxl-html5 proyects__techIcon'></i>
                            <i className='bx bxl-css3 proyects__techIcon'></i>
                            <i className='bx bxl-sass proyects__techIcon'></i>
                        </div>
                    }
                    img={AnonymusProxy}
                    codeLink={'https://github.com/MariaSJ/anonymus-proxy-layout'}
                    webLink={'https://mariasj.github.io/anonymus-proxy-layout/'}
                />
            </div>
            <ScrollUp/>
        </section>
    );
}

export default Proyects;