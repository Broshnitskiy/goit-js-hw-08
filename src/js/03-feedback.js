import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");

const inputTextForm = {};
initForm();

formRef.addEventListener("input", throttle(onTextInput, 500));

formRef.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    console.log(inputTextForm);
    // const formData = new FormData(formRef);
    // formData.forEach((value, name) => console.log(name, value));
    
    event.currentTarget.reset();
});

function onTextInput(event) {
    inputTextForm[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputTextForm));
}

function initForm() {
    let staticTextForm = localStorage.getItem("feedback-form-state");
   
    if (staticTextForm) {
        staticTextForm = JSON.parse(staticTextForm);
        Object.entries(staticTextForm).forEach(([name, value]) => {
        formRef.elements[name].value = value;
        });
    }
}
