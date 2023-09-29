import Langage from './Language';
import { useLocale } from './contexts/locale-context';
import { translate } from './services/l10n';

function Header() {
    const locale = useLocale();
    const title = translate("Art club", locale);
    return (
        <header className="pt-5 pb-3 px-5" >
            <div className="flex items-center justify-between">
                <div className="font-comfortaa font-bold uppercase tracking-widest">{title}</div>
                <Langage/>
            </div>
        </header>
    )
}

export default Header;