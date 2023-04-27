//Every other word goes to the end of the container

const NameSegment = () => {
    return (
        <ul className="flex flex-col space-y-8 name-box ml-36 
        mt-12 text-zinc-200  w-1/5">
            <li className="flex text-7xl">Benjamin</li>
            <li className="flex text-6xl">Donahue</li>
            <li className="flex text-4xl">Full</li>
            <li className="flex text-4xl">Stack</li>
            <li className="flex text-4xl">Web</li>
            <li className="flex text-4xl">Developer</li>
        </ul>
    );
};

export default NameSegment;