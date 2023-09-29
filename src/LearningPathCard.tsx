import { usePathDispatch } from "./contexts/learning-path-context";
import { LearningPath } from "./contexts/models";

interface PropsType {
    learningPath: LearningPath
}

function LearningPathCard(props: PropsType) {
    const {learningPath} = props;
    const disp = usePathDispatch();
    const onClick = () => {
        disp && disp({
            type: "select-path",
            data: learningPath
        })
    }

    return (
        <div key={learningPath.language + learningPath.id} className="m-3 rounded-md border border-stone-200 w-60 h-40">
            <button onClick={onClick} className="w-full h-full">
                <div className="p-3 w-full h-full">
                    <div className="text-center font-comfortaa text-lg tracking-wide font-semibold">{learningPath.title}</div>
                    <div className="mx-7 my-2 w-40 border border-t-0 border-l-0 border-r-0 border-b-stone-200 text-sm tracking-wide"></div>
                    <div>{learningPath.description}</div>
                </div>
            </button>
        </div>
    );
}

export default LearningPathCard;
