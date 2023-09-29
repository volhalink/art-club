import LearningPathCard from "./LearningPathCard";
import Path from "./Path";
import { useLearning } from "./contexts/learning-context";
import { usePath, usePathDispatch } from "./contexts/learning-path-context";

function PathList() {
    const learning = useLearning();
    const path = usePath();
    const pathDisp = usePathDispatch();

    const onClick = () => {
        if(pathDisp){
            pathDisp({
                type: "deselect-path",
            })
        }
    }

    return (
        <div>
            {path?.selectedLearningPath ? <div>
                <div className="flex">
                    <div className="mx-2 flex-grow-0 flex-shrink-0">
                        <button onClick={onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    <div>{path?.selectedLearningPath.title}</div>
                </div>
                <Path />
            </div>
            : <div>
                {learning?.learningPathes.map((lp) =><LearningPathCard learningPath={lp} />)}
            </div>
            }
        </div>
    );
}

export default PathList;
