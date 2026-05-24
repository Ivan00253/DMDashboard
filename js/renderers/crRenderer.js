"use strict";
import { parseHTML } from "https://ivan00253.github.io/DMDashboard/js/utils/parseHTML.js";

let criaturas = [];

const crRenderer = {
    asEmpty: function () {
        let html = `<div class="row justify-content-center" id="crPh">
                        <div class="col-md-6 rounded text-center" style="background: #2c2c2c;border: 2px dashed #d0cccc;min-width: 75%;">
                            <em>Añade alguna criatura <i class="fa-solid fa-plus"></i></em>
                        </div>
                    </div>`;
        return parseHTML(html);
    },
    asCr: function (criatura, vida) {
        if (vida === undefined || vida === null) vida = criatura.get("vida");
        let html = `<div class="row criatura">
                        <div class="d-flex align-items-center justify-content-center gap-3 w-80">
                            <h5>Nombre: ${criatura.get("nombre")} || Vida: <span>${vida}</span></h5>
                                                            <div class="d-flex flex-column">
                                                                <button class="btn btn-outline-secondary btn-sm py-0 aumentar">
                                                                    ▲
                                                                </button>

                                                                <button class="btn btn-outline-secondary btn-sm py-0 decrementar">
                                                                    ▼
                                                                </button>
                                                            </div> || <a target="_blank" href="${criatura.get("statsBlock")}"><u>Stat block</u></a>
                                                            <button class="btn btn-danger btn-sm py-0 eliminar"><i class="fa-solid fa-x"></i></button>
                        </div>
                    </div>`;
        let cont = parseHTML(html);
        criaturas.push(cont);

        cont.querySelector(".eliminar").addEventListener("click", () => {
            if (window.confirm("¿Eliminar criatura?"))
            criaturas.pop(cont);
            cont.remove();
            if (criaturas.length === 0) {
                let ph = document.getElementById("crPh");
                if (ph) ph.hidden = false;
            };
        })

        cont.querySelector(".aumentar").addEventListener("click",() => {
            vida++;
            const nuevo = crRenderer.asCr(criatura, vida);
            cont.replaceWith(nuevo);
        });
        cont.querySelector(".decrementar").addEventListener("click", () => {
            vida--;
            const nuevo = crRenderer.asCr(criatura, vida);
            cont.replaceWith(nuevo);
        })

        return cont;
    }
}

export { crRenderer };
