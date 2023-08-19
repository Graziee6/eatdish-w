export default function Dashboard(){
    return (
        <div className="flex h-screen bg-white p-0">
        <div className="flex-none w-1/6 p-10">
            <img src="../../public/assets/eatdish-logo.png" alt="eatdish-logo"/>
        </div>
        <div className="flex-none w-3/6  bg-slate-200 p-10">
            <div className="search"></div>
            <div className="header flex bg-amber-500 p-8 text-white rounded-xl">
                <div className="w-3/4">
                <h2 className="capitalize">add your own recipe</h2>
                <p>upload your own home-made recipe...</p>
                </div>
                <div></div>
            </div>
        </div>
        <div className="flex-none w-2/6"></div>
        </div>
    )
}