const Navbar = () => {
    return <div className="fixed top-0 left-0 w-full h-16 bg-gray-950 flex flex-row flex-wrap justify-center gap-10 text-xl font-semibold items-center text-gray-50">
        <a href="#" className="font-semibold after:block after:origin-middle after:scale-x-0 after:border-b-2 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-150 transition-all duration-200">Úvod</a>
        <a href="about" className="font-semibold after:block after:origin-middle after:scale-x-0 after:border-b-2 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-150 transition-all duration-200">O Projektu</a>
        <a href="rules" className="font-semibold after:block after:origin-middle after:scale-x-0 after:border-b-2 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-150 transition-all duration-200">Pravidla</a>
        <a href="team" className="font-semibold after:block after:origin-middle after:scale-x-0 after:border-b-2 after:border-b-textlight after:transition-all hover:after:scale-x-120 after:ease-in-out after:duration-150 transition-all duration-200">A-Team</a>
    </div>
}

export default Navbar