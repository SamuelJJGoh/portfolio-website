import {cn} from '@/lib/utils.js'
import { Menu, X, House, User, Briefcase, CodeXml, GitCompare, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { icon: <House size={16} />, name: "Home", href: "#hero" },
    { icon: <User size={16} />, name: "About", href: "#about" },
    { icon: <Briefcase size={16} />, name: "Experiences", href: "#experiences" },
    { icon: <CodeXml size={16} />, name: "Skills", href: "#skills" },
    { icon: <GitCompare size={16} />, name: "Projects", href: "#projects" },
    { icon: <Mail size={16} />, name: "Contact", href: "#contact" }
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () =>  window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav className={cn("fixed w-full z-40 transition-all duration-300 py-6", 
                                isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
            )}>

                <div className='container flex items-center justify-around'>
                    <a className='text-xl font-bold text-primary flex items-center' href="#hero">
                        <span className='relative z-10'>
                            <span className='text-glow text-foreground'>Samuel Goh</span> Portfolio
                        </span>
                    </a>

                    {/* desktop navbar */}
                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2'>
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* mobile navbar */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                    </button>
                    <div className={cn("fixed inset-0 h-screen w-screen bg-background/90 backdrop-blur-md z-30 flex flex-col items-center justify-center",
                                        "transition-all duration-300 md:hidden",
                                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                    )}>
                        <div className='flex flex-col space-y-8 text-xl items-start text-left'>
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2 leading-none'
                               onClick={() => setIsMenuOpen(false)}>
                                {item.icon}
                                {item.name}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
