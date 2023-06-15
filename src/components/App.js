import { useState } from 'react'

import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Charger', quantity: 1, packed: false },
]

export default function App() {
	const [items, setItems] = useState(initialItems)

	function handleAddItems(item) {
		setItems(items => [...items, item])
	}

	function handleDeleteItem(id) {
		setItems(items => items.filter(item => item.id !== id))
	}

	function handleToggleItem(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		)
	}

	function handleClearList() {
		if (!items.length) return
		const confirm = window.confirm('Are you sure you  wanna delete all items')
		if (confirm) setItems([])
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	)
}
