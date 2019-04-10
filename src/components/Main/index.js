import ColorsExample from '../ColorsExample';
import Button from '../Button';
import './main.css';

const Main = (colors, openColorPalettes) => {
	const main = document.createElement('main');

	main.appendChild(ColorsExample(colors));
	main.appendChild(Button(
		colors,
		openColorPalettes
	));

	return main;
};

export default Main;