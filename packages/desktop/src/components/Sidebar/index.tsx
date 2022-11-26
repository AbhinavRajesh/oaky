import SidebarButton from "./button";

const Sidebar = () => {
    const sidebarMenuItems: { name: string, icon?: string }[] = [
        {
            name: "Create Playlist"
        },
        {
            name: "Import songs"
        }
    ]
    
    return (
        <div className="flex flex-col max-w-[200px] w-full p-[20px] h-screen border-r border-gray-800">
            <div className="flex items-center justify-start">
                <img src="/logo.svg" alt="Oaky" height={20} className="h-[20px]" />
                <h1 className="font-bold text-[14px] ml-[10px]">Oaky</h1>
            </div>
            <div className="mt-[20px] space-y-[4px]">
                {sidebarMenuItems.map(({ name, icon }, key) => (
                    <SidebarButton name={name} icon={icon} key={key} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;