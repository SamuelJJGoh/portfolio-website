import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const HeroSection = () => {
    
    return(
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <span className="px-6 py-2 rounded-full border border-primary inline-flex items-center justify-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
                        Open To Work
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="block sm:inline text-primary opacity-0 animate-fade-in-delay-1"> Samuel Goh,</span>
                        <span className="block text-gradient opacity-0 animate-fade-in-delay-2">a Full-Stack Developer</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I build modern end-to-end web applications. Specialising in the MERN stack, 
                        I turn ideas into clean, functional web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button w-full sm:w-auto text-center">
                            View My Work
                        </a>
                        <a className="cosmic-button w-full sm:w-auto flex items-center justify-center gap-3" 
                           href="https://github.com/SamuelJJGoh" target="_blank" rel="noreferrer">
                            <FaGithub /> Check My GitHub <ArrowRight size={16}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
}
