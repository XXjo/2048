/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-07 16:30:34
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-13 17:33:34
 */
import indexs from "./config.js";
import View from "./view.js";
import Game from "./game.js";

let view = new View();
let game = new Game(view);

window.addEventListener("keydown", (e) => {
    //e.preventDefault(); //取消方向键的默认行为
    let direction = -1;
    if(e.key === "ArrowUp") {
        e.preventDefault();
        direction = "up";
    }
    else if(e.key === "ArrowRight") {
        e.preventDefault();
        direction = "right";
    }
    else if(e.key === "ArrowDown") {
        e.preventDefault();
        direction = "down";
    }
    else if(e.key === "ArrowLeft") {
        e.preventDefault();
        direction = "left";
    }
    game.operateByDirection(direction, indexs);
    
})