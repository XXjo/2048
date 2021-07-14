/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-30 17:53:41
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-14 13:40:08
 */
class View {
    constructor() {
        this.domElements = document.querySelectorAll(".item");
        this.bestDiv = document.querySelector(".best-div .score");
        this.scoreDiv = document.querySelector(".score-div .score");
    }

    updateView(data, score, best) {
        data.forEach(ele => {
            this.domElements[ele.index].removeAttribute("data-val");
            this.domElements[ele.index].textContent = "";
            this.domElements[ele.index].setAttribute("data-val", ele.value);
            if(ele.value !== 0) {
                this.domElements[ele.index].textContent = ele.value;
                this.domElements[ele.index].classList.add("change");
            }
            setTimeout(() => {
                this.domElements[ele.index].classList.remove("change");
            }, 300);
        });
        this.scoreDiv.textContent = score;
        this.bestDiv.textContent = best;
    }

    appearValue(value, pos) {
        let appearDiv = this.domElements[pos];
        appearDiv.removeAttribute("data-val");
        appearDiv.classList.add("appear");
        appearDiv.textContent = value;
        appearDiv.setAttribute("data-val", value);
        setTimeout(() => {
            appearDiv.classList.remove("appear");
        }, 500);
    }
}

export default View;