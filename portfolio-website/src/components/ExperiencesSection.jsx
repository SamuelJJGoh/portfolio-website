import {  MapPin, Briefcase, Calendar } from 'lucide-react';

export const ExperiencesSection = () => {

    return (
        <section id="experiences" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Experiences</span>
                    </h2>
                    <div className="gradient-border p-6 card-hover">
                        <h3 className="text-2xl font-semibold text-left">
                            React Native Developer 
                        </h3>
                        <div className="flex flex-row justify-between mt-2">
                            <span className="text-muted-foreground text-xl font-medium text-left">Pomelo</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-5 text-primary text-sm">
                             <div className='flex items-center gap-2'>
                                <Calendar size={16} /> August – October 2024
                            </div>
                            <div className='flex items-center gap-2'>
                                <MapPin size={16} /> Remote 
                            </div>
                            <div className='flex items-center gap-2'>
                                <Briefcase size={16} /> Project-Based
                            </div>
                        </div>
                        <div className="mt-10">
                            <ul className="list-disc space-y-2 text-left pl-4 text-muted-foreground text-md">
                                <li>Developed mobile UI components using React Native in a fast-paced startup environment</li>
                                <li>Built reusable front-end components using TypeScript and improved UI flows</li>
                                <li>Worked with GitHub workflows, code reviews, managing pull requests and agile development practices</li>
                                <li>Contributed to implementing new features and resolving UI bugs across the app</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 mb-4">
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">React Native</span> 
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">Expo</span>    
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">TypeScript</span>    
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">GitHub</span>    
                        </div>
                    </div>
            </div>
        </section>
    );
}
