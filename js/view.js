/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-30 17:53:41
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-06 17:38:02
 */
class View {
    constructor() {
        this.domElements = document.querySelectorAll(".item");
    }

    updateView(data) {
        data.forEach(ele => {
            this.domElements[ele.index].setAttribute("data-val", ele.value);
            if(ele.value !== 0) {
                this.domElements[ele.index].textContent = ele.value;
            }
        });
    }
}
 let data = [
     {value: 0, index: 0},
     {value: 2, index: 1},
     {value: 4, index: 2},
     {value: 8, index: 5},
 ]

