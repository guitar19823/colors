import Color from './Color.js';
import Cookies from 'js-cookie';

const ColorPalette = ({ colors, title }, colorsId, colorsChange) => {
	const colorPalette = document.createElement('div');
	const p = document.createElement('p');

	p.appendChild(document.createTextNode(title));

	colorPalette.className = 'color-palette';
	colorPalette.title = 'Выбрать палитру';

	colorPalette.appendChild(p);
	colorPalette.appendChild(ColorsWrapper(colors));

	colorPalette.addEventListener('click', () => {
		Cookies.set('activeColors', colorsId, { expires: 7, path: '/' });
		colorsChange(colorsId);
	});

	return colorPalette;
};

const ColorsWrapper = (colors) => {
	const colorsWrapper = document.createElement('div');

	colorsWrapper.className = 'colors-wrapper';

	colors.map((color) => {
		colorsWrapper.appendChild(Color(color));
	});

	return colorsWrapper;
}

export default ColorPalette;