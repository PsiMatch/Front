"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
    const [activeId, setActiveId] = useState("");
    const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);

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
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-sand/20 flex flex-row py-3 px-30 justify-between items-center">
            <a
                href="#"
                onClick={() => handleNavLinkClick("")}
                className="text-2xl font-bold text-foreground"
            >
                PsiMatch
            </a>
            <nav className="flex flex-row gap-6 items-center">
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
            <section className="flex flex-row gap-2 items-center justify-center">
                <Button variant={'ghost'} className="not-italic leading-2xl">Demo</Button>
                <Button variant={'default'} className="not-italic leading-2xl" asChild>
                    <a href="#cuestionario" onClick={() => handleNavLinkClick("cuestionario")}>Comenzar</a>
                </Button>
            </section>
        </header>
    );
}