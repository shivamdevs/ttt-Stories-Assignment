import { Link } from 'react-router-dom';
import FlatButton from './FlatButton';

function Header() {
    return (
        <header className="bg-[#111] text-white sticky top-0">
            <div className="mx-auto w-full max-w-4xl flex flex-nowrap justify-between p-3">
                <Link to="/" className="text-white hover:no-underline inline-flex flex-nowrap items-center gap-2">
                    <img src="/images/ttt.svg" width={40} height={40} alt="" className="w-8" />
                    <span className="h-full w-[2px] bg-[#58461E]"></span>
                    <span className="tracking-widest font-bold">STORIES</span>
                </Link>
                <FlatButton onClick={() => window.open(`https://learn.terriblytinytales.com/#explore`)}>Courses</FlatButton>
            </div>
        </header>
    )
}

export default Header;