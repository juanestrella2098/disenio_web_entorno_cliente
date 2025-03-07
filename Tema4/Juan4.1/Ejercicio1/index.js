document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const userTableFetch = document.getElementById("userTableFetch").querySelector("tbody");
    const userTableAxios = document.getElementById("userTableAxios").querySelector("tbody");
    const apiURL = "https://jsonplaceholder.typicode.com/users";

    function loadUsersFetch() {
        fetch(apiURL)
            .then(response => response.json())
            .then(users => {
                userTableFetch.innerHTML = "";
                users.forEach(user => {
                    const row = createUserRow(user, false);
                    userTableFetch.appendChild(row);
                });
            })
            .catch(error => console.error("error:", error));
    }

    function loadUsersAxios() {
        axios.get(apiURL)
            .then(response => {
                userTableAxios.innerHTML = "";
                response.data.forEach(user => {
                    const row = createUserRow(user, true);
                    userTableAxios.appendChild(row);
                });
            })
            .catch(error => console.error("error:", error));
    }

    function createUserRow(user, isAxios) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="delete-btn">Eliminar</button>
            </td>
        `;
        row.querySelector(".delete-btn").addEventListener("click", () => {
            deleteUser(user.id, isAxios);
        });
        return row;
    }

    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newUser = {
            name: nameInput.value,
            email: emailInput.value
        };

        fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(user => {
                const row = createUserRow(user, false);
                userTableFetch.appendChild(row);
                nameInput.value = "";
                emailInput.value = "";
            })
            .catch(error => console.error("error:", error));
    });

    function deleteUser(userId, isAxios) {
        const url = `${apiURL}/${userId}`;

        if (isAxios) {
            axios.delete(url)
                .then(() => loadUsersAxios())
                .catch(error => console.error("error:", error));
        } else {
            fetch(url, { method: "DELETE" })
                .then(() => loadUsersFetch())
                .catch(error => console.error("error:", error));
        }
    }

    loadUsersFetch();
    loadUsersAxios();
});
