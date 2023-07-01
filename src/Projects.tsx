
const Projects = () => {
    return (
        <main className="glass w-2/5 flex flex-col ml-[48rem] 
        mr-auto mt-12 h-[90vh] overflow-y-scroll   rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
            <h1 className="text-5xl flex justify-center mx-auto 
            proj-title">
                Projects
            </h1>
            <ul className="proj-ul flex flex-col space-y-8 justify-center 
            mx-auto px-7 mt-4 rounded-xl">
                <li>
                    <figure>
                        <h1>Shadow's Requiem</h1>
                        <figcaption>
                            The largest project I've done.
                            A 2D RPG turn based combat system with an evolving
                            boss fight, dynamic menus, sound effects, status effects,
                            soundtrack created by me, difficulty options, and over 20 different player actions that runs in the browser.
                            It uses a combat system inspired by traditional JRPGs mixed with real time elements. No game engine, all React.
                            It also gives you a performance score at the end.
                        </figcaption>
                        image goes here
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>NeonNights</h1>
                        <figcaption>
                            An imaginary cyberpunk-themed online shopping site.
                            It does everything you'd expect a shopping site to do, but looks a lot cooler.
                            You can sort by different filters, create a cart, edit the cart, see an order summary with monetary calculations, play the theme song, 'checkout', etc.
                        </figcaption>
                        image goes here
                    </figure>
                </li>
                <li>
                    <figure>
                        <h1>Mechanical Keyboard Designer</h1>
                        <figcaption>
                            desc
                        </figcaption>
                        image goes here
                    </figure>
                </li>
            </ul>
        </main>
    );
};

export default Projects;