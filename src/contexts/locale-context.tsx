import { Dispatch, createContext, useContext, useReducer } from 'react';
import { Locale } from '../services/l10n';

export interface LocaleDispatch {
    locale: Locale
}

interface PropsType {
    locale: Locale,
    children: JSX.Element
}

const LocaleContext = createContext<Locale>("be");
const LocaleDispatchContext = createContext<Dispatch<LocaleDispatch> | null>(null);

export function LocaleProvider(props: PropsType) {
    const initialState = props.locale;
    function localeReducer(oldState: Locale, action: LocaleDispatch) : Locale {
        return action.locale
    }

    const [localeState, localeDispatch] = useReducer(
        localeReducer,
        initialState
    );

    return (
        <LocaleContext.Provider value={localeState}>
            <LocaleDispatchContext.Provider value={localeDispatch}>
            <div data-testid="locale-provider">
                {props.children}
            </div>
            </LocaleDispatchContext.Provider>
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}

export function useLocaleDispatch() {
    return useContext(LocaleDispatchContext);
}