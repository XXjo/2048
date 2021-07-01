/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-01 10:59:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-01 17:55:44
 */
class Game {
    constructor() {
        this.score = this.initScore();
        this.data = this.initData(16);
    }

    initData(total) {
        let data = [];
        for(let i = 0; i < total; i++) {
            data.push({
                value: 1,
                index: i
            })
        }
        return data;
    }

    initScore() {
        return 0;
    }

    move() {

    }

    merge() {

    }

    getRandomPos() {
        let candidatePos = []
        this.data.forEach((ele, index) => {
            if(ele === 0) {
                candidatePos.push(index);
            }
        });
        if(candidatePos.length !== 0) {
            let pos = Math.round(Math.random() * (candidatePos.length - 1));
            return candidatePos[pos];
        }else {
            return;
        }
    }

    getRandomVal() {
        let candidateVal = [2 , 4];
        let index = Math.round(Math.random() * (candidateVal.length - 1));
        return candidateVal[index];
    }

}

let game = new Game();
console.log(typeof(game.getRamdonPos()));



