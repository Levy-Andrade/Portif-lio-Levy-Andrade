document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Script carregado com sucesso!");



    // ==================================================
    // DARK MODE
    // ==================================================

    const toggle = document.getElementById("dark-mode-toggle");

    if (!toggle) {

        console.log("❌ ERRO: Toggle dark mode não encontrado!");
        return;
    }

    // ==================================================
    // CARREGA TEMA SALVO
    // ==================================================

    const temaSalvo = localStorage.getItem("theme");

    if (temaSalvo === "dark") {

        document.body.classList.add("dark-mode");

        toggle.checked = true;
    }

    // ==================================================
    // ALTERAÇÃO DE TEMA
    // ==================================================

    toggle.addEventListener("change", () => {

        // MODO ESCURO
        if (toggle.checked) {

            document.body.classList.add("dark-mode");

            localStorage.setItem("theme", "dark");

            console.log("Modo Escuro Ativado");
        }

        // MODO CLARO
        else {

            document.body.classList.remove("dark-mode");

            localStorage.setItem("theme", "light");

            console.log("Modo Claro Ativado");
        }
    });



    // ==================================================
    // MENU ATIVO CONFORME A SEÇÃO
    // ==================================================

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.clientHeight;

            // VERIFICA SE A SEÇÃO ESTÁ VISÍVEL
            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");
            }
        });

        // REMOVE ACTIVE DOS LINKS
        navLinks.forEach(link => {

            link.classList.remove("active");

            // ADICIONA ACTIVE NO LINK DA SEÇÃO
            if (link.getAttribute("href") === `#${current}`) {

                link.classList.add("active");
            }
        });
    });

});



// ======================================================
// ABRIR MODAL
// ======================================================

function abrirModal(modalId) {

    const modal = document.getElementById(modalId);

    if (modal) {

        modal.style.display = "block";

        // TRAVA SCROLL DO BODY
        document.body.style.overflow = "hidden";
    }
}



// ======================================================
// FECHAR MODAL
// ======================================================

function fecharModal(modalId) {

    const modal = document.getElementById(modalId);

    if (modal) {

        modal.style.display = "none";

        // LIBERA SCROLL
        document.body.style.overflow = "auto";
    }
}



// ======================================================
// FECHAR MODAL AO CLICAR FORA
// ======================================================

window.onclick = function(event) {

    // VERIFICA SE CLICOU NO FUNDO ESCURO
    if (event.target.classList.contains("modal")) {

        event.target.style.display = "none";

        document.body.style.overflow = "auto";
    }
};