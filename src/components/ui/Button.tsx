const Button = ({
	children,
	className = '',
	onClick,
	type = 'button',
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`py-1 px-10 bg-[#5E4B8B] rounded-sm text-sm font-semibold text-white ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
