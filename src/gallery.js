"use strict";

console.log("photo-gallery.js...");

const alignmentTypesTop = ["top", "start", "flex-start"];
const alignmentTypesBottom = ["bottom", "end", "flex-end"];
const alignmentTypesCenter = ["center", "centre", "middle"];
const validUnits = ["px", "vh", "vw", "em", "rem", "%"];
const marginLeft = "left";
const marginRight = "right";
const marginTop = "top";
const marginBottom = "bottom";

if (typeof jQuery === "undefined") {
  import("https://code.jquery.com/jquery-3.6.0.min.js")
    .then(() => {
      console.log("jQuery loaded");
    })
    .catch((err) => {
      console.error("Failed to load jQuery:", err);
    });
} else {
  console.log("jQuery already loaded");
}

class Row {
  constructor(config) {
    this.columns = config.columns;
    if (
      config.height &&
      typeof config.height === "string" &&
      config.height.length > 2
    ) {
      this.height = config.height.slice(0, config.height.length - 2);
      this.h_unit = config.height.slice(config.height.length - 2);
    } else {
      this.height = "300";
      this.h_unit = "px";
    }
    this.items = [];

    this.element = document.createElement("div");
    this.element.style.display = "flex";
    this.element.style.flexDirection = "row";
    this.element.style.width = "100%";
    this.element.style.gap = config.gap || "5px";
    this.element.style.boxSizing = "border-box";
    this.h_unit =
      config.height[config.height.length - 2] +
      config.height[config.height.length - 1];

    for (let i = 0; i < this.columns; i++) {
      let temp_item = new Item(this.height + this.h_unit);

      this.items.push(temp_item);
      this.element.append(temp_item.element);
    }

    if (config.padding) {
      this.addPadding(config.padding.value, config.padding.direction);
    }

    if (config.alignment) {
      this.alignRow(config.alignment);
    }

    if (config.hoverAnimation) {
      this.addHoverAnimation(config.hoverAnimation);
    }

    if (config.gap) {
      this.changeGap(config.gap);
    }

    if (config.fixedHeight) {
      this.fixRow();
    }

    if (config.images) {
      for (const [index, url] of config.images.entries()) {
        this.addImage(index, url);
      }
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
            } else if (direction === "x") {
              this.element.style.paddingRight = padding;
              this.element.style.paddingLeft = padding;
              break;
            } else if (direction === "y") {
              this.element.style.paddingTop = padding;
              this.element.style.paddingBottom = padding;
              break;
            }
          } else {
            this.element.style.padding = padding;
            break;
          }
        }
      }
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
    console.log("this is the height: ", this.element.style.height);
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
    this.animationSpeed = 200;

    this.element = document.createElement("div");
    this.element.style.height = height;
    this.element.style.flexGrow = "1";
    this.element.style.flexBasis = "0";
    this.element.style.backgroundColor = "cyan";
    this.hasListner = false;
    this.h_unit = height[height.length - 2] + height[height.length - 1];
  }

  addEventListener(type) {
    if (type.toLowerCase() === "width") {
      console.log("its working here");
      this.element.addEventListener("mouseover", () => {
        this.element.style.transition = `flex-grow ${this.animationSpeed}ms ease`;
        this.element.style.flexGrow = this.width * 2;
      });
      this.element.addEventListener("mouseout", () => {
        this.element.style.transition = `flex-grow ${this.animationSpeed}ms ease`;
        this.element.style.flexGrow = this.width;
      });
    } else if (type.toLowerCase() === "height") {
      this.element.addEventListener(
        "mouseover",
        () => {
          this.element.style.transition = `height ${this.animationSpeed}ms ease`;
          this.element.style.height = this.height * 1.5 + this.h_unit;
        },
        true
      );

      this.element.addEventListener(
        "mouseout",
        () => {
          this.element.style.transition = `height ${this.animationSpeed}ms ease`;
          this.element.style.height = this.height + this.h_unit;
        },
        true
      );
    } else if (type.toLowerCase() === "round") {
      this.element.addEventListener("mouseover", () => {
        this.element.style.transition = `border-radius ${this.animationSpeed}ms ease`;
        this.element.style.borderRadius = "150px";
      });
      this.element.addEventListener("mouseout", () => {
        this.element.style.transition = `border-radius ${this.animationSpeed}ms ease`;
        this.element.style.borderRadius = "0px";
      });
    } else if (type.toLowerCase() === "combo") {
      this.element.addEventListener("mouseover", () => {
        this.element.style.transition = `flex-grow ${this.animationSpeed}ms ease, height ${this.animationSpeed}ms ease`;
        this.element.style.flexGrow = this.width * 2;
        this.element.style.height = this.height * 1.75 + this.h_unit;
      });
      this.element.addEventListener("mouseout", () => {
        this.element.style.transition = `flex-grow ${this.animationSpeed}ms ease, height ${this.animationSpeed}ms ease`;
        this.element.style.flexGrow = this.width;
        this.element.style.height = this.height + this.h_unit;
      });
    }
  }
}

export default Row;
