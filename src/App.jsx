import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleDeleteItems() {
		// GUARD CLAUSE - Delete Confirmation
		const confirmed = window.confirm(
			'Are you sure, you want to delete all entries ?'
		);

		// DELETE THE ITEMS IF CONFIRMED
		if (confirmed) {
			setItems([]);
		}
	}

	return (
		<div className="app">
			<Logo />
			<Form
				items={items}
				onAddItem={handleAddItem}
			/>
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onDeleteItems={handleDeleteItems}
			/>
			<Stats items={items} />
		</div>
	);
}
