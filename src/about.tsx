import { Link } from "react-router-dom";
const About = () => {
    //make the h1 look really fancy 
    return (
        <main className='flex flex-col w-1/2 m-auto text-2xl not-shadow '>
            <h1>Hi, I'm Ben</h1>
            <p>
                I'm a Front End Web Developer with a strong passion for
                computer science, programming and art. I don't yet have any
                experience in the field, I but love what I do and am eager to learn
                and build some awesome things!
                You can see what I've built <Link to="/projects" className="link_">here</Link>.
            </p>

            Some other interests of mine include:
            <ol>
                <li className="no-hover">&#9734;Music: I play guitar and have been very passionate
                    about all kinds of music ever since I was little.</li>
                <li className="no-hover">&#9734;Gaming: Building a gaming PC is actually what created
                    an interest in computer science and brought me here!</li>
                <li className="no-hover">&#9734;Anything that makes you think. I'm very interested in psychology
                    and media that makes you use your head.
                    My inclination for that combined with my interest in artistry
                    and creation made front end web a good fit for me.</li>
            </ol>
        </main>
    )
}
export default About;