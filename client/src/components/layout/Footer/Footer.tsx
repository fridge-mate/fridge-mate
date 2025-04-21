import Button from "@/components/atoms/Button/Button";

const Footer = () => {
	return (
		<footer className="flex justify-around p-4 border border-black">
			<Button text="HOME" onClick={() => console.log("clicked")} />
			<Button text="SERCH" onClick={() => console.log("clicked")} />
			<Button text="SETTING" onClick={() => console.log("clicked")} />
		</footer>
	);
};

export default Footer;
