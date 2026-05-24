"use strict";
import { parseHTML } from "js/utils/parseHTML.js";

let iniciativas = [];

const iniRenderer = {
    asEmpty: function () {
        let html = `<div class="row" id="iniPh">
                        <div class="col-md-4 rounded text-center" style="min-width: 100%;background: #2c2c2c;border: 2px dashed #d0cccc">
                            <em>Añade alguna iniciativa <i class="fa-solid fa-plus"></i></em>
                        </div>
                    </div>`;
        return parseHTML(html);
    },
    asIni: function (iniciativa) {
        let html = `<div class="row iniciativa">
                        <div class="d-flex align-items-center justify-content-center gap-3 w-80">
                            <h5>${iniciativa.get("nombre")}: ${iniciativa.get("ini")}</h5>
                            <button class="btn btn-danger btn-sm py-0 eliminar"><i class="fa-solid fa-x"></i></button>
                        </div>
                    </div>`;
        let cont = parseHTML(html);
        iniciativas.push(cont);

        cont.querySelector(".eliminar").addEventListener("click", () => {
            if (window.confirm("¿Eliminar iniciativa?")) {
                iniciativas.pop(cont);
                cont.remove();

                if (iniciativas.length === 0) {
                    let ph = document.getElementById("iniPh");
                    if (ph.hidden == true) ph.hidden = false;
                };
            }
        })

        return cont;
    }
};

export { iniRenderer };
