import {cenamanager} from './cenamanager.js';

const canvas = document.getElementById("canvas");
const cenamanager = new cenamanager(canvas);
const stats = initStats();

bindEventListeners();
render();

function initStats(type) {
    const panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    const stats = new Stats();
    stats.showPanel(panelType);
    document.body.appendChild(stats.dom);
    return stats;
}

function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height= '100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    cenamanager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    cenamanager.update();
    stats.update();
}