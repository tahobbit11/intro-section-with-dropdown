const open = document.querySelector(".open");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

open.addEventListener("click", (e) => {
    sidebar.classList.add("show-sidebar");
});

close.addEventListener("click", (e) => {
    sidebar.classList.remove("show-sidebar");
})

const listedItem = document.querySelectorAll(".listed-item")

listedItem.forEach((list) => {
    list.addEventListener("click", (e) => {
        let element = e.currentTarget;
        const nestedList = element.querySelector(".nested-list");
        const upArrow = element.querySelector(".up-arrow");
        const downArrow = element.querySelector(".down-arrow");
        if(nestedList.classList.contains("show-nested-list")){
            upArrow.classList.add('hide-arrow');
            downArrow.classList.remove('hide-arrow');
            nestedList.classList.remove('show-nested-list');
        } else {
            upArrow.classList.remove('hide-arrow');
            downArrow.classList.add('hide-arrow');
            nestedList.classList.add('show-nested-list');
        }
    })
})