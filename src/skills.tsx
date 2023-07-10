import htmllogo from "./assets/htmllogo.png";
import csslogo from "./assets/csslogo.png";
import tailwindlogo from "./assets/tailwindlogo.png";
import jslogo from "./assets/jslogo.png";
import tslogo from "./assets/tslogo.png";
import reactlogo from "./assets/reactlogo.png";
import nextlogo from "./assets/thecoolerreact.png";

import gitlogo from "./assets/gitlogo.png";
import dsaa from "./assets/dsaa.png";
import linuxlogo from "./assets/birb.png";

interface ListItemProps {
    img_src?: string;
    text: string;
}
const ListItem: React.FC<ListItemProps> = ({ img_src, text }) => {
    return (
        <li className="">
            <span className="text-2xl pr-[1rem]">
                &#127800;
                {text}
            </span>
            {
                img_src &&
                <img src={img_src} />
            }

        </li>
    )

}
const Skills = () => {
    return (
        <div className="flex flex-col g -ml-4 h-full w-1/2  p-6 
            rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mt-12">

            <ul className="tech-li  flex-col space-y-12
                rounded-xl " >
                <ListItem
                    img_src={gitlogo}
                    text="Git/Github"
                />
                <ListItem
                    img_src={dsaa}
                    text="Data Structures and Algorithms"
                />
                <ListItem
                    img_src={linuxlogo}
                    text="Linux(Ubuntu)"
                />
                <ListItem
                    text="Big O Notation"
                />
                <ListItem
                    text="Using APIs"
                />
            </ul>
        </div>
    )
}


const Tech = () => {

    return (
        <div className="flex flex-col -ml-4 w-1/2  p-6 
            rounded-tr-2xl rounded-br-2xl rounded-bl-2xl mt-12">

            <ul className="tech-li w-full flex-col space-y-12
                rounded-xl " >
                <ListItem
                    img_src={htmllogo}
                    text="HTML"
                />
                <ListItem
                    img_src={csslogo}
                    text="CSS"
                />
                <ListItem
                    img_src={tailwindlogo}
                    text="Tailwind CSS"
                />
                <ListItem
                    img_src={jslogo}
                    text="Javascript"
                />
                <ListItem
                    img_src={tslogo}
                    text="Typescript"
                />
                <ListItem
                    img_src={reactlogo}
                    text="React JS/TS"
                />
                <ListItem
                    img_src={nextlogo}
                    text="Next JS/TS"
                />
                <a href="https://animejs.com/">
                    <ListItem
                        text="Anime.js"
                    />
                </a>
                <ListItem
                    text="...And more to come!"
                />
            </ul>
        </div>
    )
}
const TechSkills = () => {
    return (
        <main className="flex w-2/5 justify-center mx-auto 
          max-h-[95vh]">
            <div className="flex flex-col sticky top-40 ">
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
                rounded-tr-2xl rounded-bl-2xl overflow-scroll h-2/3">
                    <Tech />
                    <Skills />
                </div>
            </div>
        </main>
    )
}
export default TechSkills;