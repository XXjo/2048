/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-07 16:30:34
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-12 13:20:43
 */
import indexs from "./config.js";
import View from "./view.js";
import Game from "./game.js";

let view = new View();
let game = new Game(view);

window.addEventListener("keydown", (e) => {
    console.log(e);
    //e.preventDefault(); //取消方向键的默认行为
    let direction = -1;
    if(e.key === "ArrowUp") {
        direction = "up";
    }
    else if(e.key === "ArrowRight") {
        direction = "right";
    }
    else if(e.key === "ArrowDown") {
        direction = "down";
    }
    else if(e.key === "ArrowLeft") {
        direction = "left";
    }
    game.operateByDirection(direction, indexs);
    
})