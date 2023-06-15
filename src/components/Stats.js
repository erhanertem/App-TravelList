export default function Stats({ items }) {
	if (!items.length) {
		return (
			<p className="stats">
				<em>Start adding some items to your packaging list ➕</em>
			</p>
		)
	}

	const numItems = items.length
	const numPacked = items.filter(item => item.packed).length
	const percentile = Math.round((numPacked / numItems) * 100)

	return (
		<footer className="stats">
			<em>
				{percentile === 100
					? 'You got everything! Off you go ✈️'
					: `💼 You have ${numItems} items on your list, and you already packed 
				${numPacked} (${percentile}%)`}
			</em>
		</footer>
	)
}
