const jimboClosed = document.getElementById("jimboClosed");
const funcional = document.getElementById("funcional");
const confirm = document.getElementById("confirm");
const answer = document.getElementById("answer");

async function getRandomIndex(max) {
    const url = `https://www.random.org/integers/?num=1&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`;

    const response = await fetch(url);
    const text = await response.text();
    return parseInt(text.trim());
}

async function confirmarMsg(){
    const url = "scripts/falas.json";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok){
            throw new Error("Erro HTTP:", response.status);
        }

        const data = await response.json();
        const randomIndex = await getRandomIndex(data.falas.length - 1);
        answer.innerHTML = data.falas[randomIndex]; 
    } catch (error) {
        console.log("Erro:", error);
    }
};

jimboClosed.addEventListener("click", function () {
    answer.style.display = "block";
    funcional.style.display = "block";
});