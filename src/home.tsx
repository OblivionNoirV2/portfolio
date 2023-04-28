//Every other word goes to the end of the container

const NameSegment = () => {
    return (
        <main className="ml-36 mr-auto">
            <ul className="flex flex-col space-y-8 name-box
        mt-12 text-zinc-200 max-w-md">
                <li className="flex text-7xl self-start">Benjamin</li>
                <li className="flex text-6xl">Donahue</li>
                <li className="flex text-4xl">Front</li>
                <li className="flex text-4xl">End</li>
                <li className="flex text-4xl">Web</li>
                <li className="flex text-4xl">Developer</li>
            </ul>
        </main>
    );
};

export default NameSegment;