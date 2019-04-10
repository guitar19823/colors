import Color from './Color.js';

const CurrentPalette = ({ colors }) => {
	const currentPalette = document.createElement('div');
	const p = document.createElement('p');

	currentPalette.className = 'current-palette';
	p.appendChild(document.createTextNode('Текущая палитра'));

	currentPalette.appendChild(p);
	currentPalette.appendChild(ColorsWrapper(colors));

	return currentPalette;
};

const ColorsWrapper = (colors) => {
	const colorsWrapper = document.createElement('div');

	colorsWrapper.className = 'colors-wrapper';

	colors.map((color) => {
		colorsWrapper.appendChild(Color(color));
	});

	return colorsWrapper;
};

export default CurrentPalette;