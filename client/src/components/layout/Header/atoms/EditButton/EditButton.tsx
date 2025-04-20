const EditButton = () => {
	return (
		<button type="button">
			{/* heroicon url:https://heroicons.com/ iconName:ellipsis-horizontal */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="w-9 h-9"
				aria-labelledby="edit-icon-title"
			>
				<title id="edit-icon-title">Edit icon</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
				/>
			</svg>
		</button>
	);
};

export default EditButton;
