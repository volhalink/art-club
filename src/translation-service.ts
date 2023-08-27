import { Locale } from "./locale-context";

const be = {
    "Art club": "Творчы клуб",
}

const ru = {
    "Art club": "Творческий клуб",
}

export const translate = (key: string, locale: Locale) => {
    switch (locale) {
        case "be":
            return be[key as keyof typeof be];
        case "ru":
            return ru[key as keyof typeof ru];
        default: return key;
    }
}
