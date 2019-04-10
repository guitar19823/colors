const InputColorsTitle = (title) => {
	const inputColorsTitle = document.createElement('input');

	inputColorsTitle.className = 'input-colors-title';
	inputColorsTitle.type = 'text';
	inputColorsTitle.value = title;
	return inputColorsTitle;
};

export default InputColorsTitle;