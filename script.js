document.addEventListener('DOMContentLoaded', () => {
    let respuesta = false;
    let intentos = 0;

    // 1. Mensajes de insistencia (Alertas iniciales)
    const mensajes = [
        "¡Hola mi amor! ¿Estás lista para ver tu sorpresa por nuestros 4 mesecitos?",
        "¿Estás segura?  Píensalo bien...",
        "¿De verdad le vas a dar a cancelar?  ¡Te va a encantar!",
        "Mmm... Te estás haciendo la difícil  ¿Segura que no quieres ver?",
        "¿100% segura? Piénsalo otra vez, hay unos lindos tulipanes esperando ",
        "¡Ya no puedes escapar! Tienes que darle a aceptar obligatoriamente o sino se te metera un virus :p"
    ];

    // El ciclo se repite hasta que presione Aceptar
    while (!respuesta) {
        let indiceMensaje = Math.min(intentos, mensajes.length - 1);
        respuesta = confirm(mensajes[indiceMensaje]);

        if (!respuesta) {
            intentos++;
        }
    }
    

    // --- 2. UNA VEZ QUE TERMINAN LAS ALERTAS Y DA ACEPTAR ---
    const carta = document.getElementById('carta-contenedor');
    const btnCerrarCarta = document.getElementById('cerrar-carta-btn');
    const musica = document.getElementById('background-music');
    const garden = document.querySelector('.garden');

    // Reproducir la música de fondo
    if (musica) {
        musica.play().catch(error => {
            console.log("Audio listo al interactuar.");
        });
    }

    // Mostrar inmediatamente la carta con tu mensaje romántico
    if (carta) {
        carta.style.display = 'flex';
    }

    // 3. Cuando haga clic en el botón de la carta, se oculta la carta y se revela el jardín con las flores
    if (btnCerrarCarta) {
        btnCerrarCarta.addEventListener('click', () => {
            carta.style.display = 'none'; // Ocultar carta
            garden.style.display = 'flex'; // Mostrar el jardín

            // Generar las flores animadas
            const floresDataOriginal = [
                { color: '#ffb703', centro: '#ffe66d' }, // Amarillo
                { color: '#9d4edd', centro: '#c77dff' }, // Morado
                { color: '#4cc9f0', centro: '#90e0ef' }, // Celeste
                { color: '#ff85a1', centro: '#fbb1bd' }, // Rosa claro
            ];

            floresDataOriginal.forEach((data, index) => {
                const delay = index * 0.2; 
                const tulip = document.createElement('div');
                tulip.className = 'tulip';
                
                tulip.innerHTML = `
                    <div class="flower" style="animation-delay: ${1.5 + delay}s">
                        <div class="petal left" style="background-color: ${data.color}"></div>
                        <div class="petal right" style="background-color: ${data.color}"></div>
                        <div class="petal center" style="background-color: ${data.centro}"></div>
                    </div>
                    <div class="stem" style="animation-delay: ${delay}s"></div>
                    <div class="leaf left" style="animation-delay: ${1.2 + delay}s"></div>
                    <div class="leaf right" style="animation-delay: ${1.2 + delay}s"></div>
                `;
                garden.appendChild(tulip);
            });
        });
    }
});