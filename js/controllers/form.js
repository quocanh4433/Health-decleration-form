import { Info } from "../models/Info.js";

let btnNext = document.querySelector('a[href="#finish"]');
btnNext.setAttribute('id', 'themThongTin');

document.querySelector("#themThongTin").onclick = () => {

    let info = new Info;
    let arrInput = document.querySelectorAll(".form-group input, .form-group select, .form-date input");
    let valid = true;

    for (let input of arrInput) {
        let {name, value} = input;
        info = {...info, [name]:value}
    }

    info.themInfo(info);
    info.renderInfo("tableInfo");
}



