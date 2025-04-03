const nForm = document.getElementById("nameForm");

async function getGender(name) {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    return data;
}

nForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value.trim();
    if (!nameInput) return;

    const data = await getGender(nameInput);

    document.getElementById("result").innerHTML = `
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Пол:</strong> ${data.gender ? data.gender : "Не определено"}</p>
        <p><strong>Вероятность:</strong> ${data.probability * 100}%</p>
        <p><strong>Количество записей:</strong> ${data.count}</p>
    `;
});
