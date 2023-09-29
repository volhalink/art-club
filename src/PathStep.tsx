import Exercice from "./Exercise";
import { usePath } from "./contexts/learning-path-context";

function PathStep() {
  const state = usePath();
    return (
        <div className="p-3">
          <div className="px-3 font-comfortaa font-extrabold tracking-wide">
            {state?.selectedStep?.title}
          </div>
          <div className="px-3 py-3">
            {state?.selectedStep?.description}
          </div>
          {state?.selectedStep?.exercises && state?.selectedStep?.exercises.map(e => <div className="m-2" key={e.id}><Exercice exercise={e} /></div>)}
        </div>
    )
  }

export default PathStep;