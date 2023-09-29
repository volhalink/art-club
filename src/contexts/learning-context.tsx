import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { useLocale } from './locale-context';
import { loadLocalizedLearningPathesListAsync } from '../services/content-service';
import { LearningPath, Step } from './models';

interface LearningState {
    learningPathes: LearningPath[],
}

export type LearningStateDispatchAction = "load-all" | "load-detailed";

export interface LearningStateDispatch {
    type: LearningStateDispatchAction,
    data?: Step | LearningPath | LearningPath[]
}

interface PropsType {
    children: JSX.Element
}

const LearningContext = createContext<LearningState | null>(null);
const LearningDispatchContext = createContext<Dispatch<LearningStateDispatch> | null>(null);


export function LearningStateProvider(props: PropsType) {
    const locale = useLocale();
    const [learningState, learninDispatch] = useReducer(
        learningReducer,
        {
            learningPathes: []
        }
    );

    useEffect(() => {
        (async function fetchData(){
            console.log("path-context useEffect");
            const lps = await loadLocalizedLearningPathesListAsync(locale); 
            learninDispatch({
                type: "load-all",
                data: lps ? lps : []
            });
        })();
    }, [locale])

    return (
        <LearningContext.Provider value={learningState}>
            <LearningDispatchContext.Provider value={learninDispatch}>
            <div data-testid="learning-state-provider">
                {props.children}
            </div>
            </LearningDispatchContext.Provider>
        </LearningContext.Provider>
    );
}

export function useLearning() {
    return useContext(LearningContext);
}

export function useLearningDispatch() {
    return useContext(LearningDispatchContext);
}

function learningReducer(oldState: LearningState, action: LearningStateDispatch) : LearningState {
    switch (action.type) {
        case "load-all": {
            const pathes = action.data as LearningPath[];
            return {
                ...oldState,
                learningPathes: pathes,
            }
        }
        case "load-detailed": {
            const learningPath = action.data as LearningPath;
            return {
                ...oldState,
                learningPathes: oldState.learningPathes.map((lp) => {
                    return lp.id === learningPath.id && lp.language == learningPath.language? learningPath : lp;
                }),
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}