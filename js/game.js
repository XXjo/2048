/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-07-01 10:59:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-08 10:43:16
 */
class Game {
    constructor(view) {
        this.view = view;
        this.score = this.initScore();
        this.data = this.initData(16);
        this.getRamdomData();  
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

    getRamdomData() {
        let pos = this.getRandomPos()
        if(pos !== undefined) {
            this.data[pos].value = this.getRandomVal();
        }
    }

    processDataByDirection(direction, indexs) {
        let loopnum = indexs[direction].num;
        for (let i = 0; i < loopnum; i++) {
            let index_arry = indexs[direction].init.map(ele => ele + i);
            let subdata = this.data.filter(ele => index_arry.includes(ele.index));
            console.log(subdata);
        }
    }
}




