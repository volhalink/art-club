import Header from './Header';

interface PropsType {
    children: JSX.Element
}

function Layout(props: PropsType) {
    return (
        <div className="relative w-full min-h-screen bg-stone-50 text-stone-800">
            <div className="sticky z-50 top-0 bg-stone-50">
                <div className="rounded-b-sm text-stone-300 bg-stone-800 shadow-md shadow-stone-700">
                    <Header />
                </div>
            </div>
            <div className="relative">
                {props.children}
            </div>
            <div className="sticky bottom-0 rounded-t-sm bg-stone-50 ">
                <div className="bg-stone-800 text-stone-300">
                    
                </div>
            </div>
        </div>
    )
}

export default Layout;