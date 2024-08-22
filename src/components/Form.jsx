import { useState } from 'react';

export default function Form({ onAddItem }) {
	// #1. PROVIDE REACT STATES FOR THE DATA SUBMITTED BY THE FORM
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		// GUARD CLAUSE - AVOID BLANK SUBMISSION
		if (!description) return;

		// #5. CREATE THE ITEM FROM THE PROVIDED DATA
		const newItem = { description, quantity, packed: false, id: Date.now() };
		// #6. ADD THE NEW ITEM TO THE ITEMS ARRAY
		onAddItem(newItem);

		// #7. RESET STATES AFTER SUBMISSION
		setDescription('');
		setQuantity(1);
	}

	return (
		<form
			className="add-form"
			// #4. HANDLE SUBMISSIO NOT FROM THE BUTTON BUT FROM THE FORM ELEMENT TO RULE THEM ALL
			onSubmit={handleSubmit}
		>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				// #2. USE STATE VALUE
				value={quantity}
				// #3. ASSIGN THE NEW STATE VALUE
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, index) => index + 1).map(
					(option) => (
						<option
							value={option}
							key={option}
						>
							{option}
						</option>
					)
				)}
			</select>
			<input
				type="text"
				placeholder="Item..."
				// #2. USE STATE VALUE
				value={description}
				// #3. ASSIGN THE NEW STATE VALUE
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
