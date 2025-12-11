import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {cn} from '@/lib/utils';
import {useToast} from '@/hooks/use-toast';
import { useState } from "react";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get in touch with you soon."
            })
            setIsSubmitting(false);
        }, 1500);
    };

    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        subject: "",
        message: ""
    })

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gradient-border p-8 rounded-lg shadow-xs">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-5 w-5 text-primary"/>
                                </div>
                                <div>
                                    <a href="mailto:samueljjgoh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        samueljjgoh@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-5 w-5 text-primary"/>
                                </div>
                                <div>
                                    <a href="tel:+447831566630" className="text-muted-foreground hover:text-primary transition-colors">
                                        +44 7831 566630
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-5 w-5 text-primary"/>
                                </div>
                                <div>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Manchester, UK
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-semibold mb-6 text-2xl">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/samuel-jun-je-goh/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaLinkedin className="h-8 w-8" />
                                </a>
                                <a
                                    href="https://www.instagram.com/samueljj.goh/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaInstagram className="h-8 w-8" />
                                </a>
                                <a
                                    href="https://github.com/SamuelJJGoh"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <FaGithub className="h-8 w-8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <User className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full pl-10 pr-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Name"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </div>

                            <div className="relative">
                                <Mail className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full pl-10 pr-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Email"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                            </div>

                            <div className="relative">
                                <MessageCircle className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    required 
                                    value={formData.subject}
                                    className="w-full pl-10 pr-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Subject"
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}/>
                            </div>

                            <div>
                                <textarea 
                                    name="message" 
                                    required 
                                    value={formData.message}
                                    className="w-full h-40 px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                            </div>

                            <button type="submit" disabled={isSubmitting}
                                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",                                                 
                            )}>
                                {isSubmitting ? "Sending" : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
