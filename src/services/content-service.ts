import { Locale } from "./l10n";
import { LearningPath } from "../contexts/learning-path-context";
//import data from './data';

export const loadLocalizedLearningPathesListAsync = async (locale: Locale): Promise<LearningPath[]>  => {
    const response = await fetch("api/" + locale + "/learningpath", {
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data: LearningPath[] = await response.json(); 

    return data;
}

export const loadLocalizedLearningPathAsync = async (locale: Locale, id: string): Promise<LearningPath>  => {
    const response = await fetch("api/" + locale + "/learningpath/" + id, {
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data: LearningPath = await response.json(); 

    return data;
}