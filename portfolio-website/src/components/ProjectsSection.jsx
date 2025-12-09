import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BlogNest",
        description: "A Flask-based Blog website with Bootstrap styling and PostgreSQL database support.",
        image: "/projects/BlogNest.png",
        tags: ["Python", "Flask", "Bootstrap", "SQLAlchemy", "Jinja"],
        url: "https://github.com/SamuelJJGoh/python-flask-blog-website"
    },
    {
        id: 2,
        title: "Weather App",
        description: "Responsive weather app with an Express proxy: search cities, view current conditions and 5‑day forecasts, toggle °C/°F, and save favourites.",
        image: "/projects/WeatherApp.png",
        tags: ["JavaScript", "HTML/CSS", "Node.js", "Express.js"],
        url: "https://github.com/SamuelJJGoh/weather-app"
    },
    {
        id: 3,
        title: "PL Match Preditor",
        description: "A machine learning model that uses scikit-learn to predict Premier League matches.",
        image: "/projects/PremierLeaguePrediction.png",
        tags: ["Python", "Sci-kit Learn", "Pandas"],
        url: "https://github.com/SamuelJJGoh/premier-league-match-prediction"
    },
    
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects</span> </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some recent projects. Click the external link icon at the bottom to explore each one.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>  

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl; font-semibold mb-4">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-5">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                       href="https://github.com/SamuelJJGoh" target="_blank">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section> 
    );
}
