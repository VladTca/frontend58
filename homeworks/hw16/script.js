document.getElementById("nameForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return;

    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Пол:</strong> ${data.gender ? data.gender : "Не определено"}</p>
        <p><strong>Вероятность:</strong> ${data.probability * 100}%</p>
        <p><strong>Количество записей:</strong> ${data.count}</p>
    `;
});