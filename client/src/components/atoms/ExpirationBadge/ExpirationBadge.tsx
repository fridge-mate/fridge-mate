type ExpirationBadgeProps = { daysLeft: number };

const ExpirationBadge: React.FC<ExpirationBadgeProps> = ({ daysLeft }) => {
	let text = "";
	let bgColor = "";

	if (daysLeft < 0) {
		text = `已過期 ${Math.abs(daysLeft)} 天`;
		bgColor = "text-red-500 font-semibold";
	} else if (daysLeft === 0) {
		text = "今天到期";
		bgColor = "text-red-400 font-medium";
	} else {
		text = `剩下 ${daysLeft} 天`;
		bgColor = "text-black";
	}

	return <p className={`${bgColor} px-2 py-1 text-sm `}>{text}</p>;
};

export default ExpirationBadge;
