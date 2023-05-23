
import { Link } from "react-router-dom";
const GlassNavBar = () => {
    return (
        <nav className='glass-nav text-2xl w-1/4 justify-end ml-auto rounded-bl-xl sticky top-0'>
            <ul className=' flex flex-row justify-end '>

                <li className='add-hover my-2'>
                    <Link to="/">
                        <span className="snowflake">
                            &#10052;
                        </span>
                        Home
                    </Link>
                </li>

                <li className='add-hover my-2'>
                    <Link to="/about">
                        <span className="snowflake">
                            &#10052;
                        </span>
                        About
                    </Link>
                </li>

                <li className='add-hover my-2'>
                    <Link to="/skills">
                        <span className="snowflake">
                            &#10052;
                        </span>
                        Skills
                    </Link>
                </li>

                <li className='add-hover my-2'>
                    <Link to="/contact">
                        <span className="snowflake">
                            &#10052;
                        </span>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default GlassNavBar;