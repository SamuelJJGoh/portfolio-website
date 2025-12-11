import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { House, ArrowLeft } from 'lucide-react';


export const NotFound = () => {

    return(
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <div className="space-y-4">
                        <h1 className="text-6xl font-bold text-primary">404</h1>
                        <p className="text-muted-foreground text-3xl">Page Not Found</p>
                        <a href="/" className="cosmic-button mt-4 inline-flex items-center justify-center gap-3">
                            <House size={16}/>Go Back Home <ArrowLeft size={16}/>
                        </a>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
