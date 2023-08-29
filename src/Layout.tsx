import Header from './Header';

interface PropsType {
    children: JSX.Element
}

function Layout(props: PropsType) {
    return (
        <div className="relative w-full h-screen overflow-y-hidden bg-stone-50 text-stone-800">
            <div className="fixed w-full z-50 top-0 bg-stone-50">
                <div className="rounded-b-sm text-stone-300 bg-stone-800 shadow-md shadow-stone-700">
                    <Header />
                </div>
            </div>
            <div className="relative h-screen overflow-y-auto">
                <div className="mt-16">
                    {props.children}
                </div>
            </div>
            <div className="sticky bottom-0 rounded-t-sm bg-stone-50 ">
                <div className="bg-stone-800 text-stone-300">
                    
                </div>
            </div>
        </div>
    )
}

export default Layout;