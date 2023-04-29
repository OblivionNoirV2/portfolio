import { Link } from "react-router-dom";
const About = () => {
    //make the h1 look really fancy 
    return (
        <>
            <div className="flex min-w-full">
                <section className='flex flex-col w-2/6 ml-36 pl-4 text-2xl 
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

                </section>
            </div>
            <Photos />
        </>
    );
}
//animated photo carousel, automatically scrolls at a timed interval
//with short descriptions of each photo
//don't forget the alt text!
const Photos = () => {
    return (
        <main className="photo-c-con w-2/5 bg-black flex ml-auto mr-24 -mt-[50rem]">
            <div className="w-[60rem] flex flex-col space-y-8 justify-center m-auto py-7">
                <img src={require("./assets/nsls.jpeg")} alt="nsls nomination" />
                <img src={require("./assets/setup.jpeg")} alt="pc setup" />
                <img src={require("./assets/pupper.jpeg")} alt="me and my dog" />
                <img src={require("./assets/guitar.jpeg")} alt="me playing guitar" />
                <img src={require("./assets/tat.jpeg")} alt="my binary tattoo" />
                <img src={require("./assets/hobbes.jpeg")} alt="meeting terrance hobbes" />
            </div>
        </main>
    );
}
export default About;
