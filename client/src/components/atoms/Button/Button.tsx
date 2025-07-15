import { twMerge } from "tailwind-merge";

type ButtonProps = {
	text: string;
	onClick?: () => void;
	className?: string;
	type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	className = "",
	type,
}) => {
	const baseStyle =
		"px-4 py-2 border border-black rounded-full text-sm font-semibold transition-colors";

	return (
		<button
			type={type || "button"}
			onClick={onClick}
			className={twMerge(baseStyle, className)}
		>
			{text}
		</button>
	);
};

export default Button;
