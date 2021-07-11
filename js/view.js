/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-30 17:53:41
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-07-11 16:14:45
 */
class View {
    constructor() {
        this.domElements = document.querySelectorAll(".item");
    }

    updateView(data) {
        data.forEach(ele => {
            this.domElements[ele.index].removeAttribute("data-val");
            this.domElements[ele.index].textContent = "";
            this.domElements[ele.index].setAttribute("data-val", ele.value);
            if(ele.value !== 0) {
                this.domElements[ele.index].textContent = ele.value;
            }
        });
    }
}

