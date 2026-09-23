import {
  Award,
  BookOpen,
  Brush,
  Camera,
  Disc3,
  FileArchive,
  FileBadge,
  FileText,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Instagram,
  Landmark,
  Mic2,
  Newspaper,
  Paintbrush,
  Radio,
  ShieldCheck,
  Shirt,
  Sparkles,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import breakingCircle from "@/assets/breaking-circle.jpg";
import communityStage from "@/assets/community-stage.jpg";
import craftWorkshop from "@/assets/craft-workshop.jpg";
import djMcWorkshop from "@/assets/dj-mc-workshop.jpg";
import graffitiWorkshop from "@/assets/graffiti-workshop.jpg";
import heroImage from "@/assets/hiphop-hero.jpg";
import teamGroup from "@/assets/team-group.jpg";
import workshopVertical from "@/assets/workshop-vertical.jpg";

export type ImageRef = {
  src: string;
  alt: string;
};

export type Project = {
  slug: "projeto-1" | "projeto-2" | "projeto-3";
  name: string;
  area: string;
  category: string;
  status: string;
  audience: string;
  location: string;
  summary: string;
  description: string;
  longText: string[];
  image: ImageRef;
  accent: "primary" | "secondary" | "ink";
  stats: Array<{ value: string; label: string }>;
  activities: Array<{ name: string; description: string; icon: LucideIcon; image: ImageRef }>;
  gallery: ImageRef[];
  quote: string;
  quoteAuthor: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Evento" | "Institucional" | "Formação" | "Ação Social" | "Parceria" | "Projeto";
  image: ImageRef;
  content: Array<
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string }
    | { type: "list"; items: string[] }
    | { type: "image"; image: ImageRef; caption: string }
  >;
  gallery: ImageRef[];
};

export const organization = {
  name: "Ponto de Cultura Pulso Urbano",
  shortName: "Pulso Urbano",
  label: "PONTO DE CULTURA • HIP HOP • TERRITÓRIO",
  description:
    "Organização cultural dedicada à formação, produção artística e fortalecimento comunitário por meio dos quatro elementos do Hip Hop.",
  address: "Rua das Rimas, 245 — Centro Cultural do Território, São Paulo/SP",
  phone: "(11) 4002-2026",
  whatsapp: "5511999992026",
  email: "contato@pulsourbano.org.br",
  hours: "Segunda a sexta, das 9h às 18h",
};

export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com", icon: Users },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Landmark },
  { name: "WhatsApp", href: `https://wa.me/${organization.whatsapp}`, icon: Radio },
];

export const images = {
  hero: { src: heroImage, alt: "Roda de breaking com DJ e MC em praça urbana ao entardecer" },
  workshop: { src: workshopVertical, alt: "Jovens participam de oficina de escrita, DJ e MC em espaço cultural" },
  breaking: { src: breakingCircle, alt: "Jovem dança breaking em roda cultural" },
  dj: { src: djMcWorkshop, alt: "Educador orienta jovens em equipamentos de DJ e microfone" },
  graffiti: { src: graffitiWorkshop, alt: "Participantes pintam mural coletivo em oficina de graffiti" },
  craft: { src: craftWorkshop, alt: "Participantes customizam roupas e acessórios em oficina artesanal urbana" },
  stage: { src: communityStage, alt: "Apresentação cultural comunitária com breaking em palco aberto" },
  team: { src: teamGroup, alt: "Equipe de educadores e produtores culturais do Ponto de Cultura" },
};

export const institutionalNumbers = [
  { value: "+10", label: "anos de atuação" },
  { value: "+2.400", label: "participantes" },
  { value: "+180", label: "ações realizadas" },
];

export const actionAreas = [
  {
    number: "01",
    title: "Formação cultural",
    description: "Oficinas, trilhas de aprendizagem e encontros que desenvolvem técnica, repertório e autonomia.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Hip Hop",
    description: "MC, DJ, breaking e graffiti como linguagem artística, memória coletiva e expressão política do território.",
    icon: Mic2,
  },
  {
    number: "03",
    title: "Educação",
    description: "Metodologias participativas que aproximam arte, escuta, leitura de mundo e desenvolvimento humano.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Cultura urbana",
    description: "Programações que ocupam ruas, praças, escolas e equipamentos públicos com criação e circulação cultural.",
    icon: Brush,
  },
  {
    number: "05",
    title: "Ações sociais",
    description: "Atuação em rede para ampliar acesso, acolhimento e oportunidades para juventudes e famílias.",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "Território e comunidade",
    description: "Projetos construídos com lideranças, coletivos, artistas, escolas e moradores.",
    icon: Users,
  },
];

export const hipHopElements = [
  { name: "MC", description: "Palavra, presença e narrativa para contar a própria história.", icon: Mic2 },
  { name: "DJ", description: "Pesquisa sonora, ritmo e tecnologia como ponte entre gerações.", icon: Disc3 },
  { name: "Breaking", description: "Corpo, disciplina e criação coletiva na roda.", icon: Sparkles },
  { name: "Graffiti", description: "Imagem pública, memória e pertencimento no espaço urbano.", icon: Paintbrush },
];

export const projects: Project[] = [
  {
    slug: "projeto-1",
    name: "Ritmo, Rua e Palavra",
    area: "Formação em MC e DJ",
    category: "Formação",
    status: "Em andamento",
    audience: "Jovens de 13 a 24 anos",
    location: "Centro Cultural do Território",
    summary: "Trilha formativa em escrita, voz, pesquisa musical e produção de pequenas apresentações.",
    description:
      "Um percurso para jovens desenvolverem composição, escuta, performance e leitura crítica do território por meio da palavra e do som.",
    longText: [
      "O projeto combina encontros de escrita criativa, prática de microfone, pesquisa musical e fundamentos de discotecagem. A proposta é fortalecer a expressão autoral, ampliar repertórios e criar espaços seguros para experimentação artística.",
      "Cada ciclo termina com uma mostra aberta, reunindo familiares, coletivos convidados e moradores. O processo valoriza tanto a técnica quanto a escuta, o cuidado e a construção coletiva.",
    ],
    image: images.dj,
    accent: "primary",
    stats: [
      { value: "+120", label: "participantes" },
      { value: "36", label: "oficinas" },
      { value: "8", label: "mostras" },
      { value: "3", label: "anos" },
    ],
    activities: [
      { name: "Escrita e rima", description: "Exercícios de composição, improviso e narrativa do cotidiano.", icon: Mic2, image: images.workshop },
      { name: "Pesquisa sonora", description: "Escuta orientada, repertório e criação de sets com identidade.", icon: Disc3, image: images.dj },
      { name: "Performance", description: "Presença de palco, respiração e comunicação com o público.", icon: Radio, image: images.stage },
    ],
    gallery: [images.dj, images.workshop, images.stage, images.hero, images.breaking, images.graffiti],
    quote:
      "Aqui a gente aprende técnica, mas também aprende a ouvir nossa quebrada e transformar vivência em linguagem.",
    quoteAuthor: "Participante do ciclo 2025",
  },
  {
    slug: "projeto-2",
    name: "Corpo em Movimento",
    area: "Breaking e educação corporal",
    category: "Cultura urbana",
    status: "Inscrições abertas",
    audience: "Crianças, adolescentes e jovens",
    location: "Praças, escolas e sede cultural",
    summary: "Aulas, rodas e vivências de breaking que unem disciplina, convivência, corpo e criatividade.",
    description:
      "Formação em breaking que aproxima fundamentos técnicos, história do Hip Hop, saúde do corpo e ocupação cultural do território.",
    longText: [
      "As atividades acontecem em espaços culturais, escolas parceiras e praças, respeitando diferentes níveis de experiência. A roda é trabalhada como lugar de escuta, coragem, respeito e pertencimento.",
      "Além das aulas, o projeto promove batalhas educativas, conversas com artistas convidados e registros audiovisuais para fortalecer memória e circulação.",
    ],
    image: images.breaking,
    accent: "secondary",
    stats: [
      { value: "+180", label: "participantes" },
      { value: "52", label: "encontros" },
      { value: "12", label: "rodas" },
      { value: "4", label: "territórios" },
    ],
    activities: [
      { name: "Fundamentos", description: "Toprock, footwork, freezes e noções de musicalidade.", icon: Sparkles, image: images.breaking },
      { name: "Roda educativa", description: "Dinâmicas de respeito, confiança e troca entre gerações.", icon: Users, image: images.hero },
      { name: "Registro e memória", description: "Fotografia, vídeo e relato das experiências vividas.", icon: Camera, image: images.stage },
    ],
    gallery: [images.breaking, images.hero, images.stage, images.dj, images.workshop, images.graffiti],
    quote:
      "A roda mostra que cada pessoa tem um tempo, um estilo e uma forma de participar. Isso muda a relação com o espaço.",
    quoteAuthor: "Educadora convidada",
  },
  {
    slug: "projeto-3",
    name: "Ateliê Urbano",
    area: "Artesanato, customização e graffiti",
    category: "Produção artesanal",
    status: "Em circulação",
    audience: "Mulheres, jovens e coletivos locais",
    location: "Sede cultural e ações itinerantes",
    summary: "Oficinas de criação manual, customização, pintura e produção decorativa com estética urbana.",
    description:
      "Um ateliê de experimentação que valoriza técnicas manuais, economia criativa, identidade visual e referências da cultura Hip Hop.",
    longText: [
      "O Ateliê Urbano conecta artesanato, moda, pintura e comunicação visual. Os encontros propõem criação de peças, customização de vestuário, acessórios e materiais gráficos com acabamento autoral.",
      "O projeto também incentiva organização de portfólio, precificação, apresentação pública e participação em feiras culturais, fortalecendo renda e autonomia.",
    ],
    image: images.craft,
    accent: "primary",
    stats: [
      { value: "+95", label: "participantes" },
      { value: "28", label: "oficinas" },
      { value: "6", label: "feiras" },
      { value: "2", label: "anos" },
    ],
    activities: [
      { name: "Pintura", description: "Estudos de cor, composição e aplicação em superfícies diversas.", icon: Paintbrush, image: images.graffiti },
      { name: "Customização", description: "Intervenções em roupas, tênis, bonés e objetos de uso cotidiano.", icon: Shirt, image: images.craft },
      { name: "Acessórios", description: "Criação de peças manuais com identidade territorial.", icon: Brush, image: images.craft },
      { name: "Arte em tecido", description: "Stencil, pintura e acabamento em materiais têxteis.", icon: Sparkles, image: images.craft },
      { name: "Produção decorativa", description: "Objetos, labels, placas e itens para eventos culturais.", icon: Award, image: images.graffiti },
    ],
    gallery: [images.craft, images.graffiti, images.workshop, images.team, images.stage, images.dj],
    quote:
      "Cada peça carrega uma memória do território. O artesanato vira expressão, renda e autoestima.",
    quoteAuthor: "Participante do Ateliê Urbano",
  },
];

export const team = [
  {
    name: "Lia Santos",
    role: "Coordenação geral",
    bio: "Articuladora cultural com trajetória em gestão comunitária, produção executiva e redes de cultura urbana.",
    image: images.team,
    social: "https://instagram.com",
  },
  {
    name: "Rafa Nascimento",
    role: "Educador de MC e escrita",
    bio: "MC, pesquisador de oralidade e facilitador de processos formativos com juventudes.",
    image: images.workshop,
    social: "https://instagram.com",
  },
  {
    name: "Dani Beats",
    role: "Educadora de DJ",
    bio: "DJ e produtora musical dedicada à pesquisa sonora, discotecagem e memória do Hip Hop brasileiro.",
    image: images.dj,
    social: "https://instagram.com",
  },
  {
    name: "Bia Rocha",
    role: "Arte-educadora visual",
    bio: "Desenvolve oficinas de muralismo, pintura, customização e criação gráfica com foco territorial.",
    image: images.graffiti,
    social: "https://instagram.com",
  },
  {
    name: "Nego Will",
    role: "Educador de breaking",
    bio: "B-boy, coreógrafo e mediador de rodas educativas, batalhas formativas e práticas corporais.",
    image: images.breaking,
    social: "https://instagram.com",
  },
  {
    name: "Maya Oliveira",
    role: "Comunicação e memória",
    bio: "Fotógrafa e produtora de conteúdo responsável por registros, acervo e comunicação institucional.",
    image: images.stage,
    social: "https://instagram.com",
  },
];

export const news: NewsItem[] = [
  {
    slug: "mostra-arte-educacao-dia-das-maes",
    title: "Mostra Arte e Educação reúne famílias em celebração comunitária",
    excerpt:
      "Apresentações, exposição de peças autorais e roda de conversa marcaram o encerramento de ciclo formativo.",
    date: "12 maio 2026",
    category: "Evento",
    image: images.stage,
    content: [
      { type: "paragraph", text: "A Mostra Arte e Educação ocupou o espaço cultural com apresentações, exposição de peças produzidas em oficinas e participação ativa das famílias." },
      { type: "paragraph", text: "O encontro fortaleceu vínculos entre participantes, educadores e comunidade, mostrando resultados de processos construídos ao longo do semestre." },
      { type: "heading", text: "Formação, presença e território" },
      { type: "paragraph", text: "As atividades combinaram música, breaking, artes visuais e relatos de participantes. A programação foi pensada para valorizar trajetórias e abrir diálogo sobre cultura como direito." },
      { type: "quote", text: "Quando a família entra no espaço cultural, o projeto deixa de ser uma atividade isolada e vira uma construção coletiva." },
      { type: "list", items: ["Apresentações de MC e breaking", "Exposição de customização e pintura", "Roda de conversa com educadores", "Registro fotográfico comunitário"] },
    ],
    gallery: [images.stage, images.craft, images.breaking, images.workshop, images.graffiti],
  },
  {
    slug: "oficina-de-dj-abre-novo-ciclo",
    title: "Oficina de DJ abre novo ciclo de formação sonora",
    excerpt: "Jovens iniciam percurso de pesquisa musical, discotecagem e criação de repertório próprio.",
    date: "03 abril 2026",
    category: "Formação",
    image: images.dj,
    content: [
      { type: "paragraph", text: "O novo ciclo da oficina de DJ começou com escutas guiadas, conversa sobre história da cultura sound system e primeiras práticas em equipamentos." },
      { type: "paragraph", text: "A proposta é desenvolver técnica sem perder o vínculo com repertórios familiares, memórias do território e circulação da música brasileira." },
      { type: "heading", text: "Do vinil ao arquivo digital" },
      { type: "paragraph", text: "Participantes experimentam diferentes suportes e aprendem organização de biblioteca musical, transições, leitura de pista e construção de narrativa sonora." },
    ],
    gallery: [images.dj, images.workshop, images.hero, images.stage, images.team],
  },
  {
    slug: "parceria-com-escolas-do-territorio",
    title: "Parceria com escolas amplia ações culturais no território",
    excerpt: "Agenda integrada leva oficinas, rodas e apresentações para estudantes da rede pública.",
    date: "21 março 2026",
    category: "Parceria",
    image: images.workshop,
    content: [
      { type: "paragraph", text: "A articulação com escolas fortalece a presença da cultura Hip Hop no cotidiano de estudantes e professores." },
      { type: "paragraph", text: "As ações incluem oficinas de escrita, graffiti, breaking e rodas de conversa sobre pertencimento, identidade e direitos culturais." },
      { type: "quote", text: "A escola reconhece o território quando abre espaço para as linguagens que já fazem parte da vida dos estudantes." },
    ],
    gallery: [images.workshop, images.graffiti, images.breaking, images.dj, images.stage],
  },
  {
    slug: "ateliê-urbano-participa-feira-criativa",
    title: "Ateliê Urbano participa de feira de economia criativa",
    excerpt: "Peças customizadas por participantes circularam em evento com artistas e coletivos independentes.",
    date: "18 fevereiro 2026",
    category: "Projeto",
    image: images.craft,
    content: [
      { type: "paragraph", text: "Participantes do Ateliê Urbano apresentaram peças de customização, acessórios e objetos decorativos produzidos nas oficinas." },
      { type: "paragraph", text: "A ação aproximou criação manual, identidade visual e possibilidades de geração de renda no campo da cultura." },
    ],
    gallery: [images.craft, images.graffiti, images.team, images.workshop, images.stage],
  },
  {
    slug: "roda-de-breaking-ocupa-praca",
    title: "Roda de breaking ocupa praça com formação e convivência",
    excerpt: "Atividade aberta reuniu participantes de diferentes bairros em encontro educativo.",
    date: "27 janeiro 2026",
    category: "Ação Social",
    image: images.breaking,
    content: [
      { type: "paragraph", text: "A roda de breaking levou formação corporal, música e convivência para a praça, reforçando o espaço público como lugar de cultura." },
      { type: "paragraph", text: "A ação contou com educadores, artistas convidados e famílias acompanhando as apresentações." },
    ],
    gallery: [images.breaking, images.hero, images.stage, images.dj, images.graffiti],
  },
  {
    slug: "relatorio-anual-organiza-acervo",
    title: "Relatório anual organiza ações, indicadores e registros",
    excerpt: "Documento reúne atividades, parcerias, números de participação e perspectivas para o próximo ciclo.",
    date: "15 dezembro 2025",
    category: "Institucional",
    image: images.team,
    content: [
      { type: "paragraph", text: "O relatório anual consolida ações realizadas, números de participação, registros fotográficos e informações institucionais." },
      { type: "paragraph", text: "A publicação reforça o compromisso com transparência, memória e prestação de contas à comunidade." },
    ],
    gallery: [images.team, images.stage, images.workshop, images.craft, images.hero],
  },
  {
    slug: "graffiti-e-memoria-no-muro-coletivo",
    title: "Graffiti e memória transformam muro em narrativa coletiva",
    excerpt: "Oficina reuniu moradores e participantes para criar painel sobre identidade e pertencimento.",
    date: "09 novembro 2025",
    category: "Formação",
    image: images.graffiti,
    content: [
      { type: "paragraph", text: "A oficina de graffiti propôs um processo de criação coletiva, partindo de conversas sobre memória, referências visuais e histórias do bairro." },
      { type: "paragraph", text: "O painel final representa a diversidade de vozes que constroem o território." },
    ],
    gallery: [images.graffiti, images.craft, images.workshop, images.team, images.breaking],
  },
  {
    slug: "encontro-de-coletivos-fortalece-rede",
    title: "Encontro de coletivos fortalece rede de cultura urbana",
    excerpt: "Grupos de diferentes regiões compartilharam metodologias, desafios e planos de colaboração.",
    date: "22 outubro 2025",
    category: "Parceria",
    image: images.hero,
    content: [
      { type: "paragraph", text: "O encontro reuniu coletivos, educadores e produtores para trocar experiências sobre gestão, formação e circulação cultural." },
      { type: "paragraph", text: "A rede planeja novas ações integradas para ampliar alcance e sustentabilidade dos projetos." },
    ],
    gallery: [images.hero, images.team, images.stage, images.dj, images.graffiti],
  },
  {
    slug: "jovens-apresentam-composicoes-autorais",
    title: "Jovens apresentam composições autorais em sarau aberto",
    excerpt: "Participantes da oficina de escrita compartilharam rimas, relatos e experimentações sonoras.",
    date: "05 setembro 2025",
    category: "Evento",
    image: images.workshop,
    content: [
      { type: "paragraph", text: "O sarau marcou uma etapa importante do processo formativo, abrindo espaço para composições autorais e escuta coletiva." },
      { type: "paragraph", text: "As apresentações revelaram temas como memória, família, escola, bairro, futuro e direito à cidade." },
    ],
    gallery: [images.workshop, images.dj, images.stage, images.hero, images.team],
  },
];

export const galleryYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

export const galleryEvents: Record<number, Array<{ title: string; photos: ImageRef[] }>> = {
  2026: [
    { title: "Mostra Arte e Educação – Dia das Mães", photos: [images.stage, images.craft, images.breaking, images.workshop, images.graffiti, images.dj] },
    { title: "Ciclo Ritmo, Rua e Palavra", photos: [images.dj, images.workshop, images.hero, images.team] },
  ],
  2025: [
    { title: "Festival de Hip Hop do Território", photos: [images.hero, images.stage, images.breaking, images.graffiti, images.dj, images.team] },
    { title: "Oficina de Breaking", photos: [images.breaking, images.hero, images.stage, images.workshop] },
  ],
  2024: [{ title: "Mutirão de Muralismo", photos: [images.graffiti, images.craft, images.team, images.workshop] }],
  2023: [{ title: "Roda Cultural de Inverno", photos: [images.stage, images.hero, images.dj, images.breaking] }],
  2022: [{ title: "Percurso Juventude e Palavra", photos: [images.workshop, images.dj, images.team, images.craft] }],
  2021: [{ title: "Encontros Híbridos de Formação", photos: [images.workshop, images.team, images.dj, images.graffiti] }],
  2020: [{ title: "Memória em Rede", photos: [images.team, images.workshop, images.craft, images.hero] }],
  2019: [{ title: "Ocupação Cultural na Praça", photos: [images.hero, images.breaking, images.stage, images.graffiti] }],
  2018: [{ title: "Primeiras Oficinas Integradas", photos: [images.workshop, images.dj, images.craft, images.team] }],
  2017: [{ title: "Circuito de Rodas Culturais", photos: [images.breaking, images.stage, images.hero, images.dj] }],
  2016: [{ title: "Fundação do Coletivo", photos: [images.team, images.workshop, images.graffiti, images.hero] }],
};

export const transparencyCategories = [
  { name: "Documentos oficiais e institucionais", icon: FileText, count: 15, docs: ["Estatuto social", "Ata de fundação", "Plano de trabalho 2026"] },
  { name: "Certificados", icon: FileBadge, count: 8, docs: ["Certificado Ponto de Cultura", "Reconhecimento municipal", "Inscrição em conselho cultural"] },
  { name: "Reconhecimentos", icon: Award, count: 6, docs: ["Moção cultural", "Prêmio território criativo", "Menção em rede parceira"] },
  { name: "Portfólios", icon: FileArchive, count: 5, docs: ["Portfólio institucional", "Portfólio de oficinas", "Portfólio audiovisual"] },
  { name: "Relatórios", icon: ShieldCheck, count: 10, docs: ["Relatório anual 2025", "Relatório financeiro demonstrativo", "Relatório de impacto"] },
  { name: "Registros de apresentações", icon: Mic2, count: 22, docs: ["Mostra cultural 2026", "Festival de Hip Hop 2025", "Sarau aberto"] },
  { name: "Registros de oficinas", icon: GraduationCap, count: 34, docs: ["Oficina DJ", "Oficina breaking", "Ateliê Urbano"] },
  { name: "Materiais gráficos", icon: Brush, count: 18, docs: ["Cartazes de programação", "Identidade de campanhas", "Peças de divulgação"] },
  { name: "Imprensa", icon: Newspaper, count: 9, docs: ["Clipping 2026", "Entrevistas", "Matérias publicadas"] },
];

export const timeline = [
  { year: "2016", title: "Fundação", text: "Primeiras rodas, oficinas e articulações com coletivos do território." },
  { year: "2018", title: "Expansão", text: "Ampliação de linguagens, parcerias com escolas e ocupações culturais." },
  { year: "2020", title: "Novos formatos", text: "Registros digitais, redes de apoio e formação em formatos híbridos." },
  { year: "2023", title: "Reconhecimento", text: "Consolidação institucional e fortalecimento da rede comunitária." },
  { year: "2026", title: "Novos projetos", text: "Ciclos de formação, acervo público e circulação cultural ampliada." },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}

export function relatedNews(slug: string) {
  return news.filter((item) => item.slug !== slug).slice(0, 3);
}
