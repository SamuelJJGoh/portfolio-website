import { useState } from "react";
import {cn} from '@/lib/utils';

const skills = [
  // Frontend
  { name: "JavaScript", description: "Core web language", image: "/skills/js.png", category: "frontend" },
  { name: "TypeScript", description: "JavaScript but better", image: "/skills/ts.png", category: "frontend" },
  { name: "React", description: "JavaScript library", image: "/skills/react.png", category: "frontend" },
  { name: "React Native", description: "Native apps with React", image: "/skills/react-native.png", category: "frontend" },
  { name: "Next.js", description: "React framework", image: "/skills/next-js.png", category: "frontend" },
  { name: "Tailwind CSS", description: "Utility-first CSS", image: "/skills/tailwind.png", category: "frontend" },

  // Backend
  { name: "Python", description: "General-purpose language", image: "/skills/python.png", category: "backend" },
  { name: "Node.js", description: "JavaScript runtime", image: "/skills/node-js.png", category: "backend" },
  { name: "Express", description: "Node.js web framework", image: "/skills/express.png", category: "backend" },
  { name: "MongoDB", description: "NoSQL database", image: "/skills/mongo.png", category: "backend" },

  // Tools
  { name: "Git", description: "Version control", image: "/skills/git.png", category: "tools" },
  { name: "Postman", description: "API testing", image: "/skills/postman.png", category: "tools" },
  { name: "AWS", description: "Cloud services", image: "/skills/aws.png", category: "tools" },
  { name: "Expo", description: "React Native tooling", image: "/skills/expo.svg", category: "tools" },
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
                        <div key={key} className="gradient-border p-6 rounded-lg shadow-xs card-hover h-full min-h-[120px]">
                            <div className="text-left flex items-center justify-between gap-4 h-full">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                                </div>
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
                                            : skill.name === "JavaScript"
                                            ? "w-10 h-10"
                                            : skill.name === "TypeScript"
                                            ? "w-10 h-10"
                                            : "w-[50px] h-[50px]"
                                    )}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
