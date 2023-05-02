//Every other word goes to the end of the container

const NameSegment = () => {
    return (
        <main className="ml-36 mr-auto">
            <ul className="flex flex-col space-y-8 name-box
        mt-12 text-zinc-200 max-w-md shadow-name pl-4 pt-4">
                <li className="flex text-7xl self-start no-hover">Benjamin</li>
                <li className="flex text-6xl no-hover">Donahue</li>
                <li className="flex text-4xl no-hover">Front</li>
                <li className="flex text-4xl no-hover">End</li>
                <li className="flex text-4xl no-hover">Web</li>
                <li className="flex text-4xl no-hover">Developer</li>
            </ul>
        </main>
    );
};

export default NameSegment;