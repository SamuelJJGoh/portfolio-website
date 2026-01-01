import { Code, Workflow, Server } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa6";

export const AboutSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Full-Stack Developer
                        </h3>

                        <p className="text-muted-foreground">
                            I am a Computer Science and Mathematics graduate from the University of Manchester, currently based in <span className="text-primary">Manchester, UK. </span>
                        </p>
                        <p className="text-muted-foreground">
                            I primarily build full-stack web applications using the MERN stack, crafting clean and responsive 
                            interfaces with React and designing robust backend systems with Node.js and Express. 
                        </p>
                        <p className="text-muted-foreground">
                            I have experience working with both SQL and NoSQL databases, and strong proficiency in Python, 
                            where I've built APIs, automation tools, and data-driven applications. I am fluent in both English and Chinese Mandarin.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="/SamuelGohCV.pdf" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2">
                                <FaRegFilePdf className="h-5 w-5" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications using modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">API & Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Designing and developing robust server-side logic, REST APIs, and database integrations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Workflow className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Automation & Scripting</h4>
                                    <p className="text-muted-foreground">
                                        Building automation tools and scripts to streamline workflows and improve efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}


