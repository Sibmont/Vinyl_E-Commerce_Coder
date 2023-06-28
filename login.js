const submitBtn = document.querySelector("#submit");
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
let username = "";
const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#eyeIcon");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

const requirements = [{ regex: /^(?=.*[0-9])(?!.* ).{8,}$/ }];

submitBtn.addEventListener("click", () => {
  requirements.forEach((item) => {
    const isValid = item.regex.test(passwordInput.value);

    if (isValid) {
      username = usernameInput.value;
      sessionStorage.setItem("user", username);
      window.location.href = "./home.html";
    } else if (usernameInput.value === "" || passwordInput.value === "") {
      Toastify({
        text: "Please fill in the empty fields",
        duration: 2000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#ffc107",
          color: "rgb(28, 28, 28)",
          fontWeight: "semibold",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
      Toastify({
        text: "Password doesn't meet requirements",
        duration: 2000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#ffc107",
          color: "rgb(28, 28, 28)",
          fontWeight: "semibold",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  });
});

eyeIcon.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
