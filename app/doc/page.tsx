"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    BookOpen,
    Palette,
    Layers,
    Code,
    ExternalLink,
    Download,
    Sparkles,
    ArrowLeft,
    Copy,
    Check,
    FileCode,
    Smartphone,
    Info
} from "lucide-react";

// Custom GitHub icon to avoid lucide-react version compatibility issues
function GithubIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

export default function DocPage() {
    const [activeSection, setActiveSection] = useState("justificacion");
    const [copiedColor, setCopiedColor] = useState<string | null>(null);
    const [activeCodeTab, setActiveCodeTab] = useState<"back" | "front-form" | "front-dir">("back");

    // Scroll Spy logic to update active section in sidebar
    useEffect(() => {
        const sections = [
            "justificacion",
            "colores-tipos",
            "bocetos",
            "codigo-documentado",
            "repositorios",
            "instalacion"
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedColor(label);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#622c91]/10 selection:text-[#622c91]">
            {/* Ocultar barra de desplazamiento de Webkit para el sidebar sticky */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />

            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-40 w-full bg-[#FAF9F6]/85 backdrop-blur-md border-b border-[#D4C5B9]/30 px-4 sm:px-6 lg:px-16 py-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#D4C5B9]/20 transition-all text-[#622c91]"
                        title="Volver al inicio"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold font-heading flex items-center gap-2">
                            PsiMatch <span className="text-xs bg-[#622c91]/10 text-[#622c91] px-2.5 py-0.5 rounded-full font-semibold">Docs</span>
                        </h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="#repositorios"
                        className="bg-[#111111] text-white hover:bg-black text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                    >
                        <GithubIcon className="w-4 h-4" />
                        <span>Repositorios</span>
                    </a>
                </div>
            </div>

            {/* Main Layout */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 flex flex-col lg:flex-row gap-12 relative w-full min-w-0">

                {/* Left Sticky Sidebar Navigation */}
                <aside
                    className="lg:w-72 shrink-0 lg:sticky lg:top-28 hidden lg:flex flex-col gap-6 overflow-y-auto pr-1 no-scrollbar"
                    style={{
                        maxHeight: "calc(100vh - 9rem)",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    }}
                >
                    <div className="bg-white rounded-3xl border border-[#D4C5B9]/20 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 font-inter">Secciones</h3>
                        <nav className="flex flex-col gap-1">
                            <a
                                href="#justificacion"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "justificacion"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <BookOpen className="w-4.5 h-4.5" />
                                <span>Justificación</span>
                            </a>
                            <a
                                href="#colores-tipos"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "colores-tipos"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <Palette className="w-4.5 h-4.5" />
                                <span>Colores y Tipografías</span>
                            </a>
                            <a
                                href="#bocetos"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "bocetos"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <Layers className="w-4.5 h-4.5" />
                                <span>Bocetos y Figma</span>
                            </a>
                            <a
                                href="#codigo-documentado"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "codigo-documentado"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <Code className="w-4.5 h-4.5" />
                                <span>Código Documentado</span>
                            </a>
                            <a
                                href="#repositorios"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "repositorios"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <GithubIcon className="w-4.5 h-4.5" />
                                <span>Repositorio GitHub</span>
                            </a>
                            <a
                                href="#instalacion"
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === "instalacion"
                                    ? "bg-[#622c91] text-white shadow-md shadow-[#622c91]/10"
                                    : "text-zinc-600 hover:bg-[#FAF9F6] hover:text-[#111111]"
                                    }`}
                            >
                                <Download className="w-4.5 h-4.5" />
                                <span>Instalación (PWA)</span>
                            </a>
                        </nav>
                    </div>

                    {/* Small Quick Info */}
                    <div className="bg-[#D4C5B9]/15 rounded-3xl p-6 border border-[#D4C5B9]/25 flex flex-col gap-3">
                        <h4 className="text-xs font-bold text-zinc-700 font-inter flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-[#622c91]" />
                            <span>Sobre PsiMatch</span>
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed font-inter">
                            PsiMatch es un sistema inteligente de compatibilidad que ayuda a pacientes a conectar con su psicólogo ideal, combinando frontend rápido en Next.js con un robusto backend en NestJS y MongoDB.
                        </p>
                    </div>
                </aside>

                {/* Right Scrollable Content */}
                <main className="flex-1 flex flex-col gap-20">

                    {/* SECTION 1: JUSTIFICACIÓN */}
                    <section id="justificacion" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <BookOpen className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Justificación del Proyecto</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="flex flex-col gap-6 w-full">

                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#622c91]/10 flex items-center justify-center text-[#622c91]">
                                    <span className="text-lg font-bold">1</span>
                                </div>
                                <h3 className="text-lg font-bold font-heading">¿Qué necesidad o problemática detectamos?</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-inter">
                                    Encontrar terapia no debería ser una tarea estresante. Muchos pacientes se sienten abrumados por directorios masivos con listas infinitas de psicólogos donde la única información visible es el precio o una foto. Esto genera una alta tasa de deserción en las primeras sesiones debido a la falta de compatibilidad genuina en el enfoque, modalidad, horarios o estilo terapéutico.
                                </p>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#622c91]/10 flex items-center justify-center text-[#622c91]">
                                    <span className="text-lg font-bold">2</span>
                                </div>
                                <h3 className="text-lg font-bold font-heading">¿Por qué decidimos trabajar en este tema?</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-inter">
                                    La salud mental es un derecho fundamental y el acceso a ella debe ser óptimo. Al integrar tecnología moderna, podemos automatizar el emparejamiento psicológico mediante reglas clínicas que vinculan los motivos de consulta (ansiedad, duelo, pareja) con el enfoque especializado del terapeuta (cognitivo-conductual, humanista, sistémico), reduciendo la fricción inicial.
                                </p>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#622c91]/10 flex items-center justify-center text-[#622c91]">
                                    <span className="text-lg font-bold">3</span>
                                </div>
                                <h3 className="text-lg font-bold font-heading">¿Quiénes se benefician con la app?</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed font-inter">
                                    <strong>Pacientes:</strong> Quienes obtienen una recomendación guiada y un directorio curado a su medida. <br className="mb-2" />
                                    <strong>Terapeutas:</strong> Profesionales que reciben pacientes cuyo perfil y motivos de consulta se alinean con su especialidad y horario, optimizando su agenda y efectividad clínica.
                                </p>
                            </div>

                        </div>
                    </section>


                    {/* SECTION 2: PALETA DE COLORES Y TIPOGRAFÍAS */}
                    <section id="colores-tipos" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <Palette className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Paleta de Colores y Tipografías</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-8">

                            {/* Color Palette Grid */}
                            <div>
                                <h3 className="text-lg font-bold font-heading mb-4">Paleta de Colores</h3>
                                <p className="text-zinc-500 font-inter text-sm mb-6">
                                    Hemos diseñado una paleta basada en tonos relajantes y contrastes limpios para crear un entorno seguro que inspire calma. Haz clic en cualquier color para copiar su código hexadecimal.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                                    {/* Alabaster */}
                                    <button
                                        onClick={() => copyToClipboard("#FAF9F6", "Alabaster")}
                                        className="group relative flex flex-col bg-[#FAF9F6] border border-[#D4C5B9]/40 rounded-2xl p-4 text-left transition-all duration-200 hover:shadow-md cursor-pointer h-36 justify-between active:scale-[0.98]"
                                    >
                                        <div className="flex justify-between items-start w-full">
                                            <span className="text-xs font-bold text-zinc-500 font-inter">FONDO PRINCIPAL</span>
                                            {copiedColor === "Alabaster" ? (
                                                <Check className="w-4 h-4 text-[#622c91]" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[#111111] font-heading">Alabaster</span>
                                            <span className="text-xs text-zinc-500 font-mono">#FAF9F6</span>
                                        </div>
                                        {copiedColor === "Alabaster" && (
                                            <span className="absolute inset-0 bg-[#622c91]/5 rounded-2xl flex items-center justify-center text-xs font-bold text-[#622c91] font-inter">¡Copiado!</span>
                                        )}
                                    </button>

                                    {/* Charcoal */}
                                    <button
                                        onClick={() => copyToClipboard("#111111", "Charcoal")}
                                        className="group relative flex flex-col bg-[#111111] rounded-2xl p-4 text-left transition-all duration-200 hover:shadow-md cursor-pointer h-36 justify-between text-white active:scale-[0.98]"
                                    >
                                        <div className="flex justify-between items-start w-full">
                                            <span className="text-xs font-bold text-zinc-400 font-inter">TEXTO Y TÍTULOS</span>
                                            {copiedColor === "Charcoal" ? (
                                                <Check className="w-4 h-4 text-white" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold font-heading">Charcoal</span>
                                            <span className="text-xs text-zinc-400 font-mono">#111111</span>
                                        </div>
                                        {copiedColor === "Charcoal" && (
                                            <span className="absolute inset-0 bg-white/10 rounded-2xl flex items-center justify-center text-xs font-bold text-white font-inter">¡Copiado!</span>
                                        )}
                                    </button>

                                    {/* Iris */}
                                    <button
                                        onClick={() => copyToClipboard("#622c91", "Iris")}
                                        className="group relative flex flex-col bg-[#622c91] rounded-2xl p-4 text-left transition-all duration-200 hover:shadow-md cursor-pointer h-36 justify-between text-white active:scale-[0.98]"
                                    >
                                        <div className="flex justify-between items-start w-full">
                                            <span className="text-xs font-bold text-purple-200 font-inter">ACENTO PRIMARIO</span>
                                            {copiedColor === "Iris" ? (
                                                <Check className="w-4 h-4 text-white" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold font-heading">Iris (Púrpura)</span>
                                            <span className="text-xs text-purple-200 font-mono">#622c91</span>
                                        </div>
                                        {copiedColor === "Iris" && (
                                            <span className="absolute inset-0 bg-white/10 rounded-2xl flex items-center justify-center text-xs font-bold text-white font-inter">¡Copiado!</span>
                                        )}
                                    </button>

                                    {/* Sand */}
                                    <button
                                        onClick={() => copyToClipboard("#D4C5B9", "Sand")}
                                        className="group relative flex flex-col bg-[#D4C5B9] rounded-2xl p-4 text-left transition-all duration-200 hover:shadow-md cursor-pointer h-36 justify-between text-[#111111] active:scale-[0.98]"
                                    >
                                        <div className="flex justify-between items-start w-full">
                                            <span className="text-xs font-bold text-zinc-700 font-inter">ACENTO SECUNDARIO</span>
                                            {copiedColor === "Sand" ? (
                                                <Check className="w-4 h-4 text-[#111111]" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold font-heading">Sand (Arena)</span>
                                            <span className="text-xs text-zinc-700 font-mono">#D4C5B9</span>
                                        </div>
                                        {copiedColor === "Sand" && (
                                            <span className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center text-xs font-bold text-[#111111] font-inter">¡Copiado!</span>
                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* Typography & Justification */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#D4C5B9]/20 pt-8">

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-bold font-heading">Tipografías Utilizadas</h3>

                                    <div className="flex flex-col gap-4 bg-[#FAF9F6] p-6 rounded-2xl border border-[#D4C5B9]/20">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-zinc-400 font-bold font-inter uppercase">TÍTULOS E HEDINGS</span>
                                            <span className="text-2xl font-bold font-heading text-[#622c91]">Plus Jakarta Sans</span>
                                            <p className="text-xs text-zinc-500 font-inter">Cargada dinámicamente desde Google Fonts (`next/font/google`)</p>
                                            <span className="text-sm font-bold font-heading text-zinc-700 mt-2">Aa Bb Cc Dd Ee Ff Gg 123</span>
                                        </div>

                                        <hr className="border-[#D4C5B9]/20" />

                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-zinc-400 font-bold font-inter uppercase">TEXTO DE LECTURA</span>
                                            <span className="text-xl font-medium font-sans text-zinc-800">Inter</span>
                                            <p className="text-xs text-zinc-500 font-inter">Cargada dinámicamente desde Google Fonts (`next/font/google`)</p>
                                            <span className="text-sm font-normal font-sans text-zinc-600 mt-2">Aa Bb Cc Dd Ee Ff Gg 123</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-lg font-bold font-heading">Justificación Psicológica e Identidad</h3>
                                    <div className="flex flex-col gap-3 text-sm text-zinc-600 leading-relaxed font-inter">
                                        <p>
                                            El color <strong>Iris (#622c91)</strong> fue seleccionado intencionalmente para representar el autoconocimiento, la sabiduría interior y la calma espiritual. Históricamente, el color morado/violeta está estrechamente vinculado al campo de la psicología y la introspección profunda.
                                        </p>
                                        <p>
                                            El color <strong>Sand (#D4C5B9)</strong> y el fondo <strong>Alabaster (#FAF9F6)</strong> actúan como elementos de anclaje a la tierra (grounding). Representan calidez, estabilidad, empatía y cercanía humana, reduciendo la estética fría o puramente clínica tradicional.
                                        </p>
                                        <p>
                                            La combinación de tipografías mezcla la modernidad amigable y geométrica de <strong>Plus Jakarta Sans</strong> para los títulos principales (generando cercanía y frescura) con la extrema legibilidad y accesibilidad de <strong>Inter</strong> para los cuerpos de texto, lo que asegura que cualquier persona pueda leer sin esfuerzo visual.
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    {/* SECTION 3: BOCETOS Y FIGMA */}
                    <section id="bocetos" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <Layers className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Boceto y Wireframes de la Aplicación</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="flex flex-col gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h3 className="text-lg font-bold font-heading">Estructura y Flujo de Pantallas</h3>
                                    <p className="text-zinc-500 font-inter text-sm">
                                        A continuación se muestran los contenedores destinados para cargar los bocetos de las tres pantallas representativas del flujo del paciente.
                                    </p>
                                </div>

                                {/* Figma CTA Button - MODIFICABLE POR EL USUARIO */}
                                <a
                                    href="https://www.figma.com/design/Tq3SV62TJDD9X6n9EzFZzF/PsiMatch?node-id=3-108&t=diBEF3jqASSRQIA9-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#622c91]/10 text-[#622c91] hover:bg-[#622c91]/20 font-bold px-6 py-3 rounded-2xl transition-all flex items-center gap-2 text-sm border border-[#622c91]/20 font-inter shrink-0"
                                >
                                    <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                                        <path d="M192 0C86 0 0 86 0 192c0 77.4 46.2 144 112 173.8v66.2C112 477.5 147.8 512 192 512s80-34.5 80-80v-66.2c65.8-29.8 112-96.4 112-173.8C384 86 298 0 192 0zM192 384c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                                    </svg>
                                    <span>Acceder al Proyecto en Figma</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>

                            {/* Grid of screens */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                {/* SCREEN 1: LANDING */}
                                <div className="flex flex-col gap-4 border border-[#D4C5B9]/20 rounded-2xl p-4 bg-[#FAF9F6]">
                                    <div className="relative aspect-[4/3] w-full rounded-xl bg-white border border-[#D4C5B9]/40 flex flex-col items-center justify-center p-4 text-center group hover:border-[#622c91] transition-colors overflow-hidden">

                                        {/* CSS Interactive Wireframe preview to make it look premium before adding actual images */}
                                        <div className="absolute inset-0 p-3 opacity-20 flex flex-col gap-2 justify-between pointer-events-none select-none">
                                            <div className="w-full h-4 bg-zinc-300 rounded-sm flex justify-between items-center px-2"><div className="w-8 h-2 bg-zinc-400"></div><div className="w-12 h-2 bg-zinc-400"></div></div>
                                            <div className="flex flex-col items-center gap-1.5 my-auto">
                                                <div className="w-24 h-3 bg-[#622c91] rounded-sm"></div>
                                                <div className="w-32 h-2 bg-zinc-300 rounded-sm"></div>
                                                <div className="w-16 h-4 bg-[#622c91] rounded-full mt-1"></div>
                                            </div>
                                            <div className="w-full h-8 bg-zinc-200 rounded-sm"></div>
                                        </div>

                                        <Smartphone className="w-8 h-8 text-zinc-400 group-hover:text-[#622c91] transition-colors mb-2 z-10" />
                                        <span className="text-xs font-bold text-zinc-700 font-heading z-10">Pantalla 1: Home / Landing</span>

                                        {/* RUTA DE LA IMAGEN - MODIFICABLE POR EL USUARIO */}
                                        <span className="text-[10px] text-zinc-400 font-mono mt-1 z-10">Ruta: /public/boceto_home.png</span>

                                        <img src="/boceto_home.png" alt="Boceto Home" className="absolute inset-0 w-full h-full object-cover z-20" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="font-bold text-sm text-[#111111] font-heading">1. Landing Page Principal</h4>
                                        <p className="text-xs text-zinc-600 font-inter leading-relaxed">
                                            Presenta la propuesta de valor del software de manera minimalista, con un llamado a la acción destacado para iniciar el cuestionario de coincidencia clínica de forma inmediata.
                                        </p>
                                    </div>
                                </div>

                                {/* SCREEN 2: CUESTIONARIO */}
                                <div className="flex flex-col gap-4 border border-[#D4C5B9]/20 rounded-2xl p-4 bg-[#FAF9F6]">
                                    <div className="relative aspect-[4/3] w-full rounded-xl bg-white border border-[#D4C5B9]/40 flex flex-col items-center justify-center p-4 text-center group hover:border-[#622c91] transition-colors overflow-hidden">

                                        {/* CSS Interactive Wireframe preview */}
                                        <div className="absolute inset-0 p-3 opacity-20 flex flex-col gap-2 justify-between pointer-events-none select-none">
                                            <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden"><div className="w-2/5 h-full bg-[#622c91]"></div></div>
                                            <div className="flex flex-col gap-1.5 my-auto">
                                                <div className="w-36 h-3 bg-zinc-400 rounded-sm"></div>
                                                <div className="w-full h-6 bg-white border border-zinc-300 rounded-md"></div>
                                                <div className="w-full h-6 bg-white border border-zinc-300 rounded-md"></div>
                                            </div>
                                            <div className="w-8 h-3 bg-zinc-300 rounded-sm"></div>
                                        </div>

                                        <Smartphone className="w-8 h-8 text-zinc-400 group-hover:text-[#622c91] transition-colors mb-2 z-10" />
                                        <span className="text-xs font-bold text-zinc-700 font-heading z-10">Pantalla 2: Formulario</span>

                                        {/* RUTA DE LA IMAGEN - MODIFICABLE POR EL USUARIO */}
                                        <span className="text-[10px] text-zinc-400 font-mono mt-1 z-10">Ruta: /public/boceto_formulario.png</span>

                                        <img src="/boceto_formulario.png" alt="Boceto Formulario" className="absolute inset-0 w-full h-full object-cover z-20" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="font-bold text-sm text-[#111111] font-heading">2. Cuestionario de 10 Pasos</h4>
                                        <p className="text-xs text-zinc-600 font-inter leading-relaxed">
                                            Pantallas secuenciales con barra de progreso. Pregunta sobre sintomatología, disponibilidad, presupuesto y modalidad para recopilar la información del match del paciente.
                                        </p>
                                    </div>
                                </div>

                                {/* SCREEN 3: RESULTADOS */}
                                <div className="flex flex-col gap-4 border border-[#D4C5B9]/20 rounded-2xl p-4 bg-[#FAF9F6]">
                                    <div className="relative aspect-[4/3] w-full rounded-xl bg-white border border-[#D4C5B9]/40 flex flex-col items-center justify-center p-4 text-center group hover:border-[#622c91] transition-colors overflow-hidden">

                                        {/* CSS Interactive Wireframe preview */}
                                        <div className="absolute inset-0 p-3 opacity-20 flex flex-col gap-2 pointer-events-none select-none">
                                            <div className="w-20 h-3 bg-zinc-400 rounded-sm"></div>
                                            <div className="flex gap-2 mt-1">
                                                <div className="w-12 h-12 bg-zinc-300 rounded-full"></div>
                                                <div className="flex-1 flex flex-col gap-1">
                                                    <div className="w-20 h-2 bg-zinc-400 rounded-sm"></div>
                                                    <div className="w-16 h-2 bg-zinc-300 rounded-sm"></div>
                                                </div>
                                            </div>
                                            <div className="w-full h-10 bg-[#FAF9F6] border border-zinc-200 rounded-md mt-2"></div>
                                        </div>

                                        <Smartphone className="w-8 h-8 text-zinc-400 group-hover:text-[#622c91] transition-colors mb-2 z-10" />
                                        <span className="text-xs font-bold text-zinc-700 font-heading z-10">Pantalla 3: Directorio / Match</span>

                                        {/* RUTA DE LA IMAGEN - MODIFICABLE POR EL USUARIO */}
                                        <span className="text-[10px] text-zinc-400 font-mono mt-1 z-10">Ruta: /public/boceto_directorio.png</span>

                                        <img src="/boceto_directorio.png" alt="Boceto Directorio" className="absolute inset-0 w-full h-full object-cover z-20" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="font-bold text-sm text-[#111111] font-heading">3. Directorio y Match</h4>
                                        <p className="text-xs text-zinc-600 font-inter leading-relaxed">
                                            Muestra la ficha detallada del terapeuta idóneo para el paciente y una lista secundaria de alternativas filtrables que cumplen con los requisitos específicos del usuario.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* SECTION 4: CÓDIGO DOCUMENTADO */}
                    <section id="codigo-documentado" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <Code className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Código Documentado</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="flex flex-col gap-6 bg-white p-4 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs overflow-hidden w-full min-w-0">

                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-lg font-bold font-heading">Arquitectura del Sistema</h3>
                                <p className="text-zinc-500 font-inter text-sm">
                                    PsiMatch utiliza una arquitectura desacoplada. Navega por las pestañas para ver los archivos fuente críticos comentados línea por línea y entender cómo fluyen los datos entre el cliente y el servidor.
                                </p>
                            </div>

                            {/* Tabs Header */}
                            <div className="flex border-b border-[#D4C5B9]/30 gap-2 overflow-x-auto pb-px">
                                <button
                                    onClick={() => setActiveCodeTab("back")}
                                    className={`px-5 py-3 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border-b-2 flex items-center gap-2 ${activeCodeTab === "back"
                                        ? "border-[#622c91] text-[#622c91] font-bold"
                                        : "border-transparent text-zinc-500 hover:text-[#111111]"
                                        }`}
                                >
                                    <FileCode className="w-4 h-4" />
                                    <span>Algoritmo de Match (Backend)</span>
                                </button>
                                <button
                                    onClick={() => setActiveCodeTab("front-form")}
                                    className={`px-5 py-3 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border-b-2 flex items-center gap-2 ${activeCodeTab === "front-form"
                                        ? "border-[#622c91] text-[#622c91] font-bold"
                                        : "border-transparent text-zinc-500 hover:text-[#111111]"
                                        }`}
                                >
                                    <FileCode className="w-4 h-4" />
                                    <span>Flujo de Pasos (Frontend)</span>
                                </button>
                                <button
                                    onClick={() => setActiveCodeTab("front-dir")}
                                    className={`px-5 py-3 text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border-b-2 flex items-center gap-2 ${activeCodeTab === "front-dir"
                                        ? "border-[#622c91] text-[#622c91] font-bold"
                                        : "border-transparent text-zinc-500 hover:text-[#111111]"
                                        }`}
                                >
                                    <FileCode className="w-4 h-4" />
                                    <span>Búsqueda y Filtros (Frontend)</span>
                                </button>
                            </div>

                            {/* Tab Content 1: Backend Recommendation Service */}
                            {activeCodeTab === "back" && (
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-in fade-in duration-200 w-full min-w-0">
                                    <div className="lg:col-span-3 flex flex-col gap-2 min-w-0 w-full">
                                        <div className="bg-[#1e1e1e] text-zinc-300 font-mono text-xs rounded-2xl overflow-hidden border border-zinc-800 shadow-md w-full">
                                            <div className="bg-[#2d2d2d] px-4 py-2 text-[11px] text-zinc-500 flex justify-between border-b border-zinc-800 items-center gap-2">
                                                <span className="truncate mr-2">back/src/recommendations/recommendations.service.ts</span>
                                                <span className="text-[#622c91] font-bold shrink-0">NestJS Service</span>
                                            </div>
                                            <pre className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-left w-full">
                                                <code>
                                                    {`// 1. Inyección de modelos de Mongoose y decorador Injectable
@Injectable()
export class RecommendationsService {
  constructor(
    @InjectModel(Questionnaire.name) 
    private questionnaireModel: Model<QuestionnaireDocument>,
    @InjectModel(Therapist.name) 
    private therapistModel: Model<TherapistDocument>,
  ) {}

  // 2. Generar recomendaciones a partir de un ID
  async generateRecommendation(questionnaireId: string) {
    // Validar formato del ID de Mongo
    if (!isValidObjectId(questionnaireId)) {
      throw new BadRequestException('ID de cuestionario inválido.');
    }

    // Buscar el cuestionario respondido por el paciente
    const questionnaire = await this.questionnaireModel
      .findById(questionnaireId).exec();
      
    if (!questionnaire) {
      throw new NotFoundException('Cuestionario no encontrado.');
    }

    // 3. Reglas de Negocio para recomendar Enfoque Terapéutico
    let suggestedApproaches: string[] = [];
    const reason = questionnaire.mainReason.toLowerCase().trim();

    if (reason === 'ansiedad' || reason === 'estres') {
      suggestedApproaches = ['cognitivo-conductual'];
    } else if (reason === 'duelo' || reason === 'autoestima') {
      suggestedApproaches = ['humanista'];
    } else {
      suggestedApproaches = ['sistemica'];
    }

    // 4. Buscar terapeutas en la base de datos MongoDB
    const therapists = await this.therapistModel
      .find({ approaches: { $in: suggestedApproaches } })
      .exec();

    // Retornar estructura DTO validada
    return {
      emergency: false,
      suggestedApproaches,
      message: 'Recomendaciones calculadas con éxito.',
      therapists,
    };
  }`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2 flex flex-col gap-4 font-inter text-sm justify-center">
                                        <div className="bg-[#FAF9F6] border border-[#D4C5B9]/30 rounded-2xl p-6 flex flex-col gap-4">
                                            <h4 className="font-bold text-[#622c91] text-base font-heading">Explicación del Servicio</h4>
                                            <ul className="flex flex-col gap-3 text-zinc-600 leading-relaxed list-disc pl-4">
                                                <li>
                                                    <strong>Inyección de Dependencias:</strong> El constructor de NestJS recibe los esquemas inyectados de MongoDB (`Questionnaire` y `Therapist`) a través de Mongoose.
                                                </li>
                                                <li>
                                                    <strong>Mapeo de Reglas Clínicas:</strong> Evalúa la variable del motivo principal (`mainReason`) y aplica lógica estructurada para mapear el caso clínico a un enfoque correspondiente (e.g. Terapia Cognitivo-Conductual para el manejo de la ansiedad).
                                                </li>
                                                <li>
                                                    <strong>Consulta MongoDB Dinámica:</strong> Realiza una búsqueda mediante el operador `$in` para filtrar y retornar todos los psicólogos que practiquen el enfoque determinado.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab Content 2: Frontend Form */}
                            {activeCodeTab === "front-form" && (
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-in fade-in duration-200 w-full min-w-0">
                                    <div className="lg:col-span-3 flex flex-col gap-2 min-w-0 w-full">
                                        <div className="bg-[#1e1e1e] text-zinc-300 font-mono text-xs rounded-2xl overflow-hidden border border-zinc-800 shadow-md w-full">
                                            <div className="bg-[#2d2d2d] px-4 py-2 text-[11px] text-zinc-500 flex justify-between border-b border-zinc-800 items-center gap-2">
                                                <span className="truncate mr-2">front/app/form/page.tsx</span>
                                                <span className="text-amber-500 font-bold shrink-0">Next.js Client Component</span>
                                            </div>
                                            <pre className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-left w-full">
                                                <code>
                                                    {`"use client";

// 1. Estado reactivo para pasos y almacenamiento de respuestas
export default function FormPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [email, setEmail] = useState("");

    const currentQuestionIndex = step - 1;
    const currentQuestion = QUESTIONS[currentQuestionIndex];

    // 2. Control de selección y progresión de pasos
    const handleOptionSelect = (option: string) => {
        setAnswers((prev) => ({ ...prev, [step]: option }));
        if (step < 10) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    // 3. Envío final de los datos a procesar
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        // Redirección inmediata a la pantalla de resultados del match
        router.push("/form/result");
    };

    // Barra de progreso dinámica
    const progress = (step / 10) * 100;

    return (
        <main className="min-h-screen flex flex-col justify-between">
            {/* Indicador visual de porcentaje de carga */}
            <div style={{ width: \`\${progress}%\` }} className="bg-iris" />
            
            {/* Muestra condicional: Preguntas vs Correo Final */}
            {step < 10 ? (
                <OptionsList onSelect={handleOptionSelect} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </form>
            )}
        </main>
    );
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2 flex flex-col gap-4 font-inter text-sm justify-center">
                                        <div className="bg-[#FAF9F6] border border-[#D4C5B9]/30 rounded-2xl p-6 flex flex-col gap-4">
                                            <h4 className="font-bold text-[#622c91] text-base font-heading">Explicación del Formulario</h4>
                                            <ul className="flex flex-col gap-3 text-zinc-600 leading-relaxed list-disc pl-4">
                                                <li>
                                                    <strong>"use client":</strong> Habilita la interactividad del lado del cliente necesaria para guardar las variables de estado reactivo de React.
                                                </li>
                                                <li>
                                                    <strong>Manejo de Respuestas:</strong> Almacena temporalmente los valores seleccionados usando un diccionario clave-valor mapeado por el número de paso.
                                                </li>
                                                <li>
                                                    <strong>Barra de Progreso:</strong> Calcula dinámicamente un entero del 10% al 100% que actualiza el ancho del contenedor visual mediante estilos inline.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Tab Content 3: Frontend Directory Filter */}
                            {activeCodeTab === "front-dir" && (
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-in fade-in duration-200 w-full min-w-0">
                                    <div className="lg:col-span-3 flex flex-col gap-2 min-w-0 w-full">
                                        <div className="bg-[#1e1e1e] text-zinc-300 font-mono text-xs rounded-2xl overflow-hidden border border-zinc-800 shadow-md w-full">
                                            <div className="bg-[#2d2d2d] px-4 py-2 text-[11px] text-zinc-500 flex justify-between border-b border-zinc-800 items-center gap-2">
                                                <span className="truncate mr-2">front/app/directory/page.tsx</span>
                                                <span className="text-blue-400 font-bold shrink-0">Next.js Client Search</span>
                                            </div>
                                            <pre className="p-4 sm:p-5 overflow-x-auto leading-relaxed text-left w-full">
                                                <code>
                                                    {`// 1. React States para búsquedas y etiquetas de especialidad
export default function DirectoryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // 2. Conmutador de filtros seleccionados
    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) 
              ? prev.filter((t) => t !== tag) 
              : [...prev, tag]
        );
    };

    // 3. Filtrado reactivo optimizado mediante useMemo
    const filteredTherapists = useMemo(() => {
        return THERAPISTS.filter((therapist) => {
            // Filtrar coincidencia de texto (Nombre, Especialidad o Tags)
            const matchesSearch =
                therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                therapist.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                therapist.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

            // Filtrar coincidencia múltiple de especialidades (operador AND)
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((tag) => therapist.tags.includes(tag));

            return matchesSearch && matchesTags;
        });
    }, [searchQuery, selectedTags]);

    return (
        <main>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <div className="grid">
                {filteredTherapists.map(t => <TherapistCard key={t.id} therapist={t} />)}
            </div>
        </main>
    );
}`}
                                                </code>
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-2 flex flex-col gap-4 font-inter text-sm justify-center">
                                        <div className="bg-[#FAF9F6] border border-[#D4C5B9]/30 rounded-2xl p-6 flex flex-col gap-4">
                                            <h4 className="font-bold text-[#622c91] text-base font-heading">Explicación del Directorio</h4>
                                            <ul className="flex flex-col gap-3 text-zinc-600 leading-relaxed list-disc pl-4">
                                                <li>
                                                    <strong>Optimización de Rendimiento:</strong> Utiliza el hook `useMemo` de React para recalcular el filtrado de terapeutas solo cuando el valor del buscador (`searchQuery`) o los filtros (`selectedTags`) cambien.
                                                </li>
                                                <li>
                                                    <strong>Coincidencia Textual Flexible:</strong> Realiza normalización a minúsculas (`toLowerCase`) para prevenir incompatibilidad de mayúsculas/minúsculas.
                                                </li>
                                                <li>
                                                    <strong>Filtrado Multietiqueta (AND):</strong> El método `.every()` garantiza que el psicólogo resultante deba contener *todas* y cada una de las especialidades marcadas por el usuario.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </section>


                    {/* SECTION 5: ENLACE AL REPOSITORIO */}
                    <section id="repositorios" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <GithubIcon className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Enlace a los Repositorios en GitHub</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-6 w-full">
                            <div>
                                <h3 className="text-lg font-bold font-heading">Código Fuente</h3>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <a
                                    href="https://github.com/PsiMatch/front"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#D4C5B9]/30 bg-[#FAF9F6] hover:border-[#622c91] hover:bg-[#622c91]/5 transition-all cursor-pointer text-left"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#622c91]/10 flex items-center justify-center text-[#622c91] shrink-0 group-hover:bg-[#622c91] group-hover:text-white transition-colors">
                                        <GithubIcon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                                        <h4 className="font-bold text-[#111111] group-hover:text-[#622c91] transition-colors text-sm font-heading flex items-center gap-1.5">
                                            <span>Repositorio Frontend (Next.js)</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </h4>
                                        <p className="text-xs text-zinc-500 leading-relaxed font-inter">
                                            Contiene el portal del paciente, cuestionario de match reactivo, directorio interactivo y estilos visuales basados en Tailwind.
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/PsiMatch/back"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#D4C5B9]/30 bg-[#FAF9F6] hover:border-[#622c91] hover:bg-[#622c91]/5 transition-all cursor-pointer text-left"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#622c91]/10 flex items-center justify-center text-[#622c91] shrink-0 group-hover:bg-[#622c91] group-hover:text-white transition-colors">
                                        <GithubIcon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                                        <h4 className="font-bold text-[#111111] group-hover:text-[#622c91] transition-colors text-sm font-heading flex items-center gap-1.5">
                                            <span>Repositorio Backend (NestJS)</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </h4>
                                        <p className="text-xs text-zinc-500 leading-relaxed font-inter">
                                            Contiene el servidor REST, controladores, esquemas de Mongoose de terapeutas y el microservicio de generación de match.
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </section>


                    {/* SECTION 6: ENLACE DE LA PAGINA / INSTALACIÓN PWA */}
                    <section id="instalacion" className="scroll-mt-28 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[#622c91]">
                            <Download className="w-8 h-8" />
                            <h2 className="text-3xl font-bold font-heading">Enlace e Instalación de la Aplicación</h2>
                        </div>
                        <hr className="border-[#D4C5B9]/30" />

                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D4C5B9]/20 shadow-xs flex flex-col gap-8 w-full">

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-lg font-bold font-heading">Despliegue y Distribución PWA</h3>
                                    <p className="text-zinc-500 font-inter text-sm">
                                        PsiMatch está configurada como una Aplicación Web Progresiva (PWA), permitiendo su instalación directa en dispositivos móviles o escritorio sin pasar por app stores.
                                    </p>
                                </div>

                                {/* ENLACE DEL SITIO WEB DESPLEGADO - MODIFICABLE POR EL USUARIO */}
                                <a
                                    href="https://psimatch-app.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#111111] hover:bg-black text-white font-bold px-6 py-3 rounded-2xl transition-all flex items-center gap-2 text-sm font-inter shrink-0 shadow-sm"
                                >
                                    <span>Ir a la Aplicación Desplegada</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#D4C5B9]/20 pt-8">

                                <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-sm text-[#111111] font-heading flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#622c91]/10 flex items-center justify-center text-[#622c91] text-xs font-bold">1</div>
                                        <span>Cómo instalar en dispositivos móviles (iOS / Android)</span>
                                    </h4>
                                    <div className="flex flex-col gap-3 font-inter text-xs text-zinc-600 leading-relaxed bg-[#FAF9F6] p-5 rounded-2xl border border-[#D4C5B9]/20">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-[#622c91]">Android:</span>
                                            <span>Abre el enlace en Chrome, presiona la ventana emergente "Agregar a pantalla de inicio" o ingresa al menú de opciones y selecciona "Instalar aplicación".</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold text-[#622c91]">iOS (Safari):</span>
                                            <span>Haz clic en el botón de "Compartir" en Safari (ícono del cuadro con flecha hacia arriba) y selecciona la opción "Agregar a Inicio".</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-sm text-[#111111] font-heading flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#622c91]/10 flex items-center justify-center text-[#622c91] text-xs font-bold">2</div>
                                        <span>Cómo instalar en ordenador (Chrome / Edge)</span>
                                    </h4>
                                    <div className="flex flex-col gap-3 font-inter text-xs text-zinc-600 leading-relaxed bg-[#FAF9F6] p-5 rounded-2xl border border-[#D4C5B9]/20">
                                        <div className="flex items-start gap-2">
                                            <span className="font-bold text-[#622c91]">Navegador:</span>
                                            <span>En la barra de direcciones superior, haz clic en el ícono de instalación (una pantalla pequeña con una flecha hacia abajo) a la derecha de la URL y confirma la instalación en el cuadro emergente.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
