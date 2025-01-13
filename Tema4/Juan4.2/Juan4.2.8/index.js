// Recogemos los elementoss
let btnAddTAsk = $("#addTask");
let tasks = $("#taskList");
let inputList = $("#newTask");

// Procedemos a crear la tarea y poniendo sus botones
btnAddTAsk.click(function () {
  if (inputList.val().trim() !== "") {
    let task = $("<li>", {
      text: inputList.val(),
      style: "display: none",
    });

    let btnComplete = $("<button>", {
      text: "Completar",
      id: "complete",
    });

    let btnDelete = $("<button>", {
      text: "Eliminar",
      id: "delete",
    });

    task.append(btnComplete);
    task.append(btnDelete);

    btnComplete.click(function () {
      task.css({
        "text-decoration": "line-through",
      });
    });

    // Añadimos las animaciones de desaparecer y aparecer
    btnDelete.click(function () {
      task.fadeOut(2000, function () {
        task.remove();
      });
    });

    tasks.append(task);
    task.fadeIn(2000);
    inputList.val("");
  }
});