import swal from "sweetalert";
const messages = (text, title, type) =>
  swal(title, text, type, {
    button: "Accept",
    timer: 2000,
    closeOnEsc: true,
  });

export default messages;
