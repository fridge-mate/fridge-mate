type ButtonProps = {
	text: string;
	onClick: () => void;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
	const baseStyle =
		"px-4 py-2 border border-black rounded-full text-sm font-semibold transition-colors";

	return (
		<button
			type="button"
			onClick={onClick}
			className={`${baseStyle} ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
