import { useState } from 'react';
import Logo from './Logo';
import Stats from './Stats';
import Form from './Form';
import PackingList from './PackingList';

// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: false },
// 	{ id: 3, description: 'Charger', quantity: 1, packed: true },
// ];

export default function App() {
	//This state is used in the Form Component to write on the registred items array, but the afrray is rendered in the packinglist component. Since its a shared state and both components make use of the same state, then we have to move this state to parenting top component to prop it down to these two components.
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	}

	function handleClearList() {
		const confirmed = window.confirm(
			'Are you sure you want to delete all items?',
		);
		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				itemsArr={items}
				onDeleteItem={handleDeleteItem}
				onToggleItems={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats itemsArr={items} />
		</div>
	);
}
