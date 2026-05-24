"use client";

import { use, useState, useEffect } from "react";
import { THERAPISTS } from "@/lib/therapists";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Video, BadgeCheck, Calendar, CheckCircle2 } from "lucide-react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function TherapistProfilePage({ params }: PageProps) {
    const { id } = use(params);
    const therapist = THERAPISTS.find((t) => t.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!therapist) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full bg-[#FAF6EE] py-16 px-6 lg:px-30 flex flex-col items-center gap-12 pb-32">
            {/* Top Navigation Row */}
            <div className="w-full max-w-4xl mx-auto flex justify-start">
                <Link
                    href="/directory"
                    className="text-[#622c91] hover:text-[#52237a] font-bold text-sm font-inter transition-colors flex items-center gap-1.5"
                >
                    <span>←</span> Volver al directorio
                </Link>
            </div>

            {/* Profile Header Details Section */}
            <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full md:w-64 h-80 md:h-80 rounded-[24px] object-cover border border-[#E5DCD0] shadow-sm shrink-0"
                />
                
                <div className="flex flex-col gap-5 min-w-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight font-heading">
                            {therapist.name}
                        </h1>
                        <p className="text-zinc-500 font-semibold font-inter text-base leading-normal">
                            {therapist.specialty}
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-row gap-2 flex-wrap">
                        {therapist.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-white border border-[#E5DCD0] text-zinc-700 px-3.5 py-1.5 rounded-full text-xs font-semibold font-inter shadow-2xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Experience & Modalidad block */}
                    <div className="flex flex-row gap-12 mt-4 border-t border-[#E5DCD0]/60 pt-5">
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-bold text-zinc-400 tracking-wider font-inter">EXPERIENCIA</span>
                            <span className="text-lg font-bold text-[#111111] font-inter leading-none">
                                {therapist.experience}
                            </span>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-bold text-zinc-400 tracking-wider font-inter">MODALIDAD</span>
                            <span className="text-lg font-bold text-[#111111] font-inter flex items-center gap-1.5 leading-none">
                                <Video className="w-5 h-5 text-zinc-700" />
                                {therapist.modalidad}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* In their own words quotes section */}
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-[#111111] font-heading">En sus propias palabras</h2>
                <div className="bg-white rounded-[24px] border border-[#E5DCD0] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative">
                    <span className="text-6xl font-serif text-[#E2D6CA] leading-none select-none block mb-1 font-bold">””</span>
                    <p className="text-[#333333] font-inter text-base md:text-[17px] leading-relaxed whitespace-pre-line">
                        {therapist.bio}
                    </p>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-[#111111] font-heading">Reseñas de pacientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {therapist.patientReviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-[20px] border border-[#E5DCD0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4 justify-between"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[#622c91] shrink-0 border border-purple-100">
                                        <BadgeCheck className="w-3.5 h-3.5 text-[#622c91]" />
                                    </div>
                                    <span className="text-sm font-semibold text-[#111111] font-inter">
                                        {review.author}
                                    </span>
                                </div>
                                <div className="flex items-center gap-0.5 text-[#111111]">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i} className="text-sm">★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-zinc-600 font-inter text-sm leading-relaxed italic">
                                "{review.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Bottom Booking Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E5DCD0] py-4 px-6 md:px-12 flex justify-between items-center shadow-[0_-4px_16px_rgba(0,0,0,0.025)]">
                <div className="flex flex-col justify-center min-w-0">
                    <span className="text-2xl font-bold text-[#111111] tracking-tight font-heading">
                        {therapist.priceDisplay}
                    </span>
                    <span className="text-xs md:text-sm text-zinc-500 font-inter font-medium mt-0.5 truncate">
                        {therapist.priceDetails}
                    </span>
                </div>
                
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#1E1C18] hover:bg-black text-white rounded-xl px-6 py-3 font-bold text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center gap-2 shadow-xs shrink-0"
                >
                    <span>Agendar sesión</span>
                    <Calendar className="w-4 h-4" />
                </button>
            </div>

            {/* Booking Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[24px] border border-[#E5DCD0] p-8 max-w-sm w-full flex flex-col items-center gap-6 shadow-xl animate-in zoom-in-95 duration-200">
                        <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-[#622c91]">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        
                        <div className="text-center flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-[#111111] font-heading">¡Reserva Iniciada!</h3>
                            <p className="text-zinc-500 font-inter text-sm leading-relaxed">
                                Estamos preparando tu sesión de introducción de 50 minutos con la <strong>{therapist.name}</strong>.
                            </p>
                        </div>
                        
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full bg-[#1E1C18] hover:bg-black text-white rounded-xl py-3 font-bold text-sm transition-all duration-200 cursor-pointer text-center active:scale-[0.98]"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
