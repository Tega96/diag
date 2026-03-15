
// const NAVLINKS = [
//     {id: 1, link: 'Create Your Account', href: '#'},
//     {id: 2, link: 'Tell Us About You', href:'#'},
//     {id: 3, link: 'Set Up Your Workspace', href:'#'},
//     {id: 4, link: 'Choose Your Focus', href:'#'}
// ]

// interface NavLinksProps {
//     id: Number;
//     link: String;
//     href: String;
// }
const NavLinks = () => {
    const active = true;
    return (
        <div>
            {/* {NAVLINKS.map(({id, href, link}: NavLinksProps) => ( */}
            <div className="">
                <div 
                    className={`flex flex-row items-center gap-2 w-78 h-8` }
                    key="1"
                >
                    <div 
                        className={`flex flex-col justify-center items-center w-8 h-8 rounded-full p-4 gap-2 ${active ? 'bg-[#4F46E5] text-white' : 'bg-[#F9FAFB] border'}`}
                    >
                        <p className="font-semibold text-3.5">1</p>
                    </div>
                    <ul>
                        <li className="">
                            <a href="http.google.com" 
                                className={`font-medium text-3.5 ${active ? 'text-[#4F46E5]' : 'text-primary'}`}
                            >Come and visit Your me</a>
                        </li>
                    </ul>
                    {/* {
                        !NAVLINKS[3] ? <div></div> : <div>|</div>
                    } */}
                </div>
                <div className="flex flex-col w-96 h-10 px-4 py-2 gap-2">
                    <div className={`w-0 h-6 border ${active ? 'border-blue-500' : 'border-primary'}`}></div>
                </div>
            </div>
                
            {/* // ))} */}
        </div>
    )
}

export default NavLinks;