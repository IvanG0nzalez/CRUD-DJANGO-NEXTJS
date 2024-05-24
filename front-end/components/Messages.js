import swal from "sweetalert";

const messages = (text, title, type) =>
  swal(title, text, type, {
    button: "Accept",
    timer: 2000,
    closeOnEsc: true,
  });

const confirmDelete = (onConfirm) =>
  swal({
    title: "Are you sure?",
    text: "You won't be able to revert this action",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      onConfirm();
      swal("Deleted", "The selection has been deleted", "success");
    }
  });

export { messages, confirmDelete };
