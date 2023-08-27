import { Locale } from "./locale-context";
import { Step } from "./path-context";
import data from './data';

export const loadLocalizedStepsAsync = async (locale: Locale): Promise<Step[]>  => {
    return data[locale].steps;
}