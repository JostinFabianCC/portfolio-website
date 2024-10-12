const Header = () => {
    return (
        <header className="relative w-full h-96 bg-gray-100">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src="https://placehold.co/1600x400"  // URL temporal para imagen del header
                    alt="Profile Header Placeholder"
                    className="w-full h-full object-cover"
                />
            </div>
            <div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
                <p className="text-xl">Full Stack Developer passionate about building amazing web applications.</p>
            </div>
        </header>
    );
};

export default Header;
