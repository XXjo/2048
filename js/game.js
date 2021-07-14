/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-01 10:59:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-14 14:05:20
 */
class Game {
    constructor(view) {
        this.view = view;
        this.isRandom = false;
        this.start();
        // this.data = [
        //     {value: 2, index: 0},
        //     {value: 0, index: 1},
        //     {value: 0, index: 2},
        //     {value: 2, index: 3},
        //     {value: 0, index: 4},
        //     {value: 0, index: 5},
        //     {value: 0, index: 6},
        //     {value: 0, index: 7},
        //     {value: 0, index: 8},
        //     {value: 0, index: 9},
        //     {value: 0, index: 10},
        //     {value: 0, index: 11},
        //     {value: 0, index: 12},
        //     {value: 0, index: 13},
        //     {value: 0, index: 14},
        //     {value: 0, index: 15},
        // ]
    }

    start() {
        if(!localStorage.data) {
            this.score = this.initScore();
            this.best = 0;
            this.data = this.initData(16);
            this.appearRandomData();
            this.appearRandomData();
        }
        else {
            this.data = localStorage.data;
            this.score = localStorage.score;
            this.best = localStorage.best;
        }
        this.view.updateView(this.data, this.score, this.best);
    }

    initData(total) {
        let data = [];
        for(let i = 0; i < total; i++) {
            data.push({
                value: 0,
                index: i
            })
        }
        return data;
    }

    initScore() {
        return 0;
    }

    move(rawData) {
        let loop = rawData.length;
        while(loop > 1) {
            for(let i = 0; i < rawData.length - 1; i++) {
                if(rawData[i].value === 0 && rawData[i + 1].value !== 0) {
                    rawData[i].value = rawData[i + 1].value;
                    rawData[i + 1].value = 0;
                    this.isRandom = true;
                }
            }
            loop--;
        }
    }

    merge(rawData) {
        let loop = rawData.length;
        while(loop > 1) {
            for(let i = 0; i < rawData.length - 1; i++) {
                if(rawData[i].value === 0) {
                    continue;
                }
                let zeroNum = 0;
                for(let j = i + 1; j < rawData.length; j++) {
                    if(rawData[j].value === 0) {
                        zeroNum += 1;
                    }
                    else if(rawData[i].value === rawData[j].value && zeroNum === j - i - 1) {
                        rawData[i].value = 2 * rawData[i].value;
                        rawData[j].value = 0;
                        this.score += 2 * rawData[i].value;
                        this.isRandom = true;
                    }
                }
            }
            loop -= 1;
        }
    }

    getRandomPos() {
        let candidatePos = []
        this.data.forEach((ele, index) => {
            if(ele.value === 0) {
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
        return Math.random() > 0.9 ? 4 : 2;
    }

    appearRandomData() {
        let pos = this.getRandomPos()
        if(pos !== undefined) {
            this.view.appearValue(this.getRandomVal(), pos);
            this.data[pos].value = this.getRandomVal();
        }
    }

    operateByDirection(direction, indexs) {
        this.isRandom = false;
        let loopnum = indexs[direction].num;
        let new_data = [];
        for (let i = 0; i < loopnum; i++) {
            let index_array;
            if(direction === "up" || direction === "down") {
                index_array = indexs[direction].init.map(ele => ele + i);
            }
            else if(direction === "left" || direction ==="right") {
                index_array = indexs[direction].init.map(ele => ele + loopnum * i);
            }
            let subdata = JSON.parse(JSON.stringify(this.data.filter(ele => index_array.includes(ele.index))));
            if(direction === "up" || direction === "left") {
                subdata.sort((a, b) => a["index"] - b["index"]); //升序
            }
            else if(direction === "down" || direction === "right") {
                subdata.sort((a, b) => b["index"] - a["index"]); //降序
            }
            this.merge(subdata);
            this.move(subdata);
            new_data = [...new_data, ...subdata];
        }
        this.data = new_data;
        this.data.sort((a, b) => a["index"] - b["index"]);
        this.best = this.score > this.best ? this.score : this.best;
        this.view.updateView(this.data, this.score, this.best);
        this.isRandom ? this.appearRandomData() : "";
        //存储数据，以防页面关闭时找回数据
        // localStorage.data = this.data;
        // localStorage.score = this.score;
        // localStorage.best = this.best;
    }


}



export default Game;
