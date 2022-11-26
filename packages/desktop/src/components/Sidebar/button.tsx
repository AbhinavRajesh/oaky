interface Props {
    name: string;
    icon?: any
}

const SidebarButton = ({ name, icon }: Props) => {
    return (
        <button className="w-full rounded-[6px] text-left px-[8px] py-[5px] text-[14px] hover:bg-black transition-all duration-300 ease-in">
            {icon && (
                <img src={icon} className="h-[16px] w-[16px] mr-[10px]" height={16} width={16} />
            )}
            {name}
        </button>
    );
}

export default SidebarButton;