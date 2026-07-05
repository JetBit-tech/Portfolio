function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    span.onclick = function () {
        span.classList.toggle("done");
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "🗑";
    removeButton.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(removeButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}