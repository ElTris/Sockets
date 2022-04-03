const socket_rec = io("https://simple-sockss.herokuapp.com/");

const form = document.querySelector("#formulario");
const messages_list = document.querySelector("#message_list");
const message = document.querySelector("#message_id");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const message_new = message.value;

  socket_rec.emit("sender", {
    text: message_new,
  });
});

socket_rec.on("server_message", (message) => {
  console.log("Mesage from server", message.text);
  messages_list.innerHTML += `<li>${message.text}</li>`;
});
