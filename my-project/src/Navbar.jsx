const Navbar = () => {
    return ( 
        <nav className="bg-my-beige px-2 py-4 w-full items-center drop-shadow-lg">
            <div className="px-3 flex justify-between items-center">
                <a className="text-3xl font-medium text-my-pink">
                    Taka Tasks
                </a>
                <div className="font-medium text-stone-700 flex gap-x-6">
                    {/* <a href="/">To Do</a>
                    <a href="/">Completed Tasks</a> */}
                    <button>Mode</button>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;