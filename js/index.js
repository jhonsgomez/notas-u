const PORCENTAJE_CORTE_I = 33 / 100;
const PORCENTAJE_CORTE_II = 33 / 100;
const PORCENTAJE_CORTE_III = 34 / 100;

const PORCENTAJE_TAREAS = 30 / 100;
const PORCENTAJE_AUTOEVALUACION = 10 / 100;
const PORCENTAJE_EXAMEN = 60 / 100;

const CANTIDAD_DECIMALES = 2;
const resultDiv = document.getElementById('result');

document.getElementById('calcularNotasCorte').addEventListener('submit', function (event) {
    event.preventDefault();
    let nota1 = (parseInt(document.getElementById('nota1').value, 10)) / 10 || 0;
    let nota2 = (parseInt(document.getElementById('nota2').value, 10)) / 10 || 0;
    let nota3 = (parseInt(document.getElementById('nota3').value, 10)) / 10 || 0;

    if ((nota1 >= 0 && nota1 <= 5.0) && (nota2 >= 0 && nota2 <= 5.0) && (nota3 >= 0 && nota3 <= 5.0)) {
        let resultado = (nota1 * PORCENTAJE_TAREAS) + (nota2 * PORCENTAJE_AUTOEVALUACION) + (nota3 * PORCENTAJE_EXAMEN);
        resultado = Math.trunc(resultado * Math.pow(10, CANTIDAD_DECIMALES)) / Math.pow(10, CANTIDAD_DECIMALES);

        if (resultado >= 3.0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                La nota obtenida en el corte es: <strong>[` + resultado + `]</strong>.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                La nota obtenida en el corte es: <strong>[` + resultado + `]</strong>.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        }
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
            Por favor ingrese las notas en el formato indicado.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
});

document.getElementById('calcularNotasSemestre').addEventListener('submit', function (event) {
    event.preventDefault();
    let corte1 = (parseInt(document.getElementById('corte1').value, 10)) / 10 || 0;
    let corte2 = (parseInt(document.getElementById('corte2').value, 10)) / 10 || 0;
    let corte3 = (parseInt(document.getElementById('corte3').value, 10)) / 10 || 0;

    if ((corte1 >= 0 && corte1 <= 5.0) && (corte2 >= 0 && corte2 <= 5.0) && (corte3 >= 0 && corte3 <= 5.0)) {
        let resultado = (corte1 * PORCENTAJE_CORTE_I) + (corte2 * PORCENTAJE_CORTE_II) + (corte3 * PORCENTAJE_CORTE_III);
        resultado = Math.trunc(resultado * Math.pow(10, CANTIDAD_DECIMALES)) / Math.pow(10, CANTIDAD_DECIMALES);

        if (resultado >= 3.0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                La nota obtenida en el semestre es: <strong>[` + resultado + `]</strong>.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                La nota obtenida en el semestre es: <strong>[` + resultado + `]</strong>.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        }
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
            Por favor ingrese las notas en el formato indicado.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
});

document.getElementById('calcularNotasParcial').addEventListener('submit', function (event) {
    event.preventDefault();
    let nota1 = (parseInt(document.getElementById('notaTareas').value, 10)) / 10 || 0;
    let nota2 = (parseInt(document.getElementById('notaAutoevaluacion').value, 10)) / 10 || 0;
    let nota3 = (parseInt(document.getElementById('notaAspirada').value, 10)) / 10 || 0;

    if ((nota1 >= 0 && nota1 <= 5.0) && (nota2 >= 0 && nota2 <= 5.0) && (nota3 >= 0 && nota3 <= 5.0)) {
        let resultado = (nota3 - ((nota1 * PORCENTAJE_TAREAS) + (nota2 * PORCENTAJE_AUTOEVALUACION))) / PORCENTAJE_EXAMEN;
        resultado = Math.trunc(resultado * Math.pow(10, CANTIDAD_DECIMALES)) / Math.pow(10, CANTIDAD_DECIMALES);

        if (resultado >= 0 && resultado <= 5.0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + resultado + `]</strong> en el parcial para poder pasar el corte en ` + nota3 + `.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else if (resultado < 0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + 0 + `]</strong> en el parcial para poder pasar el corte en ` + nota3 + `.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + resultado + `]</strong> en el parcial para poder pasar el corte en ` + nota3 + `.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        }
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
            Por favor ingrese las notas en el formato indicado.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
});

document.getElementById('calcularNotasCorteIII').addEventListener('submit', function (event) {
    event.preventDefault();
    let corte1 = (parseInt(document.getElementById('notaCorte1').value, 10)) / 10 || 0;
    let corte2 = (parseInt(document.getElementById('notaCorte2').value, 10)) / 10 || 0;

    if ((corte1 >= 0 && corte1 <= 5.0) && (corte2 >= 0 && corte2 <= 5.0)) {
        let resultado = (3.0 - ((corte1 * PORCENTAJE_CORTE_I) + (corte2 * PORCENTAJE_CORTE_II))) / PORCENTAJE_CORTE_III;
        resultado = Math.trunc(resultado * Math.pow(10, CANTIDAD_DECIMALES)) / Math.pow(10, CANTIDAD_DECIMALES);

        if (resultado >= 0 && resultado <= 5.0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + resultado + `]</strong> en el corte III para poder pasar el semestre.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else if (resultado < 0) {
            resultDiv.innerHTML = `<div class="alert alert-success alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + 0 + `]</strong> en el corte III para poder pasar el semestre.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
            resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
                Necesitas sacar <strong>[` + resultado + `]</strong> en el corte III para poder pasar el semestre.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        }
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger alert-dismissible text-center fade show mt-4 mx-0 mx-md-5" role="alert" id="result-alert">
            Por favor ingrese las notas en el formato indicado.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
});
