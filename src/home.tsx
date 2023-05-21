//lets have 2 box shadows that line up, so it looks like a circuit 

const ShortDesc = () => {
    return (
        <section className="w-5/12 flex shadow-name mt-24 rounded-r-xl">
            <p className="text-2xl ml-16 mr-8 mb-8 leading-normal">
                I'm a front end web developer with a passion for
                learning and creating. I have a love for creation and
                being a part of modern technology, and testing the limits
                of what we as programmers can create. During my lifetime I hope
                to build some awesome things and help progress the field I love.
            </p>
        </section>
    )
}
//Every word is below the prev and a little to the right
const NameSegment = () => {
    return (
        <main className="ml-28 flex w-full">
            <div className="p-[32rem] shadow-name w-8/12 
            pl-4 rounded-xl -mt-16 m-auto">
                <ul className="flex flex-row name-box -mt-48
                 text-zinc-200 pl-4 space-x-12 pt-4">
                    <div className="transform translate-y-[2vw]">
                        <li className="flex text-[2vw] no-hover">
                            Benjamin
                        </li>
                    </div>
                    <div className="transform translate-y-[4vw]">
                        <li className="flex text-[2vw] no-hover">
                            Donahue
                        </li>
                    </div>
                    <div className="transform translate-y-[6vw]">
                        <li className="flex text-[2vw] no-hover">
                            Front
                        </li>
                    </div>
                    <div className="transform translate-y-[8vw]">
                        <li className="flex text-[2vw] no-hover">
                            End
                        </li>
                    </div>
                    <div className="transform translate-y-[10vw]">
                        <li className="flex text-[2vw] no-hover">
                            Web
                        </li>
                    </div>
                    <div className="transform translate-y-[12vw]">
                        <li className="flex text-[2vw] no-hover">
                            Developer
                        </li>
                    </div>
                </ul>
            </div>
            <section>
                <ShortDesc />
            </section>
        </main>
    );
};



export default NameSegment;