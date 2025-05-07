function SearchBar() {
	return (
		<div className="flex justify-center gap-x-3 border border-black p-3">
			{/* heroicon url:https://heroicons.com/ iconName:magnifying-glass */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="w-7 h-7"
			>
				<title id="icon-title">Serch icon</title>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>
			<input
				type="text"
				placeholder="請輸入"
				className="text-center border border-black text-sm w-[200px]"
			/>
		</div>
	);
}

export default SearchBar;
