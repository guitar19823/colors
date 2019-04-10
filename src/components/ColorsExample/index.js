import './colors-example.css';

const ColorsExample = (colors) => {
	const colorsExample = document.createElement('div');

	colorsExample.className = 'colors-example';

	colors.map((color) => {
		const div = document.createElement('div');

		div.style.background = color;

		colorsExample.appendChild(div);
	});

	return colorsExample;
};

export default ColorsExample;