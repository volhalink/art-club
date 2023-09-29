import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { loadLocalizedLearningPathAsync } from '../services/content-service';
import { LearningPath, Step } from './models';
import { useLearningDispatch } from './learning-context';

interface PathState {
    selectedLearningPath: LearningPath | null,
    selectedStep: Step | null
}

export type PathStateDispatchAction =  "select-path" |  "deselect-path" | "select-step" | "deselect-step";

export interface PathStateDispatch {
    type: PathStateDispatchAction,
    data?: Step | LearningPath
}

interface PropsType {
    children: JSX.Element
}

const PathContext = createContext<PathState | null>(null);
const PathDispatchContext = createContext<Dispatch<PathStateDispatch> | null>(null);


export function PathStateProvider(props: PropsType) {
    const learningDispatch = useLearningDispatch();
    const [pathState, pathDispatch] = useReducer(
        pathReducer,
        {
            selectedLearningPath: null,
            selectedStep: null
        }
    );

    useEffect(() => {
        (async function fetchData(){
            if(pathState.selectedLearningPath && !pathState.selectedLearningPath?.steps)
            {
                const lp = await loadLocalizedLearningPathAsync(pathState.selectedLearningPath.language, pathState.selectedLearningPath.id);
                if(lp && learningDispatch){
                    learningDispatch({
                        type: "load-detailed",
                        data: lp
                    })
                    pathDispatch({
                        type: "select-path",
                        data: lp
                    })
                }
            }
        })();
    }, [pathState.selectedLearningPath])

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
        case "select-step": {
            const selectedStep = action.data as Step;
            return  selectedStep?  {
                ...oldState,
                selectedStep: selectedStep
            } : oldState;
        }
        case "deselect-step":
            return  {
                ...oldState,
                selectedStep: null
            };
        case "select-path": {
            const path = action.data as LearningPath;
            return {
                ...oldState,
                selectedLearningPath: path,
                selectedStep: oldState.selectedStep && path ? path.steps?.find(s => s.id === oldState.selectedStep?.id) ?? null : null
            }
        }
        case "deselect-path": {
            return {
                ...oldState,
                selectedLearningPath: null,
                selectedStep: null
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}