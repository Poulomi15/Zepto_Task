# Zepto_Task

# Chip Component

A React component that allows users to create and manage chips by selecting items from a list.

## Features

- Click on the input field to display a list of items.
- Type in the input field to filter and show matching items in the list.
- Click on an item to turn it into a chip at the top, and the input field adjusts automatically.
- Remove a chip by clicking the "X" icon, which adds the item back to the list.
- Bonus Task: Clean code, written in TypeScript.
- Bonus Task: Highlight the last chip when the input is blank and the backspace key is pressed.

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Poulomi15/Zepto_Task.git>

   Navigate to the project directory:

bash

cd chip-component
Install dependencies:

bash

npm install
Usage
Import the ChipComponent in your React application:

jsx
import ChipComponent from './path/to/ChipComponent';
Include the ChipComponent in your component:

jsx
function App() {
  return (
    <div>
      <h1>Your App</h1>
      <ChipComponent />
    </div>
  );
}
Customize the component and styling based on your project requirements.

Props
The ChipComponent component does not currently accept any props.

Styles
Styling is implemented using CSS, and you can modify the styles in the provided ChipComponent.css file.

Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

