const ColorPalettesHead = (colorsData, closeColorPalettes) => {
	const colorPalettesHead = document.createElement('div');
	const img = document.createElement('img');
	const p = document.createElement('p');
	const close = document.createElement('div');

	img.src = '/img/palette.png';
	img.alt = 'palette';
	p.appendChild(document.createTextNode('Палитра'));
	colorPalettesHead.className = 'color-palettes_head';
	close.className = 'color-palettes_close';
	close.title = 'Закрыть';

	colorPalettesHead.appendChild(img);
	colorPalettesHead.appendChild(p);
	colorPalettesHead.appendChild(close);

	close.addEventListener('click', () => closeColorPalettes(colorsData));

	return colorPalettesHead;
};

export default ColorPalettesHead;