// Sugestão: coloque em um arquivo popup.js ou no final do seu HTML

function showPopup(title, message) {
    // Remove popup existente
    const old = document.querySelector('.popup-overlay');
    if (old) old.remove();

    // Cria overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Cria popup
    overlay.innerHTML = `
        <div class="popup">
            <button class="popup-close" aria-label="Fechar">&times;</button>
            <div class="popup-title">${title}</div>
            <div class="popup-message">${message}</div>
        </div>
    `;

    // Fecha ao clicar no X ou fora do popup
    overlay.querySelector('.popup-close').onclick = () => overlay.remove();
    overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

    document.body.appendChild(overlay);
}

// Exemplo de uso:
// showPopup('Bem-vindo!', 'Login realizado com sucesso.');