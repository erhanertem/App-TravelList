export default function Stats({ itemsArr }) {
	//Guard Clause
	if (!itemsArr.length)
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</footer>
		);

	const numItems = itemsArr.length;
	const numPacked = itemsArr.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? 'You got everything packed! Ready to go ✈️'
					: `💼 You have ${numItems} items on your list, and you already packed
				${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
}
