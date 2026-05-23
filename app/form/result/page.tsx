"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";

export default function ResultPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen w-full bg-[#FAF9F6] py-12 px-6 md:px-12 flex flex-col items-center gap-16">
            {/* Screen 1: Ideal Approach */}
            <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
                {/* Gear / Brain Icon in Circle */}
                <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#622c91] shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="none" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>

                <div className="text-center flex flex-col gap-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#111111]">Tu Enfoque Ideal</h1>
                    <p className="text-zinc-600 font-inter text-base max-w-md mx-auto leading-relaxed">
                        Basado en tus respuestas, hemos identificado un camino terapéutico que se alinea con tus necesidades actuales.
                    </p>
                </div>

                {/* Therapy Approach Card */}
                <Card className="w-full bg-white rounded-3xl border border-sand/20 shadow-sm p-8 flex flex-col gap-5 border-t-4 border-t-iris">
                    <div className="flex flex-row gap-3 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-iris mt-1 shrink-0">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                        </svg>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            Terapia Cognitivo–Conductual
                        </h2>
                    </div>

                    <p className="text-[#4F4D47] font-inter text-base leading-relaxed">
                        Este enfoque es altamente efectivo para lo que estás experimentando. Se centra en identificar y cambiar patrones de pensamiento y comportamiento que te impiden avanzar. Es un proceso colaborativo y orientado a objetivos.
                    </p>

                    <div className="flex flex-row gap-3 flex-wrap">
                        <span className="bg-[#FAF9F6] border border-sand/30 rounded-full px-4 py-1 text-xs md:text-sm font-semibold text-zinc-600 font-inter">
                            Práctico
                        </span>
                        <span className="bg-[#FAF9F6] border border-sand/30 rounded-full px-4 py-1 text-xs md:text-sm font-semibold text-zinc-600 font-inter">
                            Basado en evidencia
                        </span>
                        <span className="bg-[#FAF9F6] border border-sand/30 rounded-full px-4 py-1 text-xs md:text-sm font-semibold text-zinc-600 font-inter">
                            Enfoque actual
                        </span>
                    </div>
                </Card>

                {/* Why this works card */}
                <div className="w-full bg-[#622c91] text-white rounded-3xl p-8 flex flex-row gap-6 items-center shadow-md">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">Por qué esto funciona para ti</h3>
                        <p className="text-purple-100 font-inter text-sm md:text-base leading-relaxed">
                            Mencionaste sentirte abrumado por pensamientos recurrentes. La TCC te proporcionará herramientas prácticas y estructuradas para manejar esos momentos en tu día a día.
                        </p>
                    </div>
                </div>
                <Link href="/form">
                    <Button>
                        Ver psicólogos recomendado
                    </Button>
                </Link>
                <p className="text-[12px] text-zinc-400 font-inter text-center max-w-md mt-2 leading-relaxed">
                    Esto no es un diagnóstico clínico. Es una recomendación basada en tus preferencias para ayudarte a encontrar el profesional adecuado.
                </p>
            </div>
        </main>
    );
}
