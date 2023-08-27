import PathButton from "./PathButton";
import PathStep from "./PathStep";
import { usePath, usePathDispatch } from "./path-context";

function Path() {
   const pathState = usePath();
   console.log("Path", pathState?.steps);
   const desp = usePathDispatch();
   const deselect = () => {
    desp && desp({
      type: "deselect"
    });
   }
    return (
        <div>
          <div className="md:hidden mt-3">
            {
              pathState?.selectedStep?
                <div className="w-full">
                  <div className="mt-2 ml-2">
                    <button className="text-stone-700" onClick={deselect}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <PathStep />
                  </div>
                </div>
              : <div className="ml-2 flex justify-center">
                  <div>
                    {pathState?.steps.map(s => <div key={s.id} className="even:ml-5 sm:even:ml-10"><PathButton step={s} /></div>)}
                  </div>
                </div>
            }
        </div>
        <div className="hidden md:grid md:grid-cols-3 justify-start md:ml-3 md:mt-3">
            <div className="col-span-1">
              {
              pathState?.steps.map(s => <div key={s.id} className="even:ml-10"><PathButton step={s} /></div>) 
              }
            </div>
            <div className="m-5  col-span-2">
              {pathState?.selectedStep && 
                <div className="p-3 border border-stone-300 rounded-lg">
                  <div className="w-full flex justify-end text-stone-400">
                  <div>
                    <button className="hover:text-stone-800" onClick={deselect}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                  </div>
                  </div>
                  <div>
                    <PathStep />
                  </div>
                </div>} 
            </div>
        </div>
        </div>
    )
  }

export default Path;