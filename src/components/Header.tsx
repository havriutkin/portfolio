import ToggleButton from "./ToggleButton";

interface HeaderProps {
    onToggle: (value: boolean) => void;
}

function Header({ onToggle }: HeaderProps) {
    return (
        <header className=" font-jet-brains-mono text-xl dark:text-white
                            w-3/4 h-1/5 flex mx-5 
                            justify-start items-center">
            <div className="w-full md:w-1/2 lg:w-1/4 flex justify-around mt-5 gap-2">
                <a href="#projects" className=" transition-all hover:scale-105 hover:underline decoration-accent-purple decoration-4">Projects</a>
                <a href="#contacts" className=" transition-all hover:scale-105 hover:underline decoration-accent-purple decoration-4">Contacts</a>
                <ToggleButton onToggle={onToggle} value={true}/>
            </div>
        </header>
    );
}

export default Header;