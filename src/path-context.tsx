import { Dispatch, createContext, useContext, useReducer } from 'react';

export type StepType =  "start" | "read" | "practice";

export interface Step {
    id: number,
    name: string,
    description: string,
    isInProgress: boolean,
    type: StepType,
}

interface PathState {
    steps: Step[],
    selectedStep: Step | null
}

export type PathStateDispatchAction = "select" | "deselect";

export interface PathStateDispatch {
    type: PathStateDispatchAction,
    data?: Step
}

interface PropsType {
    steps: Step[],
    children: JSX.Element
}

const PathContext = createContext<PathState | null>(null);
const PathDispatchContext = createContext<Dispatch<PathStateDispatch> | null>(null);


export function PathStateProvider(props: PropsType) {
    const initialState = {
        steps: props.steps,
        selectedStep: null
    };
    const [pathState, pathDispatch] = useReducer(
        pathReducer,
        initialState
    );

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
    const selectedStep = action.data as Step;
    switch (action.type) {
        case "select":
            return  selectedStep?  {
                ...oldState,
                selectedStep: selectedStep
            } : oldState;
        case "deselect":
            return  {
                ...oldState,
                selectedStep: null
            };
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}