document.addEventListener('DOMContentLoaded', () => {

    // El ciclo se repite hasta que presione Aceptar
    while (!respuesta) {
        let indiceMensaje = Math.min(intentos, mensajes.length - 1);
        
        respuesta = confirm(mensajes[indiceMensaje]);

        if (!respuesta) {
            intentos++; // Aumenta el contador si presiona cancelar
        }
    }

    // --- UNA VEZ QUE PRESIONA ACEPTAR ---
    const garden = document.querySelector('.garden');
    
    // Hacemos visible el jardín cambiando su display a flex
    garden.style.display = 'flex';

    const floresDataOriginal = [
        { color: '#ffb703', centro: '#ffe66d' }, // Amarillo
        { color: '#9d4edd', centro: '#c77dff' }, // Morado
        { color: '#4cc9f0', centro: '#90e0ef' }, // Celeste
        { color: '#ff85a1', centro: '#fbb1bd' }, // Rosa claro
    ];

    const floresData = [];
    for (let i = 0; i < 1; i++) {
        floresData.push(...floresDataOriginal);
    }

    function crearTulipan(data, indice) {
        const delay = indice * 0.2; 
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
    }

    floresData.forEach((data, index) => {
        crearTulipan(data, index);
    });
});