const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return (
        <button {...props} className={`font-medium px-[20px] py-[7px] rounded-[6px] bg-gray-800 hover:bg-gray-900 duration-150 transition-all ease-in disabled:opacity-50 disabled:hover:bg-gray-800 disabled:cursor-not-allowed ${props.className}`} />
    );

}

export default Button;