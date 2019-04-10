const InputColor = (color) => {
	const inputColor = document.createElement('input');

	inputColor.type = 'color';
	inputColor.className = 'input-color';
	inputColor.value = color;

	return inputColor;
};

export default InputColor;