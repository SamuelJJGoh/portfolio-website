import { useState } from "react";
import {cn} from '@/lib/utils';

const skills = [
  // Frontend
  { name: "HTML5", image: "/skills/html.png", level: 90, category: "frontend" },
  { name: "CSS", image: "/skills/css.png", level: 80, category: "frontend" },
  { name: "JavaScript", image: "/skills/js.png", level: 75, category: "frontend" },
  { name: "React", image: "/skills/react.png", level: 70, category: "frontend" },
  { name: "React Native", image: "/skills/react-native.png", level: 60, category: "frontend" },
  { name: "TypeScript", image: "/skills/ts.png", level: 40, category: "frontend" },
  { name: "Bootstrap 5", image: "/skills/bootstrap.png", level: 35, category: "frontend" },
  { name: "Tailwind CSS", image: "/skills/tailwind.png", level: 30, category: "frontend" },

  // Backend
  { name: "Python", image: "/skills/python.png", level: 85, category: "backend" },
  { name: "Node.js", image: "/skills/node-js.png", level: 70, category: "backend" },
  { name: "Express", image: "/skills/express.png", level: 65, category: "backend" },
  { name: "MongoDB", image: "/skills/mongo.png", level: 65, category: "backend" },  
  { name: "MySQL", image: "/skills/mysql.png", level: 60, category: "backend" },
  { name: "Flask", image: "/skills/flask.png", level: 60, category: "backend" },
  { name: "Java", image: "/skills/java.png", level: 60, category: "backend" },
  { name: "Jinja2", image: "/skills/jinja.png", level: 55, category: "backend" },

  // Tools
  { name: "Git/GitHub", image: "/skills/git.png", level: 85, category: "tools" },
  { name: "Jupyter", image: "/skills/jupyter.png", level: 80, category: "tools" },
  { name: "Postman", image: "/skills/postman.png", level: 75, category: "tools" },
  { name: "AWS", image: "/skills/aws.png", level: 50, category: "tools" },
  { name: "Expo", image: "/skills/expo.svg", level: 20, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                                )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="gradient-border p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex items-center justify-around">
                                <h3 className="font-semibold text-lg">{skill.name}</h3> 
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className={cn(
                                            "object-contain",
                                            skill.name === "MongoDB"
                                                ? "w-20 h-20"
                                                : skill.name === "Python"
                                                ? "w-10 h-10"
                                                : skill.name === "Jinja2"
                                                ? "w-15 h-15"
                                                : skill.name === "Flask"
                                                ? "w-15 h-15"
                                                : "w-[50px] h-[50px]"
                                            
                                        )}
                                    />
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                     style={{width: `${skill.level}%`}}
                                />
                            </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
