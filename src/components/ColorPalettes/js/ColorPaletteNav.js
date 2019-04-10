const ColorPaletteNav = (openLibraries, openSettings, linkHandleClick) => {
	const colorPaletteNav = document.createElement('ul');

	colorPaletteNav.className = 'color-palette_nav';

	[
		{
			text: 'Библиотека',
			active: openLibraries
		},
		{
			text: 'Настройка палитры',
			active: openSettings
		}
	].map(({ text, active }) => {
		colorPaletteNav.appendChild(Link(text, active, linkHandleClick));
	});

	return colorPaletteNav;
};

const Link = (text, active, linkHandleClick) => {
	const link = document.createElement('li');

	link.appendChild(document.createTextNode(text));

	active && (link.className = 'active');
	active || link.addEventListener('click', linkHandleClick);

	return link;
};

export default ColorPaletteNav;