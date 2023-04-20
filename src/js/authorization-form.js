const validateForm = formSelector => {
  const formElement = document.querySelector(formSelector);

  const validationOptions = [
    {
      attribute: 'required',
      isValid: input => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} is required`,
    },

    {
      attribute: 'minlength',
      isValid: input =>
        input.value && input.value.length >= parseInt(input.minLength, 6),
      errorMessage: (input, label) =>
        `${label.textContent} needs to be at least ${input.minLength} characters`,
    },
    {
      attribute: 'pattern',
      isValid: input => {
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) => `${label.textContent} should be valid`,
    },
  ];

  const validateSingleFormGroup = formGroup => {
    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input, textarea');
    const errorContainer = formGroup.querySelector('.error');

    let formGroupError = false;
    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
        formGroupError = true;
      }
    }

    if (!formGroupError) {
      errorContainer.textContent = '';
    }
  };

  formElement.addEventListener('submit', event => {
    event.preventDefault();

    validateAllFormGroups(formElement);

    formElement.reset();
  });

  const validateAllFormGroups = formToValidate => {
    const formGroups = Array.from(formToValidate.querySelectorAll('._req'));

    formGroups.forEach(formGroup => {
      validateSingleFormGroup(formGroup);
    });
  };

  formElement.setAttribute('novalidate', '');

  Array.from(formElement.elements).forEach(element =>
    element.addEventListener('blur', event => {
      validateSingleFormGroup(event.srcElement.parentElement);
    })
  );
};

validateForm('#form');
validateForm('#formbrief');
