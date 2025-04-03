const nForm = document.getElementById("nameForm");

async function getGender(name) {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    console.log(data);
    return data;
}

nForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("nameInput").value.trim();

    if (!nameInput) {
        alert("Пожалуйста, введите имя.");
        return;
    }

    try {
        const data = await getGender(nameInput);

        const name = data.name || "Неизвестно";
        const gender = data.gender ? data.gender : "Не определено";
        const probability = data.probability ? (data.probability * 100).toFixed(2) + "%" : "Недоступно";
        const count = data.count || "Неизвестно";

        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Пол:</strong> ${gender}</p>
            <p><strong>Вероятность:</strong> ${probability}</p>
            <p><strong>Количество записей:</strong> ${count}</p>
        `;

        const clearButton = document.getElementById("clearButton");

        clearButton.addEventListener("click", () => {
            document.getElementById("nameInput").value = "";
            document.getElementById("result").innerHTML = "";
        });
    } catch (error) {
        console.error("Ошибка при получении данных от API:", error);
        alert("Произошла ошибка при обработке запроса. Пожалуйста, попробуйте снова позже.");
    }
});

