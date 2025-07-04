// Animación de globos
function lanzarGlobos() {
    const balloonsDiv = document.getElementById('balloons');
    for (let i = 0; i < 25; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        const color = `hsl(${Math.random()*360}, 80%, 70%)`;
        balloon.style.background = color;
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.animationDuration = (4 + Math.random() * 2) + 's';
        balloonsDiv.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000);
    }
}

// Funcionalidad de sobres: abrir/cerrar y lanzar globos
function setupEnvelopes() {
    const envelopes = document.querySelectorAll('.envelope');
    envelopes.forEach(env => {
        env.addEventListener('click', function(e) {
            // Si se hace clic en el mensaje, cerrar el sobre
            if (e.target.classList.contains('envelope-message')) {
                env.classList.remove('open');
                return;
            }
            // Cerrar otros sobres
            envelopes.forEach(other => {
                if (other !== env) other.classList.remove('open');
            });
            // Abrir el sobre actual si no está abierto
            const wasOpen = env.classList.contains('open');
            env.classList.toggle('open');
            // Si se acaba de abrir, lanzar globos
            if (!wasOpen && env.classList.contains('open')) {
                lanzarGlobos();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupEnvelopes); 