
//Put a little grid of images for each of these
const Projects = () => {
    return (
        <main className="project-c-con w-2/5 flex flex-col ml-[48rem] 
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
                            A full stack 2D RPG turn based combat system with an evolving
                            boss fight and over 20 different player actions. It keeps a score and
                            stores it in a database, which you can then compare to others.
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>Imaginary Cyberpunk Marketplace</h1>

                        <figcaption>
                            A full stack cyberpunk-themed online shopping site.
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
            </ul>
        </main>
    );
};


const TechAndProjects = () => {
    return (
        <main className="flex w-full ml-36">
            <div className="flex flex-col">
                <h1 className="text-3xl">Technologies I'm familiar with:
                </h1>

                <ul className="tech-li w-full flex-col space-y-8 text-3xl
                rounded-xl">
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        HTML
                        <img src={require("./assets/htmllogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        CSS
                        <img src={require("./assets/csslogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        Tailwind CSS
                        <img src={require("./assets/tailwindlogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        Javascript
                        <img src={require("./assets/jslogo.png")}
                            alt="javascript logo"
                        />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        Typescript
                        <img src={require("./assets/tslogo.png")}
                            alt="typescript logo" />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        React JS/TS
                        <img src={require("./assets/reactlogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        Node JS/TS
                        <img src={require("./assets/nodejslogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        MySQL
                        <img src={require("./assets/mysqllogo.png")} />
                    </li>
                    <li>
                        <span className="text-4xl pr-0.5">&#9734;</span>
                        Ruby (Desktop)
                        <img src={require("./assets/rubylogo.png")} />
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