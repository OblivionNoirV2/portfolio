//Similar thing to the photo carousel on the about page
const Projects = () => {

};

const TechAndProjects = () => {
    return (
        <main className="flex w-full ml-36">
            <div className="flex flex-col">
                <h1 className="text-3xl">Technologies I'm familiar with are the following:</h1>

                <ul className="tech-li w-full flex-col space-y-8 text-3xl">
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
        </main>
    )
}
export default TechAndProjects;