import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import dayjs from "dayjs";

const CalendarPop = () => {
	const [date, setDate] = useState<Date>();
	return (
		<div>
			<Popover>
				<PopoverTrigger asChild>
					<button
						type="button"
						className="border rounded p-2 w-[200px] text-left"
					>
						{date ? format(date, "yyyy-MM-dd") : "Pick a date"}
					</button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						modifiers={{
							today: (day) => dayjs(day).isSame(dayjs(), "day"),
						}}
						modifiersClassNames={{
							today: "bg-red-200 rounded-full",
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CalendarPop;
