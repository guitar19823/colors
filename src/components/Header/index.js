import './header.css';

const Header = (colors) => {
	const header = document.createElement('header');

	header.style.background = colors[4];

	header.appendChild(Logotype('Palettes'));
	header.appendChild(MenuButton());

	return header;
};

const Logotype = (text) => {
	const logotype = document.createElement('a');

	logotype.href = '#';
	logotype.className = 'logotype';
	logotype.appendChild(document.createTextNode(text));

	return logotype;
};

const MenuButton = () => {
	const menuButton = document.createElement('div');

	menuButton.className = 'menu-button';
	menuButton.title = 'Меню';

	return menuButton;
};

export default Header;