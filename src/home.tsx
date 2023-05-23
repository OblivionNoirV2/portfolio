//lets have 2 box shadows that line up, so it looks like a circuit 
import { Link } from "react-router-dom";

const GlassMenu = () => {
    return (
        <nav className='glass text-5xl rounded-2xl'>
            <ul className=' flex flex-col items-center '>
                <li className='add-hover mr-64 py-6 mx-6 mt-4'>
                    <Link to="/about">About</Link>
                </li>
                <li className="snowflake">
                    &#10052;
                </li>
                <li className='add-hover ml-64 py-6 mx-6 mt-4'>
                    <Link to="/skills">Skills</Link>
                </li>
                <li className="snowflake">
                    &#10052;
                </li>
                <li className='add-hover mr-64 py-6 mx-6 mt-4'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="snowflake">
                    &#10052;
                </li>
                <li className='add-hover ml-64 py-6 mx-6 mt-4'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="snowflake">
                    &#10052;
                </li>
            </ul>
        </nav>
    );
};


//Every word is below the prev and a little to the right
const NameSegment = () => {
    return (

        <main className="flex flex-row w-1/2 h-screen items-center">

            <div className="flex flex-col items-start ml-64">
                <h1 className="text-7xl">Welcome to my site</h1>
                <section className="mt-8 w-full">
                    <ShortDesc />
                </section>
            </div>
            <section className=" w-full">
                <GlassMenu />
            </section>

        </main>

    );
};



const ShortDesc = () => {
    return (
        <p className="text-2xl leading-loose w-2/3">
            I am Benjamin Donahue, a front end web developer with a passion for
            learning and creating. I have a love for creation and
            being a part of modern technology, and testing the limits
            of what we as programmers can create. During my lifetime I hope
            to build some awesome things and help progress the field I love.
        </p>
    )
}
export default NameSegment;