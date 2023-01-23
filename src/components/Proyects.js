import ProyectElement from "./ProyectElement";

//Images
import RickAndMorty from "../images/rickandmorty.png"
import RingsOfPower from "../images/ringsofpower.png"
import BreakingBad from "../images/breakingbad.png"
import DebuggerCards from "../images/debuggercards.png"
import MinionCards from "../images/minioncard.png"
import TeamWeb from "../images/teamweb.png"
import AnonymusProxy from "../images/anonymus.png"

const Proyects = () => {

    return (
        <section className="proyects" id="proyects">
            <h1 className="proyects__title">Proyectos</h1>
            <div className="proyects__list">

                {/* RICK AND MORTY WEB */}
                <ProyectElement
                    title={'Rick and Morty Web'}
                    img={RickAndMorty}
                    codeLink={'https://github.com/MariaSJ/modulo-3-evaluacion-final-MariaSJ'}
                    webLink={'http://mariasj.github.io/modulo-3-evaluacion-final-MariaSJ/'}
                />

                {/* THE RINGS OF POWER */}
                <ProyectElement
                    title={'The Rings of Power: The Game'}
                    img={RingsOfPower}
                    codeLink={'https://github.com/MariaSJ/modulo-2-evaluacion-intermedia-MariaSJ'}
                    webLink={'http://mariasj.github.io/modulo-2-evaluacion-intermedia-MariaSJ/'}
                />

                {/* BREAKING BAD WEB */}
                <ProyectElement
                    title={'Breaking Bad Web'}
                    img={BreakingBad}
                    codeLink={'https://github.com/MariaSJ/modulo-2-evaluacion-final-MariaSJ'}
                    webLink={'http://mariasj.github.io/modulo-2-evaluacion-final-MariaSJ/'}
                />

                {/* AWESOME PROFILE CARDS I */}
                <ProyectElement
                    title={'Awesome Profile Cards I'}
                    img={DebuggerCards}
                    codeLink={'https://github.com/MariaSJ/project-promo-r-module-2-team-9'}
                    webLink={'http://beta.adalab.es/project-promo-r-module-2-team-9/'}
                />

                {/* AWESOME PROFILE CARDS II */}
                <ProyectElement
                    title={'Awesome Profile Cards II'}
                    img={MinionCards}
                    codeLink={'https://github.com/MariaSJ/project-promo-r-module-4-team-8'}
                    webLink={'https://project-promo-r-module-4-team-8-production.up.railway.app/'}
                />

                {/* TEAM WEB */}
                <ProyectElement
                    title={'Team Web'}
                    img={TeamWeb}
                    codeLink={'https://github.com/MariaSJ/proyect-promo-r-module-1-team-8'}
                    webLink={'http://beta.adalab.es/proyect-promo-r-module-1-team-8/'}
                />

                {/* ANONYMUS PROXY */}
                <ProyectElement
                    title={'Anonymus Proxy'}
                    img={AnonymusProxy}
                    codeLink={'https://github.com/MariaSJ/anonymus-proxy-layout'}
                    webLink={'https://mariasj.github.io/anonymus-proxy-layout/'}
                />

            </div>
        </section>
    );
}

export default Proyects;