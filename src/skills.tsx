
//Put a little grid of images for each of these
import GlassNavBar from "./GlassNav";

const Projects = () => {
    return (
        <main className="glass w-2/5 flex flex-col ml-[48rem] 
        mr-auto mt-12 h-[90vh] overflow-y-scroll">
            <h1 className="text-5xl flex justify-center mx-auto proj-title">
                Projects
            </h1>
            <ul className="proj-ul flex flex-col space-y-8 justify-center 
            mx-auto px-7 mt-4 rounded-xl">
                <li>
                    <figure>
                        <h1>Infinite Boss Battle</h1>
                        <figcaption>
                            The largest project I've done.
                            A 2D RPG turn based combat system with an evolving
                            boss fight and over 20 different player actions that runs in the browser.
                            It also gives you a performance score at the end.
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>NeonNights</h1>
                        <figcaption>
                            An imaginary cyberpunk-themed online shopping site.
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>Music Theory Reference</h1>
                        <figcaption>
                            A small front end music theory reference site I made for myself. Very useful!
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>BetterPass</h1>
                        <figcaption>
                            A multi-parameter CLI password generator for websites that uses
                            real dictionary words combined with options you choose to
                            create secure passwords that aren't impossible to remember.
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </main>
    );
};


const TechAndProjects = () => {
    return (
        <main className="flex w-full ml-36">
            <div className="flex flex-col tech-col -ml-4">
                <h1 className="text-3xl">Technologies I'm familiar with:
                </h1>

                <ul className="tech-li w-full flex-col space-y-8 text-3xl
                rounded-xl " >
                    <li>
                        <span className="text-5xl pr-[1rem] ">&#10052;</span>
                        HTML
                        <img src={require("./assets/htmllogo.png")} />
                    </li>
                    <li>
                        <span className="text-5xl pr-[1rem]">&#10052;</span>
                        CSS
                        <img src={require("./assets/csslogo.png")} />
                    </li>
                    <li>
                        <span className="text-5xl pr-[1rem]">&#10052;</span>
                        Tailwind CSS
                        <img src={require("./assets/tailwindlogo.png")} />
                    </li>
                    <li>
                        <span className="text-5xl pr-[1rem]">&#10052;</span>
                        Javascript
                        <img src={require("./assets/jslogo.png")}
                            alt="javascript logo"
                        />
                    </li>
                    <li>
                        <span className="text-5xl pr-[1rem]">&#10052;</span>
                        Typescript
                        <img src={require("./assets/tslogo.png")}
                            alt="typescript logo" />
                    </li>
                    <li>
                        <span className="text-5xl pr-[1rem] mb-4">&#10052;</span>
                        React JS/TS
                        <img src={require("./assets/reactlogo.png")}
                            className="mb-4" />
                    </li>
                </ul>
            </div>
            <section>
                <Projects />
            </section>
        </main>
    )
}
export default TechAndProjects;