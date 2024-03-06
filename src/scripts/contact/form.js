import { post } from "./post";

const formElement = document.querySelector(".contact.us.page form");
const messageElement = formElement?.querySelector("p.message");

const button = formElement?.querySelector("button[type=submit]");

function getFormValues(form) {
  if (!messageElement) return;

  messageElement.textContent = "";

  const formFields = ["firstName", "lastName", "email", "phone", "message"];

  const values = {};
  formFields.map((fieldName) => {
    const element = form.elements[fieldName];
    values[fieldName] = element.value;
  });

  const solutions = ["solution1", "solution2", "solution3"]
    .map((fieldName) => {
      const checked = form.elements[fieldName].checked;

      const fieldValues = {
        solution1: "AI-Powered Threat Detection",
        solution2: "AI Integration",
        solution3: "Innovative Solutions",
      };

      if (checked) {
        return fieldValues[fieldName];
      }
    })
    .filter(Boolean);

  if (!solutions.length) {
    messageElement.dataset.type = "error";
    messageElement.textContent = "Please select at least one solution!";
    return;
  }

  values.solutions = solutions;

  const captcha = window.grecaptcha.getResponse();
  if (!captcha) {
    messageElement.dataset.type = "error";
    messageElement.textContent = "Please verify the captcha!";
    return;
  }

  values.captcha = captcha;

  console.log(values);

  submitForm(values, form);
}

async function submitForm(payload, formElement) {
  button.disabled = true;
  const { message, error, success } = await post(payload);
  button.disabled = false;

  let _message = message;

  if (error) {
    messageElement.dataset.type = "error";
    _message = message || "Sorry, unexpected error occured!";
  }
  if (success) {
    messageElement.dataset.type = "success";
    _message = message || "Successfully submitted form!";

    // empty form fields
    formElement.reset();
  }

  messageElement.textContent = _message;
}

function addSubmitListener() {
  if (!formElement) return;

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    getFormValues(formElement);
  });
}
addSubmitListener();
