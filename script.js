
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            let taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            taskSpan.onclick = () => taskSpan.classList.toggle("completed");
            
            let editButton = document.createElement("button");
            editButton.textContent = "✏️";
            editButton.classList.add("edit");
            editButton.onclick = function() {
                let newText = prompt("Edit Task:", taskSpan.textContent);
                if (newText !== null && newText.trim() !== "") {
                    taskSpan.textContent = newText.trim();
                }
            };
            
            let removeButton = document.createElement("button");
            removeButton.textContent = "❌";
            removeButton.classList.add("delete");
            removeButton.onclick = function() {
                li.remove();
            };
            
            li.appendChild(taskSpan);
            li.appendChild(editButton);
            li.appendChild(removeButton);
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }
  