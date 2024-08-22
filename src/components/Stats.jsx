export default function Stats({ items }) {
	// DERIVED STATE - EACH RE-RENDER TRIGGERS RE-CALC OF THIS CONST
	const numItems = items.length;

	if (!numItems) {
		return (
			<footer className="stats">
				<em>👋 Please try to collect some items for your luggage</em>;
			</footer>
		);
	}

	// Calculate the percentage of items packed here and pass it to the footer component
	const packedItems = items.filter((item) => item.packed).length;
	const packedPercentage = Math.round((packedItems / numItems) * 100);

	return (
		<footer className="stats">
			{numItems > 0 && packedPercentage < 100 ? (
				<em>
					💼 You have {numItems} items on your list, and you have already
					packed {packedItems}({packedPercentage}%)
				</em>
			) : (
				<em>You got everything! Ready to go ✈️</em>
			)}
		</footer>
	);
}
