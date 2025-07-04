// Mensaje personalizado
const mensaje = `Hoy, en este día tan precioso, nació lo más bello de este mundo: tú. Sé que a veces puedo ser muy labioso, pero de verdad, eres una obra de arte, amor. Tengo unas ganas inmensas de ver tus preciosos ojitos y de darte muchísimos besitos >3. Me hace tan feliz que formes parte de mi vida. Eres una mujer increíble, que a pesar de las dificultades, siempre sigue adelante. Dios mío, eres maravillosa, cielo.\n\nEn este día tan especial, quiero desearte un cumpleaños lleno de alegría y amor. Me encantaría poder estar a tu lado, llegar a tu casita y llenarte de regalitos, pero ya llegará ese momento. Por ahora, aunque estemos lejos, quiero que sepas que haré todo lo posible para ir por ti, para verte y perderme en esos ojitos llenos de amor. Te amo, cariño, de verdad, te amo >3.`;

const giftBox = document.getElementById('giftBox');
const messageDiv = document.getElementById('message');
const messageContent = document.querySelector('.message-content');
const balloonsDiv = document.getElementById('balloons');
const audio = document.getElementById('birthdaySong');
const overlay = document.getElementById('overlay');

// Crear peluches (ositos con CSS)
document.querySelectorAll('.plush').forEach(plush => {
    plush.innerHTML = `
        <div class="bear-ear left"></div>
        <div class="bear-ear right"></div>
        <div class="bear-head"></div>
        <div class="bear-eye left"></div>
        <div class="bear-eye right"></div>
        <div class="bear-nose"></div>
        <div class="bear-body"></div>
        <div class="bear-arm left"></div>
        <div class="bear-arm right"></div>
        <div class="bear-leg left"></div>
        <div class="bear-leg right"></div>
    `;
});

// Animar la caja y mostrar mensaje
let abierto = false;
giftBox.addEventListener('click', () => {
    if (abierto) return;
    abierto = true;
    giftBox.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('active');
        setTimeout(() => {
            mostrarMensaje();
            lanzarGlobos();
            // Solo reproducir si no está ya sonando
            if (audio.paused) {
                audio.play();
            }
        }, 700);
    }, 900);
});

function mostrarMensaje() {
    messageDiv.classList.add('show');
    messageDiv.classList.remove('hidden');
    messageContent.innerHTML = '';
    let i = 0;
    function escribir() {
        if (i < mensaje.length) {
            messageContent.innerHTML += mensaje[i] === '\n' ? '<br>' : mensaje[i];
            i++;
            setTimeout(escribir, 28);
        }
    }
    escribir();
}

// Globos de colores
function lanzarGlobos() {
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

// Evitar autoplay en móviles hasta interacción
// El control de audio ya permite pausar/reanudar manualmente 