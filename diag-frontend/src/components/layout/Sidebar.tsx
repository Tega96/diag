import NavLinks from '../ui/NavLinks'

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-96 h-115.6 float-left py-6 gap-10">
            <header>
                <h2 className="">Let's get you set up in just 4 Steps</h2>
                <p className="">We’ll keep it short and simple , just what we need to personalize your experience.</p>
            </header>
            <NavLinks />
            
        </aside>
    )
}
export default Sidebar;