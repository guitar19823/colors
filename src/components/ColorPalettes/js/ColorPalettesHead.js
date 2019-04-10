const ColorPalettesHead = (colorsData, closeColorPalettes) => {
	const colorPalettesHead = document.createElement('div');
	const p = document.createElement('p');
	const close = document.createElement('div');

	p.appendChild(document.createTextNode('Палитра'));
	colorPalettesHead.className = 'color-palettes_head';
	close.className = 'color-palettes_close';
	close.title = 'Закрыть';

	colorPalettesHead.appendChild(p);
	colorPalettesHead.appendChild(close);

	close.addEventListener('click', () => closeColorPalettes(colorsData));

	return colorPalettesHead;
};

export default ColorPalettesHead;