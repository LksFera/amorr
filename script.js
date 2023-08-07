const botao = document.getElementById("botao");

botao.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement("video");
        video.srcObject = stream;
        video.play();
        document.body.appendChild(video);
    } catch (error) {
        console.error("Erro ao acessar a câmera:", error);
    }
});

