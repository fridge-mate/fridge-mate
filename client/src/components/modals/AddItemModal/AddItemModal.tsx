import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/atoms/Button";
import QuantityBadge from "@/components/atoms/QuantityBadge";
import CategorySelector from "@/components/atoms/CategorySelector";
import { useState } from "react";
import type { GenreSelectorKey } from "@/types/genre";

type AddItemModalProps = {
	isOpen: boolean;
	onClose: () => void;
};
type FormValues = {
	category: GenreSelectorKey;
	itemImage: FileList;
};

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose }) => {
	const [preview, setPreview] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		// formState: { errors },
		control,
	} = useForm<FormValues>({
		defaultValues: {
			category: "all",
		},
	});
	const onSubmit = () => {
		console.log();
	};
	// const [categoryState, setCategoryState] = useState<GenreSelectorKey>("all");
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent
				className="bg-white p-0 rounded-xl w-[90%]"
				showCloseButton={false}
			>
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
										onChange={(e) => {
											const file = e.target.files?.[0];
											if (file) {
												setPreview(URL.createObjectURL(file));
											}
										}}
									/>
								</div>
							</div>
							<div className="w-1/2 p-3 pr-10 flex flex-col  items-center justify-around py-6">
								{/* <Label genreKey="fruit" className="text-base px-4" /> */}
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
								{/* <h2 className="text-3xl">TEST</h2> */}
								<input
									type="text"
									placeholder="商品名字"
									className="bg-slate-100 placeholder:text-lg p-1 border border-black rounded-lg"
								/>
							</div>
						</div>
						<div className="border border-black rounded-xl">
							<div className="py-6 px-6 text-xl">
								{/* <p>賞味期限</p> */}
								<input type="text" placeholder="賞味期限" className="" />
								<div className="flex items-center justify-between text-xl">
									<p>test</p>
									{/* <ExpirationBadge daysLeft={2} className=" text-base" /> */}
								</div>
							</div>
							<div className="flex justify-between border-t border-black py-6 px-6 text-xl">
								<p>數量</p>
								<QuantityBadge count={3} size="lg" />
							</div>
							<div className="flex flex-col gap-2 border-t border-b border-black py-6 px-6">
								<p>Memo</p>
								<textarea
									placeholder="請輸入"
									className="w-full h-10 border border-black placeholder-gray-400 text-lg text-center leading-9"
								/>
							</div>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<div className="flex justify-around p-3">
								<Button
									text="SAVE"
									onClick={() => console.log("Save")}
									className="w-full border-none text-lg"
								/>
							</div>
						</DialogClose>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddItemModal;
