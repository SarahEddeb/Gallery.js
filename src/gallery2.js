"use strict";

console.log("gallery.js...");

class Row {
  constructor(columns, height) {
    this.columns = columns;
    this.height = height;
    this.items = [];

    this.element = document.createElement("div");
    this.element.style.display = "flex";
    this.element.style.flexDirection = "row";
    // this.element.style.height = height;
    this.element.style.backgroundColor = "green";
    this.element.style.width = "100%";
    this.element.style.gap = "5px";

    for (let i = 0; i < columns; i++) {
      let temp_item = new Item(this.height);

      this.items.push(temp_item);
      this.element.append(temp_item.element);
    }
  }

  addHoverAnimation(type) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].addEventListener(type);
      this.items[i].hasListner = true;
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
