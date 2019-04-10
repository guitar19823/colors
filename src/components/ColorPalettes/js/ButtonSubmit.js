const ButtonSubmit = () => {
	const buttonSubmit = document.createElement('input');

	buttonSubmit.type = 'submit';
	buttonSubmit.title = 'Сохраниь палитру';
	buttonSubmit.value = 'Сохранить';
	buttonSubmit.className = 'button-submit';

	return buttonSubmit;
};

export default ButtonSubmit;