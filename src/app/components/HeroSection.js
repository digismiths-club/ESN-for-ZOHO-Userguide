export default function HeroSection() {
    return (
        <div className="flex w-4/5 justify-evenly m-auto gap-20">
            <div className="content flex flex-col gap-6 w-1/2">
                <p className="text-xl">Presenting</p>
                <h1 className="text-4xl">Eisenhover Matrix</h1>
                <h2 className="text-2xl">A Free tool by <b>Digismiths</b></h2>
                <p className="text-lg font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button className="btn hover:h-[2.1rem] hover:w-[6.1rem]">Install now</button>
            </div>
            <div className="place-content-center">
                <img className="heroIconImg object-fit rounded-md"
                 src="https://tse2.mm.bing.net/th?id=OIP.c8tRVAajHyX2GDN5f2OymAHaEK&pid=Api&P=0&h=180" alt="img"></img>
            </div>
        </div>
    );
}

// https://digismiths-club.github.io/zoho-widget-user-guide/hero.png