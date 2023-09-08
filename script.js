const feedbackForm = document.querySelector('form');

const userNameInput = feedbackForm.querySelector('.user_name');
const userPhoneInput = feedbackForm.querySelector('.user_phone');

const communicationField = feedbackForm.querySelector('.communication');
const communicationButtons = communicationField.querySelectorAll('.communication_button');
const communicationLabels = communicationField.querySelectorAll('.communication_label')
const personalDataCheckbox = feedbackForm.querySelector('.data_checkbox');
const personalDataLabel = feedbackForm.querySelector('.data_label');


const processingRules = document.querySelector('.processing_rules');
const processingRulesLink = feedbackForm.querySelector('.processing_rules-link');

userNameInput.addEventListener('input', () => userNameInput.classList.remove('error'));

communicationField.addEventListener('change', () => communicationLabels.forEach((el) => el.classList.remove('label_error')));

personalDataCheckbox.addEventListener('change', () => personalDataLabel.classList.remove('label_error'));

const formValidation = () => {
  let isValid = true;

  if (!userNameInput.value) {
    userNameInput.classList.add('error');
    isValid = false;
  }

  if ([...communicationButtons].every((el) => el.checked === false)) {
    communicationLabels.forEach((el) => el.classList.add('label_error'));
    isValid = false;
  }

  if (!personalDataCheckbox.checked) {
    personalDataLabel.classList.add('label_error');
    isValid = false;
  }

  return isValid;
};

IMask(userPhoneInput, {
  mask: '+{7}(000) 000-00-00',
  lazy: false,
}
)

processingRulesLink.addEventListener('click', () => processingRules.classList.toggle('hidden'));

feedbackForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (formValidation()) {
    console.log(new FormData(feedbackForm));
  }
});

