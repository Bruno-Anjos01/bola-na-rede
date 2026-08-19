document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#entrar");
    const formInputs = document.querySelectorAll(".form-container input, #entrar");

    // Segurança: Cancela a execução se o botão não for encontrado na página
    if (!button) return;

    // 1. Animação de Entrada (Revela o formulário subindo com efeito suave)
    gsap.from(formInputs, { 
        opacity: 0, 
        y: 40, 
        duration: 0.8, 
        stagger: 0.15,
        ease: "power2.out"
    });

    // 2. Efeito de Hover (O botão pulsa enquanto o mouse estiver em cima)
    button.addEventListener("mouseover", () => {
        gsap.to(button, { 
            scale: 1.06, 
            duration: 0.25, 
            ease: "power1.inOut", 
            repeat: -1, 
            yoyo: true 
        });
    });

    // Retorna o botão ao normal quando o mouse sai
    button.addEventListener("mouseout", () => {
        gsap.killTweensOf(button); // Para o efeito pulsar imediatamente
        gsap.to(button, { 
            scale: 1, 
            duration: 0.2,
            ease: "power1.out"
        });
    });

    // 3. Evento de Clique (Simulação de Autenticação / Loading)
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o recarregamento instantâneo da página

        // Ativa o estado visual de carregamento
        button.textContent = "Carregando...";
        button.classList.add("loading");
        button.style.pointerEvents = "none"; // Desativa cliques repetidos

        // Simula uma resposta do servidor após 3 segundos
        setTimeout(() => {
            button.textContent = "Entrar";
            button.classList.remove("loading");
            button.style.pointerEvents = "auto"; // Reativa o botão
            
            // Dica: Se quiser redirecionar o usuário após o login com sucesso,
            // descomente a linha abaixo e adicione o link da página principal:
            // window.location.href = "index.html"; 
        }, 3000); 
    });
});
