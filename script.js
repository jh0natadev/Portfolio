// ===========================
// Cursor personalizado
// ===========================
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// ===========================
// Texto digitando (index.html apenas)
// ===========================
const elemento = document.getElementById("digitando");
if (elemento) {
    const textos = [
        "Construindo interfaces modernas com JavaScript",
        "Apaixonado por Front-end",
        "Criando experiências interativas"
    ];
    let tIndex = 0;
    let charIndex = 0;
    let deletando = false;

    function escrever() {
        const textoAtual = textos[tIndex];
        if (!deletando) {
            elemento.innerHTML = textoAtual.substring(0, charIndex);
            charIndex++;
            if (charIndex > textoAtual.length) {
                deletando = true;
                setTimeout(escrever, 1500);
                return;
            }
        } else {
            charIndex--;
            elemento.innerHTML = textoAtual.substring(0, charIndex);
            if (charIndex === 0) {
                deletando = false;
                tIndex = (tIndex + 1) % textos.length;
            }
        }
        setTimeout(escrever, deletando ? 50 : 100);
    }
    escrever();
}

// ===========================
// Título animado letra a letra (index.html apenas)
// ===========================
const titulo = document.getElementById("tituloPrincipal");
if (titulo) {
    const nome = "Jhonata Daniel";
    let indexNome = 0;
    titulo.textContent = "";
    function animarTitulo() {
        if(indexNome < nome.length){
            titulo.textContent += nome.charAt(indexNome);
            indexNome++;
            setTimeout(animarTitulo, 150);
        }
    }
    animarTitulo();
}

// ===========================
// Fundo de partículas conectadas
// ===========================
const canvas = document.getElementById('fundoTec');
const ctx = canvas.getContext('2d');
let particlesArray = [];
let w, h;

function initCanvas(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particlesArray = [];
    for(let i = 0; i < 80; i++){
        particlesArray.push({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 1,
            speedY: (Math.random() - 0.5) * 1
        });
    }
}

function animateParticles(){
    ctx.clearRect(0, 0, w, h);
    particlesArray.forEach(p => {
        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'cyan';
        ctx.fill();

        // Atualizar posição
        p.x += p.speedX;
        p.y += p.speedY;

        // Conectar partículas próximas
        particlesArray.forEach(p2 => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 100){
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(0,255,255,0.2)';
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });

        // Reiniciar partículas quando saem da tela
        if(p.x > w) p.x = 0;
        if(p.x < 0) p.x = w;
        if(p.y > h) p.y = 0;
        if(p.y < 0) p.y = h;
    });

    requestAnimationFrame(animateParticles);
}

// Atualizar canvas ao redimensionar
window.addEventListener('resize', () => {
    initCanvas();
});
initCanvas();
animateParticles();