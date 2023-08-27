
import { useState } from "react";
import { Locale, useLocale, useLocaleDispatch } from "./locale-context";

function Language() {
    const locale = useLocale();
    const desp = useLocaleDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = () => { setIsOpen(!isOpen); };
    const closeButtonClick = () => { setIsOpen(false); };
    const selectLanguage = (l: Locale) => {
        desp && desp({
            locale: l
        })
    }
    return (
        <div className="relarive">
            <div title="Choose a language" className="text-stone-400 hover:text-stone-300 w-6 h-6">
                <button onClick={toggleButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                </button>
                { isOpen && <button onClick={closeButtonClick} tabIndex={-1} className="fixed z-10 inset-0 h-full w-full bg-stone-300 opacity-50 cursor-default"></button> }
            </div>
            <div>
                { isOpen && <div onClick={closeButtonClick} className="absolute z-10 right-1 mt-2 w-32 p-3 font-comfortaa font-thin bg-stone-800 text-stone-400 rounded-lg shadow-xl">
                    <div className={locale === "be"? "font-semibold text-stone-300" : ""}><button onClick={() => selectLanguage("be")}>Беларуская</button></div>
                    <div className={locale === "ru"? "font-semibold text-stone-300" : ""}><button onClick={() => selectLanguage("ru")}>Русский</button></div>
                </div> }
            </div>
        </div>
    );
}

export default Language;