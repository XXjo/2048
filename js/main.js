/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-07 16:30:34
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-07 17:36:17
 */
let view = new View();
let game = new Game(view);

window.addEventListener("keydown", (e) => {
    console.log(e);
    let direction = -1;
    if(e.key === "ArrowUp") {
        direction = 0;
    }
    else if(e.key === "ArrowRight") {
        direction = 1;
    }
    else if(e.key === "ArrowDown") {
        direction = 2;
    }
    else if(e.key === "ArrowLeft") {
        direction = 3;
    }
})