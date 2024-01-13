import { useState } from 'react';
import Item from './Item';

export default function PackingList({
	itemsArr,
	onDeleteItem,
	onToggleItems,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;
	if (sortBy === 'input') sortedItems = itemsArr;
	if (sortBy === 'description')
		sortedItems = [...itemsArr].sort((a, b) =>
			a.description.localeCompare(b.description),
		);
	if (sortBy === 'packed')
		sortedItems = [...itemsArr].sort(
			(a, b) => Number(a.packed) - Number(b.packed),
		);

	// console.log(itemsArr);
	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItems={onToggleItems}
						key={item.id}
					/>
				))}
			</ul>

			<div className="actions">
				<select
					value={sortBy}
					onChange={(event) => setSortBy(event.target.value)}
				>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
}
