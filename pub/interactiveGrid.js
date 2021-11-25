"use strict";
const log = console.log;
log("interactiveGrid.js");

let link = document.createElement("link");

link.rel = "stylesheet";
link.type = "text/css";
link.href = "../pub/interactiveGrid.css";


const body = document.querySelector('body')

function Row(num_items, row_height, slider) {
    this.row = document.createElement('div');
    this.row.style.display = "flex";
    this.row.style.marginTop = "2vh";
    this.items = [];
    this.num_items = num_items;
    this.height = row_height
    this.slider = null;
    this.reset = null;
    this.min = "10";
    this.max = "100";

    this.sliderContainer = document.createElement('div');
    if (slider){
        this.addHeightSlider();
        this.sliderContainer.append(this.slider);
        this.sliderContainer.append(this.reset);
    }

    let temp_item;
    let id = "id-";
    
    for(let i = 0; i < num_items; i++){
        temp_item = new Item(this.height);
        temp_item.item.id = id + num_items;
        temp_item.order = i;
        temp_item.item.style.order = ""+i;
        temp_item.addEventListener();
        this.items.push(temp_item);
        this.row.append(temp_item.item);
    }
    body.append(this.sliderContainer);
    body.append(this.row);
}

Row.prototype = {
    addBackground: function(item_num, url) {
        if (item_num < this.items.length) {
            this.items[item_num].item.style.backgroundImage = "url('" + url + "')";
            this.items[item_num].item.style.backgroundPosition = "center center";
            this.items[item_num].item.style.backgroundRepeat = "no-repeat";
            this.items[item_num].item.style.backgroundSize = "cover";
        }
    },
    setMinMaxHeight: function(min, max){
        // Currently doesn't work as we are creating the slider earlier -> change attribute here? -> didnt work
        this.min = min;
        this.max = max;

        this.slider.min = this.min;
        this.slider.max = this.max;
    },
    addHeightSlider: function() {
        this.sliderContainer.style.display = "block";
        this.sliderContainer.style.width = "100%";
        this.sliderContainer.style.padding = "20px";

        this.reset = document.createElement("input");
        this.reset.setAttribute("type", "button");
        this.reset.setAttribute("value", "reset")

        this.slider = document.createElement("input");
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("value", this.height);
        this.slider.min = this.min;
        this.slider.max = this.max;

        this.slider.addEventListener("input", () => {
            for (let i = 0; i < this.items.length; i++){
                this.items[i].changeHeight(this.slider.value + "vh");
            }
        });

        this.reset.addEventListener("click", () => {
            this.slider.value = this.height;
            for (let i = 0; i < this.items.length; i++){
                log(this.height);
                this.items[i].changeHeight(this.height);
            }
        });
    },
    addWidthSlider: function(num_item) {
        this.items[num_item].addWidthSlider();
    },
    reverseOrder: function() {
        for (let i = 0; i < this.items.length; i++){
            this.items[i].order = this.items.length - (i + 1);
            this.items[i].item.style.order = "" + this.items[i].order;
        }
    },
    changeOrder: function(new_order) {
        if (new_order.length === this.items.length){
            for (let i = 0; i < this.items.length; i++){
                this.items[i].order = new_order[i];
                this.items[i].item.style.order = "" + new_order[i];
            }
        }
    },
    changeWidths: function(new_widths) {
        if (new_widths.length === this.items.length){
            for (let i = 0; i < this.items.length; i++){
                this.items[i].changeWidth(new_widths[i]);
            }
        }
    }
}

function Item(height) {
    this.item = document.createElement('div');
    this.item.classList.add("item");
    log(this.item.classList);
    this.order = 0;
    this.width = 1;
    this.item.style.flexGrow = "1";
    this.item.style.backgroundColor = "rebeccapurple";
    this.item.style.height = height;
    this.item.style.borderRadius = "20px";
    this.item.style.marginLeft = "10px";
    this.item.style.marginRight = "10px";
    this.hasWidthSlider = false;
    this.slider = null;    
}

Item.prototype = {
    addEventListener: function() {
        if (this.hasWidthSlider == false){
            this.item.addEventListener("mouseover", () => {
                $(this.item).animate({flexGrow: this.width * 2}, 200);
                log(this.order);
            });
            this.item.addEventListener("mouseout", () => {
                $(this.item).animate({flexGrow: this.width}, 200);
                log(this.order);
            });
        }
    },
    changeHeight: function(new_height){
        this.item.style.height = new_height + "";
    },
    changeWidth: function(new_width){
        this.item.style.flexGrow = new_width + "";
        this.width = new_width;
    },
    addWidthSlider: function() {
        this.hasWidthSlider = true;
        this.item.removeEventListener("mouseover", () => {
            this.item.style.flexGrow = (this.width * 2) + "";
            log(this.order);
        });
        this.item.removeEventListener("mouseout", () => {
            this.item.style.flexGrow = this.width + "";
            log(this.order);
        });
        this.slider = document.createElement("input");
        this.slider.setAttribute("type", "range");
        this.slider.min = "1";
        this.slider.max = "8";

        this.item.append(this.slider);

        this.slider.addEventListener("input", () => {
            this.changeWidth(this.slider.value);
        });


    }
}