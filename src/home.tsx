//Every other word goes to the end of the container

const NameSegment = () => {
    return (
        <main>
            <div className="p-[32rem] shadow-name w-8/12 
            pl-4 rounded-xl -mt-16">
                <ul className="flex flex-row name-box -mt-48
                 text-zinc-200 pl-4 space-x-12 pt-4">
                    <div className="transform translate-y-[2rem]">
                        <li className="flex text-7xl self-start no-hover">
                            Benjamin</li>
                    </div>
                    <div className="transform translate-y-[6rem]">
                        <li className="flex text-6xl no-hover">
                            Donahue
                        </li>
                    </div>
                    <div className="transform translate-y-[12rem]">
                        <li className="flex text-4xl no-hover">
                            Full
                        </li>
                    </div>
                    <div className="transform translate-y-[18rem]">
                        <li className="flex text-4xl no-hover">
                            Stack
                        </li>
                    </div>
                    <div className="transform translate-y-[24rem]">
                        <li className="flex text-4xl no-hover">
                            Web
                        </li>
                    </div>
                    <div className="transform translate-y-[30rem]">
                        <li className="flex text-4xl no-hover">
                            Developer
                        </li>
                    </div>
                </ul>
            </div>
        </main>
    );
};


//what else should I put here? Fancy animation maybe?
export default NameSegment;