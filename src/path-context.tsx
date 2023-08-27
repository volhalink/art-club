import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { useLocale } from './locale-context';
import { loadLocalizedStepsAsync } from './content-service';

export type StepType =  "start" | "read" | "practice";

export interface Exercice {
    id: string,
    title: string,
    description: string,
    pictureUrl?: string,
}
export interface Step {
    id: string,
    title: string,
    description: string,
    type: StepType,
    exercises?: Exercice[]
}

interface PathState {
    steps: Step[]
    selectedStep: Step | null
}

export type PathStateDispatchAction = "select" | "deselect" | "load";

export interface PathStateDispatch {
    type: PathStateDispatchAction,
    data?: Step | Step[]
}

interface PropsType {
    children: JSX.Element
}

const PathContext = createContext<PathState | null>(null);
const PathDispatchContext = createContext<Dispatch<PathStateDispatch> | null>(null);


export function PathStateProvider(props: PropsType) {
    const locale = useLocale();
    const [pathState, pathDispatch] = useReducer(
        pathReducer,
        {
            steps: [],
            selectedStep: null
        }
    );

    useEffect(() => {
        (async function fetchData(){
            const s = await loadLocalizedStepsAsync(locale);
            pathDispatch({
                type: "load",
                data: s
            });
        })();
    }, [locale])

    console.log("PathStateProvider pathState", pathState);
    return (
        <PathContext.Provider value={pathState}>
            <PathDispatchContext.Provider value={pathDispatch}>
            <div data-testid="path-state-provider">
                {props.children}
            </div>
            </PathDispatchContext.Provider>
        </PathContext.Provider>
    );
}

export function usePath() {
    return useContext(PathContext);
}

export function usePathDispatch() {
    return useContext(PathDispatchContext);
}

function pathReducer(oldState: PathState, action: PathStateDispatch) : PathState {
    switch (action.type) {
        case "select": {
            const selectedStep = action.data as Step;
            return  selectedStep?  {
                ...oldState,
                selectedStep: selectedStep
            } : oldState;
        }
        case "deselect":
            return  {
                ...oldState,
                selectedStep: null
            };
        case "load": {
            const steps = action.data as Step[];
            return {
                steps: steps,
                selectedStep: oldState.selectedStep? steps.find((v) => v.id === oldState.selectedStep?.id) ?? null : null
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}