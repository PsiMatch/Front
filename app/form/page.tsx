"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Question {
    title: string;
    description?: string;
    options: string[];
}

const QUESTIONS: Question[] = [
    {
        title: "¿Qué te trae por aquí hoy?",
        description: "Selecciona el motivo principal por el que buscas apoyo emocional.",
        options: [
            "Manejar la ansiedad o el estrés",
            "Mejorar mis relaciones interpersonales",
            "Superar un duelo o pérdida reciente",
            "Crecimiento personal y autoconocimiento",
            "Otro motivo personal"
        ]
    },
    {
        title: "¿Cómo te has sentido últimamente?",
        description: "Selecciona la opción que mejor describa tu estado de ánimo general en las últimas semanas.",
        options: [
            "Mayormente tranquilo y positivo",
            "Un poco ansioso o estresado",
            "Triste o desmotivado con frecuencia",
            "Es complicado, una mezcla de emociones"
        ]
    },
    {
        title: "¿Has asistido a terapia antes?",
        description: "Esto nos ayuda a entender tu familiaridad con el proceso terapéutico.",
        options: [
            "Sí, hace poco tiempo",
            "Sí, pero hace mucho tiempo",
            "No, esta sería mi primera vez"
        ]
    },
    {
        title: "¿Qué enfoque de terapeuta prefieres?",
        description: "Cada profesional tiene un estilo diferente de guiar la conversación.",
        options: [
            "Alguien empático que escuche activamente",
            "Alguien práctico que dé herramientas y tareas",
            "No tengo preferencia"
        ]
    },
    {
        title: "¿Prefieres que sea hombre o mujer?",
        description: "Queremos que te sientas con total comodidad en tus sesiones.",
        options: [
            "Prefiero una terapeuta mujer",
            "Prefiero un terapeuta hombre",
            "No tengo preferencia"
        ]
    },
    {
        title: "¿Cuál es tu rango de edad de preferencia para el terapeuta?",
        description: "Algunas personas se comunican mejor con profesionales de ciertos rangos de edad.",
        options: [
            "Menor de 35 años",
            "Entre 35 y 50 años",
            "Mayor de 50 años",
            "No tengo preferencia"
        ]
    },
    {
        title: "¿En qué formato prefieres tus sesiones?",
        description: "Elige la modalidad que mejor se adapte a tus tiempos y estilo de vida.",
        options: [
            "Videollamada online (remoto)",
            "Presencial (en consultorio físico)",
            "No tengo preferencia, ambas me sirven"
        ]
    },
    {
        title: "¿Con qué frecuencia te gustaría programar tus sesiones?",
        description: "Puedes cambiar la frecuencia en cualquier momento con tu terapeuta.",
        options: [
            "Una vez por semana",
            "Cada quince días",
            "Solo cuando sienta que lo necesito"
        ]
    },
    {
        title: "¿En qué horario tienes mayor disponibilidad?",
        description: "Buscaremos profesionales libres en tus horarios preferidos.",
        options: [
            "Mañanas (8:00 - 12:00)",
            "Tardes (12:00 - 18:00)",
            "Noches (18:00 - 21:00)",
            "Fines de semana"
        ]
    },
    {
        title: "¡Perfecto! Hemos encontrado profesionales para ti.",
        description: "Ingresa tu correo para ver tus matches y agendar tu sesión de introducción gratuita.",
        options: []
    }
];

export default function FormPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [email, setEmail] = useState("");

    const currentQuestionIndex = step - 1;
    const currentQuestion = QUESTIONS[currentQuestionIndex];

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        // Redirect directly to the results dashboard
        router.push("/form/result");
    };

    const progress = (step / 10) * 100;

    return (
        <main className="min-h-screen w-full bg-[#FAF9F6] flex flex-col justify-between p-6 md:p-12">
            {/* Top Progress bar section */}
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center text-sm font-semibold text-zinc-600">
                    <span>Paso {step} de 10</span>
                    <span className="text-iris font-bold">{progress}%</span>
                </div>
                <div className="w-full h-[6px] bg-sand/30 rounded-full overflow-hidden">
                    <div
                        className="bg-iris h-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-2xl mx-auto my-auto py-12 flex flex-col items-center">
                <div className="flex flex-col gap-4 text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#111111] leading-tight max-w-xl mx-auto">
                        {currentQuestion.title}
                    </h1>
                    {currentQuestion.description && (
                        <p className="text-zinc-600 font-inter text-base max-w-lg mx-auto leading-relaxed">
                            {currentQuestion.description}
                        </p>
                    )}
                </div>

                {step < 10 ? (
                    /* Question Options Stack */
                    <div className="flex flex-col gap-4 w-full">
                        {currentQuestion.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(option)}
                                className="w-full text-left bg-white border border-transparent hover:border-iris hover:shadow-[0_4px_16px_rgba(98,44,145,0.08)] cursor-pointer py-5 px-8 rounded-2xl transition-all duration-200 shadow-sm text-zinc-800 hover:text-foreground font-inter text-[16px] leading-relaxed font-normal"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Step 10 Email Form */
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-zinc-700" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="tu@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-sand/40 bg-white px-5 py-4 rounded-xl focus:outline-none focus:border-iris font-inter text-[#111111]"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full py-4 text-base font-semibold bg-iris text-white hover:bg-iris/90 rounded-xl shadow-lg transition-all duration-200"
                        >
                            Ver mis matches gratuitos
                        </Button>
                    </form>
                )}
            </div>

            {/* Footer Navigation */}
            <div className="w-full max-w-2xl mx-auto flex flex-row justify-start">
                {step > 1 ? (
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-zinc-600 hover:text-foreground font-semibold font-inter transition-colors cursor-pointer"
                    >
                        <span>←</span> Atrás
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-zinc-600 hover:text-foreground font-semibold font-inter transition-colors"
                    >
                        <span>←</span> Cancelar
                    </Link>
                )}
            </div>
        </main>
    );
}