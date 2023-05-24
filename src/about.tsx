import { Link } from "react-router-dom";

//calculates approximate months since 8/9/2022
function calculateTime(): number {
    const current_date = new Date();
    const previous_date = new Date("2022-08-09");
    const one_month = 1000 * 60 * 60 * 24 * 30; //milliseconds in one month
    const difference_in_milliseconds = current_date.getTime() - previous_date.getTime();

    return Math.floor(difference_in_milliseconds / one_month);
}
const Other = () => {
    return (
        <section className="w-1/2 mr-4">

            <ol className="space-y-2 mt-2 ">
                <h2 className="mt-6 justify-start text-5xl ">
                    Some other interests of mine include:
                </h2>
                <li className="no-hover">
                    <span className="text-4xl pr-0.5">
                        &#10052;
                    </span>Music:
                    I've been very passionate
                    about all kinds of music ever since I was little and know quite a lot about it. I also produce it.</li>
                <li className="no-hover">
                    <span className="text-4xl pr-0.5">
                        &#10052;
                    </span>Gaming: Building a gaming PC is actually what created
                    an interest in computer science and brought me here!
                </li>
                <li className="no-hover">
                    <span className="text-4xl pr-0.5">
                        &#10052;
                    </span>
                    I've also been learning Japanese for about {calculateTime()} months as of writing this, and really enjoying the
                    process! I love learning new things.</li>
            </ol>
        </section>
    )
}

const Desc = () => {
    return (
        <div className="w-2/3" >
            <section className='flex flex-col ml-4 pl-4 text-2xl 
        not-shadow leading-loose px-8 rounded-tr-2xl rounded-br-2xl 
        rounded bl-2xl'>
                <h1 className="flex justify-start text-5xl mt-6">Hi, I'm Ben</h1>
                <p className="mt-8">
                    I am a primarily self-taught front end web developer. I pride myself on my imagination and creativity, which I hope is visible in my projects. I don't yet have any
                    experience in the field, but I love what I do and am eager to learn
                    and build some awesome things! I'm also very interested in learning back end development, but the focus is front for now.
                    You can see what I've built <Link to="/projects" className="link_">here</Link>.
                </p>

            </section>
        </div>
    )
}
const About = () => {
    //make the h1 look really fancy 
    return (
        <section className="w-full flex">
            <div className="flex flex-row glass w-2/3 h-fit pb-4 rounded-tr-2xl rounded-br-2xl">
                <Desc />
                <Other />
            </div>
            <section className="flex flex-row w-2/3">
                <Photos />
            </section>
        </section>
    );
}
const Photos = () => {
    return (
        <main className="glass-photos rounded-xl w-1/2 flex ml-[10rem]  
        mt-12 h-[90vh] overflow-y-scroll sticky top-20 ">
            <ul className="flex flex-col space-y-8 justify-center 
            m-auto py-7 px-7 text-3xl">
                <li>
                    <figure>
                        <img src={require("./assets/nsls.jpeg")}
                            alt="nsls nomination"
                            className="rounded-xl" />
                        <figcaption>Though I decided to switch to self-teaching
                            for various reasons, I was nominated into NSLS while in college, and joined it.
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/setup.jpeg")}
                            alt="pc setup"
                            className="rounded-xl" />
                        <figcaption>
                            Where the magic happens
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/pupper.jpeg")}
                            alt="me and my dog"
                            className="rounded-xl" />
                        <figcaption>
                            One of my favorite pictures of one of my dogs and I
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/tat.jpeg")}
                            alt="my binary tattoo"
                            className="rounded-xl" />
                        <figcaption>
                            My name in binary (shortened to "Ben")
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/firstcode.jpeg")}
                            alt="my first ever program"
                            className="rounded-xl" />
                        <figcaption>
                            The first original program I ever wrote, a simple text based RPG battle game.
                            Also see <a href="https://github.com/OblivionNoirV2/god_killer" target="blank_">this!</a>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/catcode.jpeg")}
                            alt="cat next to programming book"
                            className="rounded-xl" />
                        <figcaption>
                            My genius secretary.
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </main>
    );
}


export default About;
