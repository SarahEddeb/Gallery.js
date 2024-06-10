# Gallery.js

`gallery.js` is a JavaScript library for creating customizable image galleries. This library allows you to define rows of images with various configurations such as the number of columns, height, padding, alignment, hover animations, and gaps between items.

## Installation

You can install the library via npm:

```sh
npm install gallery.js
```

## Usage

### Importing the Library
To use gallery.js in your project, you need to import the Row class:

```sh
import Row from 'gallery.js';
```

### Creating a Row

You can create a new row by instantiating the Row class and passing a configuration object. The configuration object can have the following properties:

* `columns`: The number of columns in the row.
* `height`: The height of each item in the row (e.g., "300px").
* `gap`: The gap between items (e.g., "5px").
* `padding`: An object specifying the padding value and direction (e.g., { value: '10px', direction: 'x' }).
* `alignment`: The vertical alignment of items in the row (e.g., "top", "bottom", "center").
* `hoverAnimation`: The type of hover animation (e.g., "width", "height", "round", "combo").
* `fixedHeight`: A boolean to set a fixed height for the row.
* `images`: An array of image URLs to be added to the row.


**Example**
```sh
const rowConfig = {
  columns: 4,
  height: "300px",
  gap: "10px",
  padding: { value: "20px", direction: "x" },
  alignment: "center",
  hoverAnimation: "height",
  fixedHeight: true,
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
  ]
};

const myRow = new Row(rowConfig);
document.body.appendChild(myRow.element);
```

## API

**Row Class**
* `constructor(config)`: Initializes a new row with the given configuration.
* `addPadding(padding, direction)`: Adds padding to the row.
* `alignRow(direction)`: Aligns the items in the row vertically.
* `changeGap(gap)`: Changes the gap between items in the row.
* `addHoverAnimation(type)`: Adds hover animation to the items in the row.
* `fixRow()`: Sets a fixed height for the row.
* `addImage(itemNum, url)`: Adds an image to a specific item in the row.

**Item Class**
* `constructor(height)`: Initializes a new item with the given height.
* `addEventListener(type)`: Adds an event listener for hover animations.

### Configuration Details

**Padding**
* `value`: The padding value (e.g., "10px").
* `direction`: The direction of the padding. Possible values are "top", "bottom", "left", "right", "x" (horizontal), "y" (vertical).

**Alignment**
* `top`, `start`, `flex-start`: Align items to the top.
* `bottom`, `end`, `flex-end`: Align items to the bottom.
* `center`, `centre`, `middle`: Align items to the center.

**Hover Animations**
* `width`: Increase the width of the item on hover.
* `height`: Increase the height of the item on hover.
* `round`: Round the corners of the item on hover.
* `combo`: Combination of width and height increase on hover.

## Examples
**Basic Example**
```sh
const basicRow = new Row({
  columns: 3,
  height: "200px",
  gap: "5px",
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ]
});

document.body.appendChild(basicRow.element);
```

**Advanced Example**
```sh
const advancedRow = new Row({
  columns: 5,
  height: "250px",
  gap: "10px",
  padding: { value: "15px", direction: "y" },
  alignment: "bottom",
  hoverAnimation: "combo",
  fixedHeight: true,
  images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ]
});

document.body.appendChild(advancedRow.element);
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.



