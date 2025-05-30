let saldo = 10000;
let opcionSeleccionada = 0;


const menuDiv = document.getElementById('menu');
const operacionContainer = document.getElementById('operacion-container');

const opcionInput = document.getElementById('opcionInput');
const montoInput = document.getElementById('montoInput');

const aceptarBtn = document.getElementById('aceptarBtn');
const ejecutarBtn = document.getElementById('ejecutarBtn');
const volverBtn = document.getElementById('volverBtn');

const operacionTitulo = document.getElementById('operacionTitulo');


aceptarBtn.addEventListener('click', () => {
    opcionSeleccionada = parseInt(opcionInput.value);

    menuDiv.classList.add('hidden');
    if (opcionSeleccionada === 1) {
        alert(`Su saldo actual es: $${saldo}`);
        volverBtn.classList.remove('hidden');

    } else if (opcionSeleccionada === 2) {
        operacionTitulo.textContent = 'Retirar Dinero';
        montoInput.value = '';
        operacionContainer.classList.remove('hidden');
        volverBtn.classList.remove('hidden');

    } else if (opcionSeleccionada === 3) {
        operacionTitulo.textContent = 'Depositar Dinero';
        montoInput.value = '';
        operacionContainer.classList.remove('hidden');
        volverBtn.classList.remove('hidden');
    } else {
        alert('Opción inválida. Por favor, elija 1, 2 o 3.');
        volverBtn.classList.remove('hidden');
    }
});

ejecutarBtn.addEventListener('click', () => {
    const monto = parseFloat(montoInput.value);
    
    operacionContainer.classList.add('hidden');

    if (opcionSeleccionada === 2) {
        if (monto <= 0 || isNaN(monto)) {
            alert('Error: Debe retirar un número positivo.');
        } else if (monto > saldo) {
            alert('Fondos insuficientes.');
        } else {
            saldo -= monto;
            alert(`Retiro exitoso. Su nuevo saldo es: $${saldo}`);
        }

    } else if (opcionSeleccionada === 3) {
        if (monto <= 0 || isNaN(monto)) {
            alert('Error: Debe retirar un número positivo.');
        } else {
            saldo += monto;
            alert(`Depósito exitoso. Su nuevo saldo es: $${saldo}`);
        }
    }
    volverBtn.classList.remove('hidden');
});

volverBtn.addEventListener('click', () => {
    menuDiv.classList.remove('hidden');
    operacionContainer.classList.add('hidden');
    volverBtn.classList.add('hidden');

    opcionInput.value = '';
    montoInput.value = '';
    opcionSeleccionada = 0;
});