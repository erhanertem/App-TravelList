import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(event) {
		event.preventDefault();
		// console.log(event);
		// Guard Clause
		//>Do nothing if there is no description provided
		if (!description) return;

		//>Core Logic of EventHandler
		const newItem = { description, quantity, packed: false, id: Date.now() };
		// console.log(newItem);
		onAddItems(newItem);

		//>Reset States Upon Successfull EventHandling
		setDescription('');
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😀 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{/* <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option> */}
				{Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
