"use strict";

console.log("gallery.js...");

const alignmentTypesTop = ["top", "start", "flex-start"];
const alignmentTypesBottom = ["bottom", "end", "flex-end"];
const alignmentTypesCenter = ["center", "centre", "middle"];
const validUnits = ["px", "vh", "vw", "em", "rem", "%"];
const marginLeft = "left";
const marginRight = "right";
const marginTop = "top";
const marginBottom = "bottom";
class Row {
  constructor(columns, height) {
    this.columns = columns;
    this.height = height.slice(0, height.length - 2);
    this.items = [];

    this.element = document.createElement("div");
    this.element.style.display = "flex";
    this.element.style.flexDirection = "row";
    this.element.style.backgroundColor = "white";
    this.element.style.width = "100%";
    this.element.style.gap = "5px";
    this.h_unit = height[height.length - 2] + height[height.length - 1];

    for (let i = 0; i < columns; i++) {
      let temp_item = new Item(this.height + this.h_unit);

      this.items.push(temp_item);
      this.element.append(temp_item.element);
    }
  }

  addPadding(padding, direction) {
    if (typeof padding === "string") {
      for (const unit of validUnits) {
        if (padding.includes(unit)) {
          if (direction) {
            if (direction === marginTop) {
              this.element.style.paddingTop = padding;
              break;
            } else if (direction === marginBottom) {
              this.element.style.paddingBottom = padding;
              break;
            } else if (direction === marginLeft) {
              this.element.style.paddingLeft = padding;
              break;
            } else if (direction === marginRight) {
              this.element.style.paddingRight = padding;
              break;
            }
          } else {
            this.element.style.padding = padding;
            break;
          }
        }
      }

      // this.element.style.width = "100%";
      // for (const item of this.items) {
      //   item.element.style.flexGrow = "1";
      // }
    } else {
      console.log(
        `invalid margin type or unit type: ${margin} ${typeof margin}`
      );
      console.log(`valid unit types include ${validUnits}`);
    }
  }

  alignRow(direction) {
    if (alignmentTypesTop.includes(direction.toLowerCase())) {
      this.element.style.alignItems = "flex-start";
    } else if (alignmentTypesBottom.includes(direction.toLowerCase())) {
      this.element.style.alignItems = "flex-end";
    } else if (alignmentTypesCenter.includes(direction.toLowerCase())) {
      this.element.style.alignItems = "center";
    }
  }

  changeGap(gap) {
    if (typeof gap === "string") {
      for (const unit of validUnits) {
        if (gap.includes(unit)) {
          this.element.style.gap = gap;
          break;
        }
      }
    } else {
      console.log(`invalid gap type or unit type: ${gap} ${typeof gap}`);
      console.log(`valid unit types include ${validUnits}`);
    }
  }

  addHoverAnimation(type) {

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].addEventListener(type);
      this.items[i].hasListner = true;
    }
  }

  fixRow() {
    this.element.style.height = this.height * 1.5 + this.h_unit;
    console.log("this is the height: ", this.element.style.height)
  }

  addImage(itemNum, url) {
    if (itemNum < this.items.length) {
      this.items[itemNum].element.style.backgroundImage = "url('" + url + "')";
      this.items[itemNum].element.style.backgroundPosition = "center center";
      this.items[itemNum].element.style.backgroundRepeat = "no-repeat";
      this.items[itemNum].element.style.backgroundSize = "cover";
    }
  }
}

class Item {
  constructor(height) {
    this.height = height.slice(0, height.length - 2);
    this.width = 1;

    this.element = document.createElement("div");
    this.element.style.height = height;
    this.element.style.flexGrow = "1";
    this.element.style.flexBasis = "0";
    this.element.style.backgroundColor = "cyan";
    this.hasListner = false;
    this.h_unit = height[height.length - 2] + height[height.length - 1];
  }

  addEventListener(type) {
    // if (this.hasListner) {
    //   return null;
    // }
    if (type.toLowerCase() === "width") {
      this.element.addEventListener("mouseover", () => {
        $(this.element).animate({ flexGrow: this.width * 2 }, 200);
        // log(this.order);
      });
      this.element.addEventListener("mouseout", () => {
        $(this.element).animate({ flexGrow: this.width }, 200);
        // log(this.order);
      });
    } else if (type.toLowerCase() === "height") {
      this.element.addEventListener(
        "mouseover",
        () => {
          $(this.element).animate(
            { height: this.height * 1.5 + this.h_unit },
            200
          );
          // console.log("am i getting here?");
          // console.log(this.height)
          // console.log(this.height * 1.5 + this.h_unit);
        },
        true
      );

      this.element.addEventListener(
        "mouseout",
        () => {
          $(this.element).animate({ height: this.height + this.h_unit }, 200);
          //   console.log(this.order);
        },
        true
      );
    } else if (type.toLowerCase() === "round") {
      this.element.addEventListener("mouseover", () => {
        $(this.element).animate({ borderRadius: "150px" }, 200);
      });
      this.element.addEventListener("mouseout", () => {
        $(this.element).animate({ borderRadius: "0px" }, 200);
        // log(this.order);
      });
    } else if (type.toLowerCase() === "combo") {
      this.element.addEventListener("mouseover", () => {
        $(this.element).animate(
          {
            flexGrow: this.width * 2,
            height: this.height * 1.75 + this.h_unit,
          },
          200
        );
      });
      this.element.addEventListener("mouseout", () => {
        $(this.element).animate(
          { flexGrow: this.width, height: this.height + this.h_unit },
          200
        );
      });
    }
  }
}

export default Row;
