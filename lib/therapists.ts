export interface PatientReview {
    author: string;
    rating: number;
    comment: string;
}

export interface Therapist {
    id: string;
    name: string;
    image: string;
    specialty: string;
    rating: number;
    reviewsCount: number;
    tags: string[];
    price: number;
    originalPrice?: number;
    timeSlot?: string;
    isFeatured: boolean;
    featuredText?: string;
    ctaText: string;
    // Profile-specific fields
    experience: string;
    modalidad: string;
    bio: string;
    patientReviews: PatientReview[];
    priceDisplay: string;
    priceDetails: string;
}

export const THERAPISTS: Therapist[] = [
    {
        id: "elena-vargas",
        name: "Dra. Elena Vargas",
        image: "/elena_vargas.png",
        specialty: "Psicología Clínica\nCognitivo-Conductual",
        rating: 4.9,
        reviewsCount: 124,
        tags: ["Ansiedad", "Depresión"],
        price: 60,
        isFeatured: false,
        ctaText: "Ver perfil",
        experience: "+8 Años",
        modalidad: "Online / Presencial",
        bio: "Mi enfoque terapéutico se basa en la terapia cognitivo-conductual, ayudándote a identificar y transformar patrones de pensamiento disfuncionales. Trabajo de forma colaborativa para que adquieras herramientas prácticas aplicables a tu día a día.",
        priceDisplay: "€60 EUR",
        priceDetails: "Sesión de 50 minutos • Presencial u Online",
        patientReviews: [
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Excelente profesional, me ha ayudado muchísimo con mis ataques de pánico y a comprender el origen de mi ansiedad cotidiana."
            },
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Muy empática, atenta y profesional. Desde la primera sesión te da pautas claras para trabajar durante la semana."
            }
        ]
    },
    {
        id: "marcos-ruiz",
        name: "Lic. Marcos Ruiz",
        image: "/marcos_ruiz.png",
        specialty: "Terapia Sistémica y de\nPareja",
        rating: 4.8,
        reviewsCount: 98,
        tags: ["Pareja", "Familia"],
        price: 45,
        originalPrice: 70,
        timeSlot: "hoy 18:00",
        isFeatured: true,
        featuredText: "Slot cancelado con precio especial",
        ctaText: "Reservar",
        experience: "+10 Años",
        modalidad: "Online",
        bio: "Especializado en dinámicas relacionales, terapia de pareja y resolución de conflictos familiares. Trabajo desde un enfoque sistémico para reconstruir la comunicación afectiva y resolver tensiones acumuladas.",
        priceDisplay: "€45 EUR",
        priceDetails: "Sesión de 50 minutos • Online (Descuento de hoy)",
        patientReviews: [
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Nos ayudó muchísimo a mi pareja y a mí a restablecer canales de comunicación sanos y superar un momento de crisis profunda."
            }
        ]
    },
    {
        id: "sofia-costa",
        name: "Dra. Sofía Costa",
        image: "/sofia_costa.png",
        specialty: "Psicoanálisis Relacional",
        rating: 5.0,
        reviewsCount: 45,
        tags: ["Trauma", "Identidad"],
        price: 65,
        isFeatured: false,
        ctaText: "Ver perfil",
        experience: "+15 Años",
        modalidad: "Online / Presencial",
        bio: "Ofrezco un espacio seguro y profundo para explorar cómo las relaciones tempranas y las experiencias de vida han moldeado tu presente, ayudándote a sanar traumas y fortalecer tu identidad.",
        priceDisplay: "€65 EUR",
        priceDetails: "Sesión de 50 minutos • Presencial u Online",
        patientReviews: [
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Un espacio de sanación profunda y auténtica. Siento que finalmente he podido elaborar heridas emocionales muy antiguas."
            }
        ]
    },
    {
        id: "javier-silva",
        name: "Dr. Javier Silva",
        image: "/javier_silva.png",
        specialty: "Terapias de Tercera\nGeneración (ACT,\nMindfulness)",
        rating: 4.7,
        reviewsCount: 210,
        tags: ["Estrés", "Crecimiento Personal"],
        price: 55,
        isFeatured: false,
        ctaText: "Ver perfil",
        experience: "+9 Años",
        modalidad: "Online",
        bio: "Integro técnicas de aceptación y compromiso (ACT) con prácticas de mindfulness para ayudarte a convivir mejor con pensamientos y emociones difíciles, enfocándote en lo que verdaderamente valoras en tu vida.",
        priceDisplay: "€55 EUR",
        priceDetails: "Sesión de 50 minutos • Online",
        patientReviews: [
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Muy recomendable. Sus explicaciones son sumamente claras y las prácticas de mindfulness me han ayudado a reducir mis niveles de estrés laboral notablemente."
            }
        ]
    },
    {
        id: "clara-mendoza",
        name: "Dra. Clara Mendoza",
        image: "/clara_mendoza.png",
        specialty: "Psicología Clínica y Enfoque Cognitivo-Conductual",
        rating: 5.0,
        reviewsCount: 18,
        tags: ["Ansiedad", "Transiciones de vida", "Burnout"],
        price: 1200,
        isFeatured: false,
        ctaText: "Ver perfil",
        experience: "+12 Años",
        modalidad: "Online",
        bio: "Mi enfoque terapéutico se basa en crear un espacio seguro y genuino donde puedas explorar tus pensamientos sin juicios. Creo firmemente que cada persona tiene las herramientas necesarias para sanar, y mi rol es acompañarte en ese descubrimiento. No se trata de arreglar lo que está roto, sino de comprender profundamente tus patrones para poder elegir respuestas más saludables. Trabajo desde la empatía y la claridad estructural, ofreciendo un balance entre la contención emocional y estrategias prácticas para el día a día.",
        priceDisplay: "$1,200 MXN",
        priceDetails: "Sesión de 50 minutos • Online",
        patientReviews: [
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Encontrar a Clara fue un punto de inflexión. Es increíblemente cálida pero muy estructurada, lo que me ayudó a organizar mi mente cuando sentía que todo era un caos. Me sentí escuchado desde el primer minuto."
            },
            {
                author: "Paciente Anónimo",
                rating: 5,
                comment: "Aprecio mucho su claridad y humanidad. Las sesiones son prácticas y siempre salgo con algo en qué trabajar durante la semana. Su espacio virtual se siente genuinamente seguro."
            }
        ]
    }
];
