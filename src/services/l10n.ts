const Belarusian = {
    locale: "be",
    translations: {
        "Art club": "Творчы клуб",
    }
} as Language;

const Russian = {
    locale: "ru",
    translations: {
        "Art club": "Творческий клуб",
    }
} as Language;

export type Locale = "be" | "ru";
export interface Language {
    locale: Locale,
    translations: object
}

const SupportedLanguages = {
    "be": Belarusian,
    "ru": Russian
}

export const translate = (key: string, locale: Locale) => {
    const lang = SupportedLanguages[locale as keyof typeof SupportedLanguages]; 
    let translation = key;
    if (lang) {
        const t = lang.translations[key as keyof typeof lang.translations];
        if(t){
            translation = t;
        }
    }
    return translation;
}