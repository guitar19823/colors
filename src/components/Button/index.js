import './button.css';

const Button = (colors, openColorPalettes) => {
	const button = document.createElement('button');

	button.type = 'button';
	button.className = 'button';
	button.title = 'Открыть палитру';

	button.style.background = colors[7];

	button.appendChild(document.createTextNode('Выбрать палитру'));

	button.addEventListener('mouseover', () => {
		button.style.background = colors[5];
	});
	button.addEventListener('mouseout', () => {
		button.style.background = colors[7];
	});
	button.addEventListener('click', openColorPalettes);

	return button;
}

export default Button;