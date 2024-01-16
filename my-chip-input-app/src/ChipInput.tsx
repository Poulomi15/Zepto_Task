// ChipInput.tsx

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import './ChipInput.css';

interface Chip {
  id: number;
  label: string;
}

const ChipInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [chips, setChips] = useState<Chip[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Filter items based on input value
    const filtered = allItems.filter(
      (item) =>
        !chips.find((chip) => chip.label.toLowerCase() === item.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [inputValue, chips]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();

    setInputValue(value);

    // Filter items based on input value
    const filtered = allItems.filter(
      (item) =>
        !chips.find((chip) => chip.label.toLowerCase() === item.toLowerCase())
    );

    // Show dropdown only if there is input value and filtered items
    setFilteredItems(value ? filtered : allItems);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && inputValue === '') {
      // Delete the last chip when backspace is pressed and input is empty
      removeChip(chips.length - 1);
    }
  };

  const handleItemClick = (item: string) => {
    // Add item to chips and remove it from filtered items
    setChips([...chips, { id: chips.length + 1, label: item }]);
    setInputValue('');
  };

  const removeChip = (index: number) => {
    // Remove chip by index
    const updatedChips = [...chips];
    const removedChip = updatedChips.splice(index, 1)[0];
    setChips(updatedChips);

    // Add the removed chip back to filtered items
    setFilteredItems([...filteredItems, removedChip.label]);
  };

  return (
    <div className="chip-input">
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div key={chip.id} className="chip">
            {chip.label}
            <span onClick={() => removeChip(index)} className="chip-close">
              X
            </span>
          </div>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Type to search..."
        />
      </div>
      {inputValue && (
        <ul className="item-list">
          {filteredItems
            .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item) => (
              <li key={item} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

const allItems = [
  'Nick Giannopoulos',
  'John Doe',
  'Jane Doe',
  'Alice Johnson',
  // Add more items as needed
];

export default ChipInput;
