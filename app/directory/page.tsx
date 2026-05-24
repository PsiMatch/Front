"use client";

import { SlidersHorizontal, Search, Clock, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { THERAPISTS } from "@/lib/therapists";

const ALL_TAGS = [
    "Ansiedad",
    "Depresión",
    "Pareja",
    "Familia",
    "Trauma",
    "Identidad",
    "Estrés",
    "Crecimiento Personal",
    "Transiciones de vida",
    "Burnout"
];

export default function DirectoryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [showFiltersPanel, setShowFiltersPanel] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const filteredTherapists = useMemo(() => {
        return THERAPISTS.filter((therapist) => {
            const matchesSearch =
                therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                therapist.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                therapist.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((tag) => therapist.tags.includes(tag));

            return matchesSearch && matchesTags;
        });
    }, [searchQuery, selectedTags]);

    return (
        <main className="min-h-screen w-full bg-[#FAF6EE] py-16 px-6 lg:px-30 flex flex-col items-center gap-10">
            {/* Top Title & Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full max-w-7xl mx-auto">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-heading">Directorio</h1>
                    <p className="text-zinc-500 font-inter text-base">
                        Encuentra al profesional adecuado para ti.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-row gap-4 items-center w-full md:w-auto shrink-0">
                    <button
                        onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                        className={`flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all cursor-pointer text-sm font-inter shadow-xs ${
                            showFiltersPanel || selectedTags.length > 0
                                ? "bg-[#622c91] text-white hover:bg-[#52237a]"
                                : "bg-[#ECE6DF] hover:bg-[#E2D6CA] text-[#111111]"
                        }`}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filtros</span>
                        {selectedTags.length > 0 && (
                            <span className="bg-white text-[#622c91] text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ml-1">
                                {selectedTags.length}
                            </span>
                        )}
                    </button>
                    
                    <div className="relative flex items-center w-full md:w-80">
                        <Search className="absolute left-4 w-4.5 h-4.5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o esp"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#ECE6DF] focus:bg-white border border-transparent focus:border-[#ECE6DF] placeholder-zinc-500 text-[#111111] pl-12 pr-4 py-3 rounded-full text-sm focus:outline-none font-inter transition-all shadow-xs"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 text-zinc-400 hover:text-zinc-600 cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Collapsible Filters Panel */}
            {showFiltersPanel && (
                <div className="w-full max-w-7xl mx-auto bg-white rounded-[24px] border border-[#E5DCD0] p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xs">
                    <div className="flex justify-between items-center border-b border-[#E5DCD0]/60 pb-3">
                        <h3 className="font-bold text-[#111111] text-sm font-heading">Filtrar por especialidades</h3>
                        {selectedTags.length > 0 && (
                            <button
                                onClick={() => setSelectedTags([])}
                                className="text-xs text-[#622c91] hover:underline font-semibold transition-colors cursor-pointer"
                            >
                                Limpiar filtros
                            </button>
                        )}
                    </div>
                    <div className="flex flex-row gap-2.5 flex-wrap font-inter">
                        {ALL_TAGS.map((tag) => {
                            const isSelected = selectedTags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                                        isSelected
                                            ? "bg-[#622c91] border-[#622c91] text-white shadow-xs"
                                            : "bg-[#FAF6EE] border-[#E5DCD0] text-zinc-700 hover:bg-[#ECE6DF]/50"
                                    }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Therapists Grid */}
            {filteredTherapists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto items-stretch">
                    {filteredTherapists.map((therapist) => (
                        <div
                            key={therapist.id}
                            className="flex flex-col bg-white rounded-[24px] border border-[#E5DCD0] shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.035)] overflow-hidden transition-all duration-300 justify-between h-full group"
                        >
                            {/* Featured top banner */}
                            {therapist.isFeatured && (
                                <div className="bg-[#622c91] text-white text-xs font-semibold py-3 px-6 flex items-center gap-2 w-full font-inter shrink-0">
                                    <Clock className="w-4.5 h-4.5 shrink-0 text-purple-200" />
                                    <span>{therapist.featuredText}</span>
                                </div>
                            )}

                            <div className="p-6 md:p-8 flex flex-col justify-between grow gap-6">
                                {/* Upper Details */}
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-5 items-start">
                                        <img
                                            src={therapist.image}
                                            alt={therapist.name}
                                            className="w-20 h-20 rounded-full object-cover border border-[#E5DCD0] shadow-sm shrink-0"
                                        />
                                        <div className="flex flex-col gap-1 min-w-0">
                                            <h2 className="text-[20px] font-bold text-[#111111] leading-tight tracking-tight font-heading">
                                                {therapist.name}
                                            </h2>
                                            <p className="text-[13px] font-semibold text-zinc-500 font-inter leading-relaxed whitespace-pre-line">
                                                {therapist.specialty}
                                            </p>
                                            <div className="flex items-center gap-1.5 mt-0.5">
                                                <span className="text-amber-500 text-lg leading-none">★</span>
                                                <span className="text-sm font-bold text-[#111111]">
                                                    {therapist.rating.toFixed(1)}
                                                </span>
                                                <span className="text-sm text-zinc-400 font-inter font-normal">
                                                    ({therapist.reviewsCount})
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badges */}
                                    <div className="flex flex-row gap-2 flex-wrap">
                                        {therapist.tags.map((tag) => {
                                            const isSelected = selectedTags.includes(tag);
                                            return (
                                                <button
                                                    key={tag}
                                                    onClick={() => toggleTag(tag)}
                                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-inter transition-all border cursor-pointer ${
                                                        isSelected
                                                            ? "bg-[#622c91] border-[#622c91] text-white shadow-xs"
                                                            : "bg-[#FAF6EE] border-[#E5DCD0] text-zinc-700 hover:bg-[#ECE6DF]/50"
                                                    }`}
                                                >
                                                    {tag}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Divider & Price + Button */}
                                <div className="border-t border-[#E5DCD0]/60 pt-5 mt-auto flex flex-row justify-between items-center gap-4 shrink-0">
                                    <div className="flex flex-col justify-center min-w-0">
                                        {therapist.originalPrice ? (
                                            <>
                                                <span className="text-xs font-normal text-zinc-400 line-through font-inter mb-0.5">
                                                    €{therapist.originalPrice} / sesión
                                                </span>
                                                <span className="font-bold text-[#622c91] text-[17px] leading-none font-inter">
                                                    €{therapist.price}{" "}
                                                    <span className="text-xs font-medium text-[#622c91] opacity-90">
                                                        / {therapist.timeSlot}
                                                    </span>
                                                </span>
                                            </>
                                        ) : (
                                            <span className="font-bold text-[#111111] text-[17px] font-inter">
                                                {therapist.id === "clara-mendoza" ? (
                                                    <>
                                                        $1,200 <span className="text-xs font-medium text-zinc-500">MXN / sesión</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        €{therapist.price} <span className="text-sm font-normal text-zinc-400">/ sesión</span>
                                                    </>
                                                )}
                                            </span>
                                        )}
                                    </div>

                                    <Link 
                                        href={`/directory/${therapist.id}`}
                                        className="bg-[#1E1C18] hover:bg-black text-white rounded-xl px-5 py-2.5 font-bold text-sm transition-all duration-200 active:scale-[0.98] text-center"
                                    >
                                        {therapist.ctaText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* No Results State */
                <div className="w-full max-w-md mx-auto bg-white rounded-[24px] border border-[#E5DCD0] p-12 flex flex-col items-center gap-5 text-center my-8 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-[#FAF6EE] flex items-center justify-center text-zinc-400 border border-[#E5DCD0]">
                        <Search className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold text-[#111111] font-heading">No se encontraron terapeutas</h3>
                        <p className="text-zinc-500 font-inter text-sm max-w-sm leading-relaxed">
                            Intenta quitando algunos filtros o buscando otra especialidad para encontrar profesionales disponibles.
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedTags([]);
                        }}
                        className="mt-2 bg-[#1E1C18] hover:bg-black text-white rounded-xl px-6 py-2.5 font-bold text-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
                    >
                        Limpiar filtros y búsqueda
                    </button>
                </div>
            )}

            {/* Back to Home Link */}
            <div className="w-full max-w-7xl mx-auto flex justify-center mt-8">
                <Link
                    href="/"
                    className="text-[#622c91] hover:text-[#52237a] font-bold text-sm font-inter transition-colors flex items-center gap-1.5"
                >
                    <span>←</span> Volver al inicio
                </Link>
            </div>
        </main>
    );
}