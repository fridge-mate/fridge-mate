type QuantityBadgeProps = {
<<<<<<< HEAD
	count: number;
};

function QuantityBadge({ count }: QuantityBadgeProps) {
	return (
		<div className="flex items-center space-x-1">
			<button>▲</button>
			<span className=" text-black text-xs font-semibold px-2 py-1">
				Quantity: {count}
			</span>
			<button>▼</button>
		</div>
	);
}

export default QuantityBadge;
=======
  count:number
}

function QuantityBadge({count}:QuantityBadgeProps) {
  return (
    <div className="flex items-center space-x-1">
      <button>▲</button>
      <span className=" text-black text-xs font-semibold px-2 py-1">
        Quantity: {count}
      </span>
      <button>▼</button> 
    </div>
  )
}

export default QuantityBadge
>>>>>>> dab80a7 (feat(ui): add QuantityBadge component and refine Label design)
