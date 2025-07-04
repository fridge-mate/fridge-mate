import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import dayjs from "dayjs";
import "react-day-picker/dist/style.css";

type CalendarPopProps = {
	date?: Date;
	setDate: (date: Date | undefined) => void;
};

const CalendarPop: React.FC<CalendarPopProps> = ({ date, setDate }) => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<button type="button" className="border p-2 width: 200px; text-left">
				{date ? format(date, "yyyy-MM-dd") : "Pick a date"}
			</button>
		</DropdownMenuTrigger>
		<DropdownMenuContent className="p-0">
			<DayPicker
				mode="single"
				className="bg-gray-200 rounded-md"
				selected={date}
				onSelect={(d) => setDate(d)}
				modifiers={{
					today: (day) => dayjs(day).isSame(dayjs(), "day"),
				}}
				modifiersClassNames={{
					today: "bg-red-200 rounded-full",
				}}
			/>
		</DropdownMenuContent>
	</DropdownMenu>
);

export default CalendarPop;
