import { Scale, Gavel, Briefcase, Users, FileText, Shield, Globe, Building2 } from 'lucide-react';
import { NavItem, PracticeArea, Lawyer, Testimonial, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#atuacao' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Resolução de conflitos, contratos, responsabilidade civil e proteção patrimonial com estratégia focada.',
    icon: Scale,
  },
  {
    id: 'penal',
    title: 'Direito Penal',
    description: 'Defesa técnica e especializada em inquéritos e processos criminais, garantindo o devido processo legal.',
    icon: Gavel,
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description: 'Assessoria para empresas e empregados, focada em prevenção de litígios e compliance trabalhista.',
    icon: Briefcase,
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Atuação sensível e discreta em divórcios, partilhas, guarda e sucessões.',
    icon: Users,
  },
  {
    id: 'contratos',
    title: 'Contratos',
    description: 'Elaboração e revisão contratual minuciosa para garantir segurança jurídica em seus negócios.',
    icon: FileText,
  },
  {
    id: 'empresarial',
    title: 'Empresarial',
    description: 'Consultoria jurídica completa para estruturação, fusões, aquisições e governança corporativa.',
    icon: Building2,
  },
];

export const TEAM: Lawyer[] = [
  {
    id: '1',
    name: 'Dr. Carlos Mendes',
    role: 'Sócio Fundador',
    oab: 'OAB/SP 123.456',
    bio: 'Especialista em Direito Empresarial com mais de 20 anos de experiência em grandes negociações corporativas.',
    imageUrl: 'https://picsum.photos/id/1025/400/500', 
  },
  {
    id: '2',
    name: 'Dra. Ana Paula Souza',
    role: 'Sócia Sênior',
    oab: 'OAB/SP 654.321',
    bio: 'Referência em Direito Civil e de Família, com atuação focada na mediação e resolução humanizada de conflitos.',
    imageUrl: 'https://picsum.photos/id/64/400/500', 
  },
  {
    id: '3',
    name: 'Dr. Roberto Almeida',
    role: 'Advogado Associado',
    oab: 'OAB/SP 987.654',
    bio: 'Mestre em Direito Penal Econômico, atua com rigor técnico na defesa dos interesses dos clientes.',
    imageUrl: 'https://picsum.photos/id/1005/400/500',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Profissionalismo impecável. A equipe demonstrou profundo conhecimento técnico e resolveu nossa demanda empresarial com agilidade.",
    author: "Ricardo Gomes",
    role: "Diretor Comercial",
    rating: 5,
  },
  {
    id: '2',
    text: "Senti-me acolhida e muito bem representada durante todo o meu processo de divórcio. Agradeço pela sensibilidade e competência.",
    author: "Mariana Costa",
    role: "Cliente",
    rating: 5,
  },
  {
    id: '3',
    text: "Transparência total desde a primeira consulta. Conseguimos reverter uma situação complexa graças à estratégia do escritório.",
    author: "Fernando Dias",
    role: "Empreendedor",
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Impactos da Reforma Tributária nos Pequenos Negócios',
    excerpt: 'Entenda as principais mudanças legislativas e como elas afetam o planejamento financeiro da sua empresa.',
    imageUrl: 'https://picsum.photos/id/20/600/400',
    date: '12 Out, 2023',
  },
  {
    id: '2',
    title: 'A Importância do Compliance Trabalhista',
    excerpt: 'Como a conformidade com as leis do trabalho pode prevenir passivos milionários e proteger a reputação da marca.',
    imageUrl: 'https://picsum.photos/id/4/600/400',
    date: '05 Set, 2023',
  },
  {
    id: '3',
    title: 'Planejamento Sucessório: Por que fazer?',
    excerpt: 'Garanta a segurança patrimonial da sua família e evite conflitos futuros com um planejamento adequado.',
    imageUrl: 'https://picsum.photos/id/6/600/400',
    date: '28 Ago, 2023',
  },
];