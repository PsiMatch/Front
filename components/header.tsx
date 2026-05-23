"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [activeId, setActiveId] = useState("");
    const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = (id: string) => {
        setActiveId(id);
        setIsScrollingFromClick(true);
        setTimeout(() => {
            setIsScrollingFromClick(false);
        }, 800);
    };

    useEffect(() => {
        const sectionIds = ["filosofia", "como-funciona", "resenas", "cuestionario"];

        const handleScroll = () => {
            if (isScrollingFromClick) return;

            // Top of the page default state
            if (window.scrollY < 150) {
                setActiveId("");
                return;
            }

            const viewportCenter = window.innerHeight / 2;
            let closestId = "";
            let minDistance = Infinity;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestId = id;
                    }
                }
            }

            if (closestId) {
                setActiveId(closestId);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrollingFromClick]);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-sand/20 flex flex-row py-3 px-6 lg:px-30 justify-between items-center">
            <a
                href="#"
                onClick={() => {
                    handleNavLinkClick("");
                    setIsOpen(false);
                }}
                className="text-2xl font-bold text-foreground z-50"
            >
                PsiMatch
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row gap-6 items-center">
                <a
                    href="#cuestionario"
                    onClick={() => handleNavLinkClick("cuestionario")}
                    className={`not-italic leading-2xl pb-0.5 transition-all border-b-2 ${activeId === "cuestionario" || activeId === ""
                        ? "text-foreground border-black font-semibold"
                        : "text-foreground/80 hover:text-foreground border-transparent hover:border-black"
                        }`}
                >
                    Encontrar una terapeuta
                </a>
                <a
                    href="#filosofia"
                    onClick={() => handleNavLinkClick("filosofia")}
                    className={`not-italic leading-2xl pb-0.5 transition-all border-b-2 ${activeId === "filosofia"
                        ? "text-foreground border-black font-semibold"
                        : "text-foreground/80 hover:text-foreground border-transparent hover:border-black"
                        }`}
                >
                    Nuestra filosofía
                </a>
                <a
                    href="#como-funciona"
                    onClick={() => handleNavLinkClick("como-funciona")}
                    className={`not-italic leading-2xl pb-0.5 transition-all border-b-2 ${activeId === "como-funciona"
                        ? "text-foreground border-black font-semibold"
                        : "text-foreground/80 hover:text-foreground border-transparent hover:border-black"
                        }`}
                >
                    Cómo funciona
                </a>
                <a
                    href="#resenas"
                    onClick={() => handleNavLinkClick("resenas")}
                    className={`not-italic leading-2xl pb-0.5 transition-all border-b-2 ${activeId === "resenas"
                        ? "text-foreground border-black font-semibold"
                        : "text-foreground/80 hover:text-foreground border-transparent hover:border-black"
                        }`}
                >
                    Testimonios
                </a>
            </nav>

            {/* Desktop Actions */}
            <section className="hidden lg:flex flex-row gap-2 items-center justify-center">
                <Button variant={'ghost'} className="not-italic leading-2xl">Demo</Button>
                <Button variant={'default'} className="not-italic leading-2xl" asChild>
                    <a href="#cuestionario" onClick={() => handleNavLinkClick("cuestionario")}>Comenzar</a>
                </Button>
            </section>

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center p-2 text-foreground z-50 hover:bg-sand/10 rounded-full transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-sand/20 px-6 py-6 flex flex-col gap-6 lg:hidden shadow-lg animate-in slide-in-from-top duration-200 z-40">
                    <nav className="flex flex-col gap-4">
                        <a
                            href="#cuestionario"
                            onClick={() => {
                                handleNavLinkClick("cuestionario");
                                setIsOpen(false);
                            }}
                            className={`not-italic leading-2xl pb-1 transition-all border-b-2 w-fit ${activeId === "cuestionario" || activeId === ""
                                ? "text-foreground border-black font-semibold"
                                : "text-foreground/80 border-transparent"
                                }`}
                        >
                            Encontrar una terapeuta
                        </a>
                        <a
                            href="#filosofia"
                            onClick={() => {
                                handleNavLinkClick("filosofia");
                                setIsOpen(false);
                            }}
                            className={`not-italic leading-2xl pb-1 transition-all border-b-2 w-fit ${activeId === "filosofia"
                                ? "text-foreground border-black font-semibold"
                                : "text-foreground/80 border-transparent"
                                }`}
                        >
                            Nuestra filosofía
                        </a>
                        <a
                            href="#como-funciona"
                            onClick={() => {
                                handleNavLinkClick("como-funciona");
                                setIsOpen(false);
                            }}
                            className={`not-italic leading-2xl pb-1 transition-all border-b-2 w-fit ${activeId === "como-funciona"
                                ? "text-foreground border-black font-semibold"
                                : "text-foreground/80 border-transparent"
                                }`}
                        >
                            Cómo funciona
                        </a>
                        <a
                            href="#resenas"
                            onClick={() => {
                                handleNavLinkClick("resenas");
                                setIsOpen(false);
                            }}
                            className={`not-italic leading-2xl pb-1 transition-all border-b-2 w-fit ${activeId === "resenas"
                                ? "text-foreground border-black font-semibold"
                                : "text-foreground/80 border-transparent"
                                }`}
                        >
                            Testimonios
                        </a>
                    </nav>
                    <div className="flex flex-col gap-3 pt-4 border-t border-sand/20">
                        <Button variant={'ghost'} className="w-full not-italic justify-center">Demo</Button>
                        <Button variant={'default'} className="w-full not-italic justify-center" asChild>
                            <a
                                href="#cuestionario"
                                onClick={() => {
                                    handleNavLinkClick("cuestionario");
                                    setIsOpen(false);
                                }}
                            >
                                Comenzar
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}