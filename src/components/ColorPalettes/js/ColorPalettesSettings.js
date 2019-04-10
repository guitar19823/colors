import InputColor from './InputColor.js';
import InputColorsTitle from './InputColorsTitle.js';
import ButtonSubmit from './ButtonSubmit.js';

class ColorPalettesSettings {
	constructor(colorsData, activeColors, newColorsData) {
		this.colorPalettesSettings = document.createElement('form');

		this.colorsData = colorsData;
		this.activeColors = activeColors;
		this.newColorsData = newColorsData;

		return this.render();
	}

	formHandleSubmit(e) {
		e.preventDefault();

		const newColors = {
			colors: [],
			title: e.target[10].value
		};

		for (let i = 0; i < 10; i++) {
			newColors.colors.push(e.target[i].value);
		}

		this.newColorsData(newColors, this.activeColors);
	}
	
	render() {
		const { colors, title } = this.colorsData[this.activeColors];
		const p = document.createElement('p');

		this.colorPalettesSettings.className = 'color-palettes-settings';
		p.appendChild(document.createTextNode('Настройка палитры'));

		this.colorPalettesSettings.appendChild(p);
		this.colorPalettesSettings.appendChild(InputsWrapper(colors));
		this.colorPalettesSettings.appendChild(InputColorsTitle(title));
		this.colorPalettesSettings.appendChild(ButtonSubmit());

		this.colorPalettesSettings.addEventListener('submit', this.formHandleSubmit.bind(this));

		return this.colorPalettesSettings;
	}
};

const InputsWrapper = (colors) => {
	const inputsWrapper = document.createElement('div');

	inputsWrapper.className = 'inputs-wrapper';

	colors.map((color) => {
		inputsWrapper.appendChild(InputColor(color));
	});

	return inputsWrapper;
};

export default ColorPalettesSettings;