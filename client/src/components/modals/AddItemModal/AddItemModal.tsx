import { useEffect, useState } from "react";
import type { GenreSelectorKey } from "@/types/genre";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { useForm, Controller } from "react-hook-form";
import CalendarPop from "@/components/modals/CalendarPop";
import Button from "@/components/atoms/Button";
import QuantityBadge from "@/components/atoms/QuantityBadge";
import CategorySelector from "@/components/atoms/CategorySelector";
import dayjs from "dayjs";

type AddItemModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

type FormValues = {
	category: GenreSelectorKey;
	itemImage: FileList;
	itemName: string;
	expiryDate?: Date;
	quantity: number;
	memo: string | null;
};

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose }) => {
	// const [date, setDate] = useState<Date>();
	const [preview, setPreview] = useState<string | null>(null);
	const [count, setCount] = useState(0);

	const { register, handleSubmit, control, reset } = useForm<FormValues>({
		defaultValues: {
			category: "all",
			quantity: 0,
			itemName: "",
			expiryDate: dayjs().toDate(),
			memo: "",
		},
	});

	useEffect(() => {}, []);

	const onSubmit = (data: FormValues) => {
		console.log("FormValues :", data);
	};

	//closeと同時に全ての入力値のstateも消去
	const handleModalAllClear = () => {
		setPreview(null);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleModalAllClear}>
			<DialogContent
				className="bg-white p-0 rounded-xl w-[90%]"
				showCloseButton={false}
			>
				<DialogClose asChild>
					<button
						type="button"
						className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200"
						onClick={() => onClose()}
						aria-label="Close"
					>
						×
					</button>
				</DialogClose>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="p-4">
						<div className="flex py-6">
							<div className="w-1/2 h-auto flex justify-start ml-2">
								<div
									// biome-ignore lint/a11y/useSemanticElements: <explanation>
									role="button"
									tabIndex={0}
									className="w-[100px] h-[100px] border border-black flex items-center justify-center cursor-pointer"
									onClick={() => document.getElementById("fileInput")?.click()}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											console.log("clicked");
										}
									}}
								>
									{preview ? (
										<img
											src={preview}
											alt="preview"
											className="w-full h-full object-cover"
										/>
									) : (
										<span className="text-gray-500 text-sm">
											Click to upload
										</span>
									)}
									<input
										{...register("itemImage", {
											onChange: (e) => {
												const file = e.target.files?.[0];
												if (file) {
													setPreview(URL.createObjectURL(file));
												}
											},
										})}
										id="fileInput"
										type="file"
										accept="image/*"
										className="hidden"
									/>
								</div>
							</div>
							<div className="w-1/2 p-3 pr-10 flex flex-col items-center justify-around py-6">
								<div className="mb-3">
									<Controller
										name="category"
										control={control}
										render={({ field }) => (
											<CategorySelector
												state={field.value}
												setState={field.onChange}
											/>
										)}
									/>
								</div>
								<input
									{...register("itemName")}
									type="text"
									placeholder="商品名字"
									className="bg-slate-100 placeholder:text-lg p-1 border border-black rounded-lg"
								/>
							</div>
						</div>
						<div className="border border-black rounded-xl mt-4">
							<div className="flex flex-row py-6 px-6 text-xl">
								<p>賞味期限</p>
								<div className="flex flex-row justify-around items-center gap-4 mt-2">
									選択日付:
									<Controller
										name="expiryDate"
										control={control}
										render={({ field }) => (
											<CalendarPop
												date={field.value}
												setDate={field.onChange}
											/>
										)}
									/>
								</div>
							</div>
							<div className="flex justify-between border-t border-black py-6 px-6 text-xl">
								<p>數量</p>
								<Controller
									name="quantity"
									control={control}
									render={({ field }) => (
										<QuantityBadge
											count={field.value}
											setCount={field.onChange}
											size="lg"
										/>
									)}
								/>
							</div>
							<div className="flex flex-col gap-2 border-t border-b border-black py-6 px-6">
								<p>Memo</p>
								<textarea
									{...register("memo")}
									placeholder="請輸入"
									className="w-full h-10 border border-black placeholder-gray-400 text-lg text-center leading-9"
								/>
							</div>
						</div>
					</div>
					<DialogFooter>
						<div className="flex justify-around p-3">
							<Button
								text="SAVE"
								type="submit"
								className="w-full border-none text-lg"
							/>
						</div>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddItemModal;
