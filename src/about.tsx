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
                        I'm a primarily self-taught Front End Web Developer with a strong passion for
                        computer science, programming and art. I don't yet have any
                        experience in the field, I but love what I do and am eager to learn
                        and build some awesome things!
                        You can see what I've built <Link to="/projects" className="link_">here</Link>.
                    </p>
                    <h2 className="mt-6">Some other interests of mine include:</h2>
                    <ol className="space-y-2 mt-2">
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>Music: I play guitar and have been very passionate
                            about all kinds of music ever since I was little.</li>
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>Gaming: Building a gaming PC is actually what created
                            an interest in computer science and brought me here!</li>
                        <li className="no-hover"><span className="text-4xl pr-0.5">&#9734;</span>Anything that makes you think. I'm very interested in psychology
                            and media that makes you use your head or tells a great story.
                            My penchant for that combined with my interest in artistry
                            and creation made front end web a good fit for me.</li>
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
        <main className="photo-c-con w-2/5 bg-black flex ml-[48rem] mr-auto mt-12 h-[90vh] overflow-y-scroll ">
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
                        <img src={require("./assets/guitar.jpeg")}
                            alt="me playing guitar" />
                        <figcaption>
                            Guitar, one of my favorite hobbies. (Yes, that's a 9 string - it's a metal thing &#x1f3b8;)
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
                        <img src={require("./assets/hobbes.jpeg")}
                            alt="meeting terrance hobbes" />
                        <figcaption>
                            Meeting Terrance Hobbes, a legendary guitarist in the metal scene
                        </figcaption>
                    </figure>

                </li>
            </ul>
        </main>
    );
}

export default About;
