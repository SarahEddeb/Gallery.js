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
    this.row.style.flexDirection = "row";
    this.items = [];
    this.num_items = num_items;
    this.row.style.width = "80%"
    this.row.style.marginLeft = "10%"
    this.row.style.marginright = "10%"

    // this.height = row_height
    this.height = row_height.slice(0, row_height.length - 2);
    this.h_unit = row_height[row_height.length - 2] + row_height[row_height.length - 1];
    this.slider = null;
    this.reset = null;
    this.min = "10";
    this.max = "100";
    this.circle = false;

    this.sliderContainer = document.createElement('div');
    if (slider){
        this.addHeightSlider();
        this.sliderContainer.append(this.slider);
        this.sliderContainer.append(this.reset);
    }

    let temp_item;
    let id = "id-";
   
    // this.row.append(this.sliderContainer)
    for(let i = 0; i < num_items; i++){
        temp_item = new Item(this.height + this.h_unit);
        // temp_item.item.id = id + num_items;
        temp_item.order = i;
        temp_item.item.style.order = ""+i;
        // temp_item.addEventListener();
        this.items.push(temp_item);
        this.row.append(temp_item.item);
    }
    this.sliderContainer.style.marginLeft = this.row.style.marginLeft
    body.append(this.sliderContainer);
    body.append(this.row);
}

Row.prototype = {
    addHoverAnimation: function(type) {
        // this.row.style.alignItems = "center"
        for(let i = 0; i < this.items.length; i++){
            this.items[i].addEventListener(type);
            this.items[i].hasListner = true;
        }
    },
    setRowWidth: function(width) {
        this.row.style.width = width;
    },
    alignRow: function(direction) {
        this.row.style.float = direction;
    },
    changeAligment: function(type) {
        if (type.toLowerCase() === "top") {
            this.row.style.alignItems = "flex-start"
        } else if (type.toLowerCase() === "bottom") {
            this.row.style.alignItems = "flex-end"
        } else if (type.toLowerCase() === "center") {
            this.row.style.alignItems = "center"
        }
    },
    addBackgroundImg: function(item_num, url) {
        if (item_num < this.items.length) {
            this.items[item_num].item.style.backgroundImage = "url('" + url + "')";
            this.items[item_num].item.style.backgroundPosition = "center center";
            this.items[item_num].item.style.backgroundRepeat = "no-repeat";
            this.items[item_num].item.style.backgroundSize = "cover";
        }
    },
    addBackgroundImgFix: function(item_num) {
        if (item_num < this.items.length) {
            this.items[item_num].item.style.backgroundAttachment = "fixed";
        }  
    },
    addBackgroundColor: function(item_num, color) {
        if (item_num < this.items.length) {
            this.items[item_num].item.style.backgroundColor = color;
        }
    },
    addBackgroundColorAll: function(color) {
        for (let i = 0; i < this.items.length; i++){
            this.items[i].item.style.backgroundColor = color;
        }
    },
    removeMargins: function(){
        this.row.style.margin = "0";
        for (let i=0; i < this.items.length; i++) {
            this.items[i].removeMargins();
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
            // let unit = this.height[this.height.length - 2] + this.height[this.height.length - 1];
            for (let i = 0; i < this.items.length; i++){
                this.items[i].changeHeight(this.slider.value);
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
    reverseOrder: function() {
        this.row.style.flexDirection = "row-reverse"
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
    },
    changeHeights: function(new_heights) {
        if (new_heights.length === this.items.length){
            let h = this.height;
            for (let i = 0; i < this.items.length; i++) {
                if (new_heights[i] != 0 && new_heights[i] != 1) {
                    log("height ratios:")
                    log(new_heights[i])
                    h = this.height * new_heights[i];
                    log("new height:")
                    log(h)
                    this.items[i].changeHeight(h)
                }
            }
        }
    },
    changeBorderRadius: function(border_radius) {
        if (border_radius >= 0 && border_radius <= 100) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].setBorderRadius(border_radius)
            }
        }
    },
    changeXMargins: function(margin) {
        if (margin >= 0 && margin <= 20) {
            for (let i = 0; i < this.items.length; i++){
                this.items[i].changeXMargin(margin + "");
            }
        }
    },
    changeYMargins: function(margin) {
        if (margin >= 0 && margin <= 100) {
            this.row.style.marginTop = margin + "vh";
        }
    }
}

let item_id_count = 0;

function Item(height) {
    this.item = document.createElement('div');
    this.item.id = "item-" + item_id_count;
    item_id_count++;
    this.item.style.paddingTop = "10px";
    this.item.style.paddingLeft = "20px"
    this.item.style.paddingRight = "10px";
    this.item.classList.add("item");
    log(this.item.classList);
    this.order = 0;
    this.width = 1;
    this.item.style.flexGrow = "1";
    this.item.style.backgroundColor = "rebeccapurple";
    this.item.style.height = height;
    this.height = height.slice(0, height.length - 2);
    this.h_unit = height[height.length - 2] + height[height.length - 1];
    this.rounding = "20px";
    this.hasListner = false;

    // Default Styling -> Can be changed with other functions
    this.item.style.borderRadius = this.rounding;
    this.item.style.marginLeft = "10px";
    this.item.style.marginRight = "10px";
}

Item.prototype = {
    addEventListener: function(type) {
        if (this.hasListner){
            return null
        }
        if (type.toLowerCase() === "width"){
            this.item.addEventListener("mouseover", () => {
                $(this.item).animate({flexGrow: this.width * 2}, 200);
                log(this.order);
            });
            this.item.addEventListener("mouseout", () => {
                $(this.item).animate({flexGrow: this.width}, 200);
                log(this.order);
            });
        } else if (type.toLowerCase() === "height") {
            // document.addEventListener("DOMContentLoaded", function() {
                // log(this.item.id)
                // log(document.querySelector(this.item.id))
                this.item.addEventListener("mouseover", () => {
                    $(this.item).animate({height: (this.height * 1.5) + this.h_unit}, 200);
                    // event.preventDefault();
                    log("am i getting here?")
                    log(this.order);
                }, true);

                this.item.addEventListener("mouseout", () => {
                    $(this.item).animate({height: (this.height) + this.h_unit}, 200);
                    log(this.order);
                }, true);
            // })
           
            // this.item.addEventListener("mouseover", () => {
            //     $(this.item).animate({height: (this.height * 1.5) + this.h_unit}, 200);
            //     log("I am on the div")
            // });
            
            // this.item.addEventListener("mouseout", () => {
            //     $(this.item).animate({height: (this.height) + this.h_unit}, 200);
            //     log(this.order);
            // });
        } else if (type.toLowerCase() === "round") {
            this.item.addEventListener("mouseover", () => {
                $(this.item).animate({borderRadius: "150px"}, 200);
            });
            this.item.addEventListener("mouseout", () => {
                $(this.item).animate({borderRadius: this.rounding}, 200);
                log(this.order);
            });
        } else if (type.toLowerCase() === "combo") {
            this.item.addEventListener("mouseover", () => {
                $(this.item).animate({flexGrow: this.width * 2, height: (this.height * 1.75) + this.h_unit}, 200);
            });
            this.item.addEventListener("mouseout", () => {
                $(this.item).animate({flexGrow: this.width, height: (this.height) + this.h_unit}, 200);
            });
        }
    },
    setBorderRadius: function(border_radius) {
        this.rounding = border_radius + "0" + "px"
        this.item.style.borderRadius = this.rounding;
    },
    changeHeight: function(new_height){
        this.height = new_height 
        log("this is the items height")
        log(this.height)
        this.item.style.height = new_height + this.h_unit;
    },
    changeWidth: function(new_width){
        this.item.style.flexGrow = new_width + "";
        this.width = new_width;
    },
    changeXMargin: function(margin) {
        this.item.style.marginLeft = margin + "px";
        this.item.style.marginRight = margin + "px";
    },
    removeMargins: function(){
        this.item.style.margin = "0";
    },
    // addHeading(h_text) {
    //     let heading = document.createElement('h3')
    //     heading.textContent = h_text
    //     this.item.appendChild(heading)
    // }
}