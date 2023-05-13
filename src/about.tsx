import { Link } from "react-router-dom";
const About = () => {
    //make the h1 look really fancy 
    return (
        <>
            <div className="flex w-full">
                <section className='flex flex-col w-4/6 ml-36 pl-4 text-2xl 
        not-shadow leading-loose'>
                    <h1 className="flex justify-start text-5xl">Hi, I'm Ben</h1>
                    <p className="mt-8">
                        I'm a primarily self-taught full stack web developer, with a strong passion for
                        computer science, programming and art. I don't yet have any
                        experience in the field, but I love what I do and am eager to learn
                        and build some awesome things!
                        You can see what I've built <Link to="/projects" className="link_">here</Link>.
                    </p>
                    <h2 className="mt-6">Some other interests of mine include:</h2>
                    <ol className="space-y-2 mt-2">
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>Music:
                            I've been very passionate
                            about all kinds of music ever since I was little and know quite a lot about it. I also produce it occasionally.</li>
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>Gaming: Building a gaming PC is actually what created
                            an interest in computer science and brought me here!</li>
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>
                            I've also been learning Japanese for about 9 months as of writing this, and really enjoying the
                            process! I love learning new things and can see myself learning other languages in the distant future.</li>
                    </ol>
                </section>
                <section>
                    <Photos />
                </section>
            </div>
        </>
    );
}
//animated photo carousel, automatically scrolls at a timed interval
//with short descriptions of each photo

const Photos = () => {
    return (
        <main className="photo-c-con w-2/5 bg-black flex ml-[48rem] mr-auto 
        mt-12 h-[90vh] overflow-y-scroll ">
            <ul className="flex flex-col space-y-8 justify-center 
            m-auto py-7 px-7">
                <li>
                    <figure>
                        <img src={require("./assets/nsls.jpeg")}
                            alt="nsls nomination" />
                        <figcaption>Though I decided to switch to self-teaching
                            for various reasons, I was nominated into NSLS while in college, and joined it.
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/setup.jpeg")}
                            alt="pc setup" />
                        <figcaption>
                            Where the magic happens
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/pupper.jpeg")}
                            alt="me and my dog" />
                        <figcaption>
                            One of my favorite pictures of one of my dogs and I
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/tat.jpeg")}
                            alt="my binary tattoo" />
                        <figcaption>
                            My name in binary (shortened to "Ben")
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/firstcode.jpeg")}
                            alt="my first ever program" />
                        <figcaption>
                            The first original program I ever wrote, a simple text based RPG battle game.
                            Also see <a href="https://github.com/OblivionNoirV2/god_killer" target="blank_">this!</a>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={require("./assets/catcode.jpeg")}
                            alt="cat next to programming book" />
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
