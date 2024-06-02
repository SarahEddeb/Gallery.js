let div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

let header = document.createElement('h2')
header.textContent = "The Basics"

div.append(header)
body.append(div)

let basic_row = new Row(4, "35vh")
basic_row.addHoverAnimation("width")
basic_row.changeBorderRadius(1)
basic_row.addBackgroundColorAll("cyan")


let p = document.createElement('p')
p.classList.add("header-div")
let code = document.createElement('code')
code.textContent = "let row = new Row(4, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addHoverAnimation('width')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeBorderRadius(1)"
p.append(code)
body.append(p)

////////////////
div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Changing Width"

div.append(header)
body.append(div)

let width_row = new Row(4, "30vh")
width_row.changeWidths([1,4,1,1])
width_row.addHoverAnimation("round")
width_row.addBackgroundColorAll("cyan")

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '30vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeWidths([1,4,1,1])"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addHoverAnimation('round')"
p.append(code)
body.append(p)

////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Changing Width"

div.append(header)
body.append(div)

let width_row1 = new Row(4, "30vh")
width_row1.addHoverAnimation("round")
width_row1.addBackgroundColorAll("cyan")
width_row1.setRowWidth("60%")

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '30vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.setRowWidth('60%')"
p.append(code)
body.append(p)

////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Changing Heights"

div.append(header)
body.append(div)

let ch_row = new Row(5, "35vh")
ch_row.changeHeights([1,1.5,2,1.5,1])
ch_row.addHoverAnimation("height")
ch_row.addBackgroundColorAll("cyan")


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(5, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeHeights([1,1.5,2,1.5,1])"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addHoverAnimation('height')"
p.append(code)
body.append(p)

////////////////


div = document.createElement('div')
div.classList.add("methods")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Change Alignment - Center"

div.append(header)
body.append(div)

let ch_row1 = new Row(5, "35vh")
ch_row1.changeHeights([1,1.5,2,1.5,1])
ch_row1.addHoverAnimation("height")
ch_row1.changeAligment("center")
ch_row1.addBackgroundColorAll("cyan")


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeAligment('center')"
p.append(code)
body.append(p)

////////////////

div = document.createElement('div')
div.classList.add("methods")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Change Alignment - Bottom"

div.append(header)
body.append(div)

let ch_row2 = new Row(5, "35vh")
ch_row2.changeHeights([1,1.5,2,1.5,1])
ch_row2.addHoverAnimation("height")
ch_row2.changeAligment("bottom")
ch_row2.addBackgroundColorAll("cyan")


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeAligment('bottom')"
p.append(code)
body.append(p)


////////////////
div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Adding Background Images"

div.append(header)
body.append(div)

let img_row = new Row(4, "35vh")
img_row.changeWidths([1,4,1,1])
img_row.addHoverAnimation("combo")
img_row.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row.addBackgroundImgFix(0)
img_row.addBackgroundImgFix(2)
img_row.addBackgroundImgFix(3)



p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeWidths([1,4,1,1])"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addHoverAnimation('combo')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let url = 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImg(0, url)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImg(1, url)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImg(2, url)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImg(3, url)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImgFix(0)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImgFix(2)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundImgFix(3)"
p.append(code)
body.append(p)

////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Reverse Order"

div.append(header)
body.append(div)

let img_row1 = new Row(4, "35vh")
img_row1.changeWidths([1,4,1,1])
img_row1.addHoverAnimation("combo")
img_row1.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1.addBackgroundImgFix(0)
img_row1.addBackgroundImgFix(2)
img_row1.addBackgroundImgFix(3)
img_row1.reverseOrder()


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.reverseOrder()"
p.append(code)
body.append(p)


////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Change Order"

div.append(header)
body.append(div)

let img_row11 = new Row(4, "35vh")
img_row11.changeWidths([1,4,1,1])
img_row11.addHoverAnimation("combo")
img_row11.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11.addBackgroundImgFix(0)
img_row11.addBackgroundImgFix(2)
img_row11.addBackgroundImgFix(3)
img_row11.changeOrder([2,3,0,1])


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeOrder([2,3,0,1])"
p.append(code)
body.append(p)


////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Add Height Slider"

div.append(header)
body.append(div)

let img_row11266 = new Row(4, "75vh", true)
img_row11266.changeWidths([1,4,1,1])
img_row11266.addHoverAnimation("width")
img_row11266.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11266.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11266.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11266.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11266.addBackgroundImgFix(0)
img_row11266.addBackgroundImgFix(2)
img_row11266.addBackgroundImgFix(3)
img_row11266.changeOrder([2,3,0,1])


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '35vh', true)"
p.append(code)
body.append(p)


////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Set Margins"

div.append(header)
body.append(div)

let img_row112 = new Row(4, "35vh")
img_row112.changeWidths([1,4,1,1])
img_row112.addHoverAnimation("width")
img_row112.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row112.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row112.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row112.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row112.addBackgroundImgFix(0)
img_row112.addBackgroundImgFix(2)
img_row112.addBackgroundImgFix(3)
img_row112.changeXMargins(4)

let img_row1123 = new Row(4, "35vh")
img_row1123.changeWidths([1,4,1,1])
img_row1123.addHoverAnimation("width")
img_row1123.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1123.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1123.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1123.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row1123.addBackgroundImgFix(0)
img_row1123.addBackgroundImgFix(2)
img_row1123.addBackgroundImgFix(3)
img_row1123.changeXMargins(4)
img_row1123.changeYMargins(1)


p = document.createElement('p')
p.classList.add("header-div")
p.textContent = "We will be skipping adding background images in this section as it has already been demonstrated above"
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeXMargins(4)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row2 = new Row(4, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row1.changeXMargins(4)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row1.changeYMargins(1)"
p.append(code)
body.append(p)


////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Set Margins"

div.append(header)
body.append(div)

let img_row11255 = new Row(4, "35vh")
img_row11255.changeWidths([1,4,1,1])
img_row11255.addHoverAnimation("width")
img_row11255.addBackgroundImg(0, 'https://images.unsplash.com/photo-1635333496622-1df7af1d392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')
img_row11255.addBackgroundImg(1, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11255.addBackgroundImg(2, 'https://images.unsplash.com/photo-1635333496622-1df7af1d392c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')
img_row11255.addBackgroundImg(3, 'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')
img_row11255.addBackgroundImgFix(0)
img_row11255.addBackgroundImgFix(2)
img_row11255.addBackgroundImgFix(3)
img_row11255.removeMargins()
img_row11255.changeBorderRadius(0)


p = document.createElement('p')
p.classList.add("header-div")
p.textContent = "We will be skipping adding background images in this section as it has already been demonstrated above"
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(4, '35vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.removeMargins()"
p.append(code)
body.append(p)


////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Change Individual Background Colors"

div.append(header)
body.append(div)

let col_row = new Row(5, "25vh")
col_row.addHoverAnimation("width")
// col_row.changeXMargins(2)
col_row.changeBorderRadius(1)
col_row.addBackgroundColor(0, "#19e0ff")
col_row.addBackgroundColor(1, "#19b2ff")
col_row.addBackgroundColor(2, "#1944ff")
col_row.addBackgroundColor(3, "#4019ff")
col_row.addBackgroundColor(4, "#7119ff")


p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "let row = new Row(5, '25vh')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addHoverAnimation('width')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeXMargins(2)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "col_row.addBackgroundColor(0, '#19e0ff')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "col_row.addBackgroundColor(1, '#19b2ff')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "col_row.addBackgroundColor(2, '#1944ff')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "col_row.addBackgroundColor(3, '#4019ff')"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "col_row.addBackgroundColor(4, '#7119ff')"
p.append(code)
body.append(p)

////////////////

div = document.createElement('div')
div.classList.add("method")
div.classList.add("header-div")

header = document.createElement('h2')
header.textContent = "Change All Background Colors"

div.append(header)
body.append(div)

let col_row1 = new Row(5, "25vh")
col_row1.addHoverAnimation("width")
// col_row1.changeXMargins(2)
col_row1.changeBorderRadius(50)
col_row1.addBackgroundColorAll("#19e0ff")



p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.changeBorderRadius(50)"
p.append(code)
body.append(p)

p = document.createElement('p')
p.classList.add("header-div")
code = document.createElement('code')
code.textContent = "row.addBackgroundColorAll('#19e0ff')"
p.append(code)
body.append(p)


////////////////


