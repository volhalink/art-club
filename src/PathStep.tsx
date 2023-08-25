import { usePath, usePathDispatch } from "./path-context";

function PathStep() {
  const state = usePath();
    return (
        <div>
          {state?.selectedStep?.description}
        </div>
    )
  }

export default PathStep;