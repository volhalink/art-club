import { Locale } from "../services/l10n";

export interface Exercice {
    id: string,
    title: string,
    description: string,
    pictureUrl?: string,
}

export type StepType =  "start" | "read" | "practice";
export interface Step {
    id: string,
    title: string,
    description: string,
    type: StepType,
    exercises?: Exercice[]
}

export interface LearningPath {
    id: string,
    language: Locale,
    enabled: boolean,
    title: string,
    description: string,
    steps?: Step[]
}