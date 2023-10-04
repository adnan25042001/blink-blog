const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between space-x-1 lg:space-x-5 font-bold px-10 py-5 mb-10 text-center md:text-left">
            <div>
                <h1 className="text-5xl md:text-6xl">Daily Blog</h1>
                <h2 className="mt-5 md:mt-8">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-yellow-500">
                        Everyone&apos;s
                    </span>{" "}
                    favourite blog site
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New product features | The latest in technology | The weekly
                debugging nightmares & more!
            </p>
        </div>
    );
};

export default Banner;
