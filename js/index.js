"use strict";
import { iniRenderer } from "/js/renderers/iniRenderer.js";
import { crRenderer } from "/js/renderers/crRenderer.js";

let crdiv = document.getElementById("stats");
let inidiv = document.getElementById("iniciativa");

function main() {
    crdiv.appendChild(crRenderer.asEmpty());
    inidiv.appendChild(iniRenderer.asEmpty());

    let formCr = document.getElementById("form-cr");
    let formIni = document.getElementById("form-ini");
    formCr.onsubmit = handleCrForm;
    formIni.onsubmit = handleIniForm;
}

function handleCrForm(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let newCr = crRenderer.asCr(formData);
    crdiv.appendChild(newCr);

    let modalElement = document.getElementById("crModal");
    let modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }
    form.reset();
    delPhCr();
}

function handleIniForm(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let newIni = iniRenderer.asIni(formData);
    inidiv.appendChild(newIni);

    let modalElement = document.getElementById("iniModal");
    let modal = bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }
    form.reset();
    delPhIni();
}

function delPhCr() {
    let ph = document.getElementById("crPh");
    if (ph.hidden == false) {
        ph.hidden = true;
    }
}

function delPhIni() {
    let ph = document.getElementById("iniPh");
    if (ph.hidden == false) {
        ph.hidden = true;
    }
}

document.addEventListener("DOMContentLoaded", main);