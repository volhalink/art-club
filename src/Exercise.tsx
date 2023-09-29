import { Exercice } from "./contexts/models";

interface ExerciceProps {
    exercise: Exercice
}


function Exercice(props: ExerciceProps) {
    const {exercise} = props;
    return (
        <div className="p-3 border border-stone-200 rounded-lg overflow-hidden">
            <div className="py-2 font-comfortaa font-extrabold tracking-wide">
                {exercise.title}
            </div>
            <div className="py-2">
                {exercise.pictureUrl && <img className="w-28 h-28 md:w-48 md:h-48 float-left object-cover" src={exercise.pictureUrl} alt={exercise.title} /> }
                <p className="shrink">
                    {exercise.description}
                </p>
            </div>
        </div>
    )
}

export default Exercice;