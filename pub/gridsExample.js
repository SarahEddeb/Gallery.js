let basic_row = new Row(4, "35vh")

//body.append(document.createElement('h3').textContent=)
let ch_row = new Row(4, "35vh")
ch_row.changeHeights([1,1.5,1.5,1])


let b_row = new Row(5, "35vh")
b_row.changeBorderRadius(0)

let cw_row = new Row(4, "35vh")
cw_row.changeWidths([1,1,3,1])

let br_row = new Row(5, "35vh")
br_row.changeBorderRadius(15)

let ca_row = new Row(4, "35vh")
ca_row.changeHeights([1,1.5,1.5,1])
ca_row.changeAligment("center")

let bg_row = new Row(2, "35vh")
bg_row.addBackgroundImg(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
bg_row.addBackgroundImg(1, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');

let bgf_row = new Row(2, "35vh")
bgf_row.addBackgroundImg(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
bgf_row.addBackgroundImg(1, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');

bgf_row.addBackgroundImgFix(0)
bgf_row.addBackgroundImgFix(1)

let c_row = new Row(4, "35vh")

c_row.addBackgroundColor(0, "purple")
c_row.addBackgroundColor(2, "indigo")
c_row.addBackgroundColor(3, "violet")

let cAll_row = new Row(4, "35vh")

cAll_row.addBackgroundColorAll("azure")

let noM_row = new Row(4, "35vh")
noM_row.addBackgroundColor(0, "purple")
noM_row.addBackgroundColor(2, "indigo")
noM_row.addBackgroundColor(3, "violet")
noM_row.removeMargins()


let set_row = new Row(5, "35vh")

set_row.changeXMargins(20)
set_row.changeYMargins(5)


let slider_row = new Row(3, "40vh", true)

let wHover_row = new Row(4, "35vh")
wHover_row.addHoverAnimation("width")

let hHover_row = new Row(4, "35vh")
hHover_row.addHoverAnimation("height")


let cHover_row = new Row(4, "35vh")
cHover_row.addHoverAnimation("combo")

let bHover_row = new Row(4, "35vh")
bHover_row.changeBorderRadius(0)
bHover_row.addHoverAnimation("round")



// let one = document.getElementById('e1')
// let ex1 = new Row(5, "30vh");
// ex1.changeBorderRadius(0)
// ex1.changeAligment("bottom")
// // one.innerHTML += ex1
// document.getElementById('e1').append(ex1)
// // ex1.changeHeights([1,1.5,2,1.5,1])
// // ex1.addBackgroundImg(3, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
// // ex1.addBackgroundImgFix(3)
// ex1.addBackgroundColor(0, "rebeccapurple")
// ex1.setRowWidth("50%")
// ex1.alignRow("right")
// // ex1.addHeading(0, "This is a heading")
// // ex1.addHeading(0, "This is another heading")
// ex1.addHoverAnimation("height");


// let ex2 = new Row(5, "30vh");
// ex2.changeBorderRadius(0)
// ex2.addHoverAnimation("round");
// ex2.changeYMargins(2)
// ex2.addBackgroundColorAll("azure")
// // ex2.addBackgroundImg(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
// // ex2.addBackgroundImgFix(0)
// // ex2.addBackgroundImg(1, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
// // ex2.addBackgroundImgFix(1)


// let ex3 = new Row(5, "30vh");
// ex3.changeBorderRadius(0)
// ex3.changeAligment("top")
// ex3.addHoverAnimation("height");
// // ex3.changeHeights([1,1.5,2,1.5,1])
// // ex2.removeHover()
// //ex2.changeXMargins(5)
// // ex2.changeYMargins(10, 10)