import {
	Select as ShadSelect,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

type Option<T extends string> = {
	value: T;
	label: string;
};

type CustomSelectProps<T extends string> = {
	value: T;
	onChange: (value: T) => void;
	placeholder?: string;
	options: Option<T>[];
	className?: string;
};

const Select = <T extends string>({
	value,
	onChange,
	placeholder = "Please Select",
	options,
	className = "w-[200px] py-1",
}: CustomSelectProps<T>) => {
	return (
		<ShadSelect value={value} onValueChange={onChange}>
			<SelectTrigger className={className}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className="bg-white">
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
