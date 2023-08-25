import Langage from './Language';

function Header() {
    return (
        <header className="p-3" >
            <div className="flex items-center justify-between">
                <div className="font-bold uppercase tracking-widest">Art club</div>
                <Langage/>
            </div>
        </header>
    )
}

export default Header;