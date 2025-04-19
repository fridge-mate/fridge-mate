import {
	Select as ShadSelect,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

type Option = {
	value: string;
	label: string;
};

type CustomSelectProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	options: Option[];
	className?: string;
};

const Select: React.FC<CustomSelectProps> = ({
	value,
	onChange,
	placeholder = "選択してください",
	options,
	className = "w-[200px]",
}) => {
	return (
		<ShadSelect value={value} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{options.map((opt) => (
					<SelectItem key={opt.value} value={opt.value}>
						{opt.label}
					</SelectItem>
				))}
			</SelectContent>
		</ShadSelect>
	);
};

export default Select;
