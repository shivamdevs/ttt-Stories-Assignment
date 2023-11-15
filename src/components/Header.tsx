import FlatButton from './FlatButton';

function Header() {
    return (
        <header className="bg-[#111] text-white">
            <div className="mx-auto w-full max-w-4xl flex flex-nowrap justify-between px-7 py-3">
                <span className="inline-flex flex-nowrap items-center gap-2">
                    <img src="https://www.terriblytinytales.com/img/home/ttt.svg" width={40} height={40} alt="" className="w-8" />
                    <span className="h-full w-[2px] bg-[#58461E]"></span>
                    <span className="tracking-widest font-bold">STORIES</span>
                </span>
                <FlatButton>Courses</FlatButton>
            </div>
        </header>
    )
}

export default Header;