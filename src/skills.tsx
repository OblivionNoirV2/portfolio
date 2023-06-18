
//put an overlay on this that looks like glass
const Skills = () => {
    return (
        <div className="flex flex-col g -ml-4 h-full w-1/2  p-6 
            rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mt-12">

            <ul className="tech-li  flex-col space-y-12
                rounded-xl " >
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Git/Github
                    </span>
                    <img src={require("./assets/gitlogo.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Data Structures and Algorithms
                    </span>
                    <img src={require("./assets/dsaa.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Object Oriented Programming
                    </span>
                    <img src={require("./assets/oop.png")} />
                </li>
                <li >
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Declarative/
                        <br></br>
                        Imperative
                        Programming (React)
                    </span>
                    <img src={require("./assets/thecoolerreact.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Linux (Ubuntu)
                    </span>
                    <img src={require("./assets/birb.jpg")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Strong knowledge of CS and how computers work
                    </span>
                </li>
            </ul>
        </div>
    )
}
const Tech = () => {

    return (
        <div className="flex flex-col -ml-4 h-full w-1/2  p-6 
            rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mt-12">

            <ul className="tech-li w-full flex-col space-y-12
                rounded-xl " >
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        HTML
                    </span>
                    <img src={require("./assets/htmllogo.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        CSS
                    </span>

                    <img src={require("./assets/csslogo.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Tailwind CSS
                    </span>

                    <img src={require("./assets/tailwindlogo.png")} />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Javascript
                    </span>
                    <img src={require("./assets/jslogo.png")}
                        alt="javascript logo"
                    />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Typescript
                    </span>
                    <img src={require("./assets/tslogo.png")}
                        alt="typescript logo" />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        React JS/TS
                    </span>

                    <img src={require("./assets/reactlogo.png")}
                        className="mb-4" />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] -mt-2">
                        &#127800;
                        Ruby (Desktop)
                    </span>
                    <img src={require("./assets/rubylogo.png")}
                        className="mb-4" />
                </li>
                <li>
                    <span className="text-4xl pr-[1rem] mb-4 -mt-2">
                        &#127800;
                        ...And more to come!
                    </span>
                </li>
            </ul>
        </div>
    )
}
const TechSkills = () => {
    return (
        <main className="flex w-2/5 justify-center mx-auto mt-24 
        h-[90vh] sticky top-40  ">
            <div className="flex flex-col ">
                <ul className="flex flex-row justify-start text-5xl  ">
                    <li>
                        <h1>
                            Tech&#x21d3;
                        </h1>
                    </li>
                    <li className="ml-[21rem]">
                        <h1>
                            Skills&#x21d3;
                        </h1>
                    </li>
                </ul>
                <hr className="ts-hr"></hr>
                <div className="flex flex-row glass rounded-br-2xl 
                rounded-tr-2xl rounded-bl-2xl overflow-scroll">
                    <Tech />
                    <Skills />
                </div>
            </div>
        </main>
    )
}
export default TechSkills;