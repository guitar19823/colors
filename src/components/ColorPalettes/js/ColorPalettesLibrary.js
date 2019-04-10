import ColorPalette from './ColorPalette.js';

const ColorPalettesLibrary = (colorsData, colorsChange) => {
	const colorPalettesLibrary = document.createElement('div');
	const colorPalettesLibraryWrapper = document.createElement('div');
	const p = document.createElement('p');

	colorPalettesLibrary.className = 'color-palettes_library';
	colorPalettesLibraryWrapper.className = 'color-palettes_library-wrapper';

	p.appendChild(document.createTextNode('Библиотека'));

	colorPalettesLibrary.appendChild(p);
	colorsData.map((colors, colorsId) => {
		colorPalettesLibraryWrapper.appendChild(ColorPalette(colors, colorsId, colorsChange));
	});
	colorPalettesLibrary.appendChild(colorPalettesLibraryWrapper);

	return colorPalettesLibrary;
};

export default ColorPalettesLibrary;