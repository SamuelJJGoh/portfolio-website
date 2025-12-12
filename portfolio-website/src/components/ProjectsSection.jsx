import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BlogNest",
        description: "A Flask-based blog application with Bootstrap styling and a PostgreSQL database.",
        image: "/projects/BlogNest.png",
        tags: ["Python", "Flask", "Bootstrap", "SQLAlchemy", "Jinja2"],
        url: "https://github.com/SamuelJJGoh/python-flask-blog-website"
    },
    {
        id: 2,
        title: "Weather App",
        description: "Responsive weather app with an Express proxy: search cities, view current conditions and 5‑day forecasts, toggle °C/°F, and save favourite cities.",
        image: "/projects/WeatherApp.png",
        tags: ["JavaScript", "HTML/CSS", "Node.js", "Express"],
        url: "https://github.com/SamuelJJGoh/weather-app"
    },
    {
        id: 3,
        title: "PL Match Predictor",
        description: "A machine learning model that uses scikit-learn to predict Premier League matches.",
        image: "/projects/PremierLeaguePrediction.png",
        tags: ["Python", "scikit-learn", "pandas"],
        url: "https://github.com/SamuelJJGoh/premier-league-match-prediction"
    },
    {
        id: 4,
        title: "Automated Birthday Reminder",
        description: "Daily email reminder that checks a CSV of friends’ birthdays (UK timezone) and emails me when there’s a match.",
        image: "/projects/BirthdayReminder.png",
        tags: ["Python", "GitHub Action", "pandas", "SMTP"],
        url: "https://github.com/SamuelJJGoh/automated-birthday-reminder"
    },
    
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured<span className="text-primary"> Projects</span> </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some recent projects. Click the external link icon below each card to explore them.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group gradient-border rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>  

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl; font-semibold mb-4">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-5">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.url} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    );
}
