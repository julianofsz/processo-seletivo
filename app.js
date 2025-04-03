document.getElementById("formId").addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  alert(`Nome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);
});
