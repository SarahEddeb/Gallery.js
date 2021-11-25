let h = document.createElement('h2');
h.textContent = "Creating a new row";
body.append(h);

let p = document.createElement('p');
p.textContent = "Start by creating a Row and specifying the number of items, height, and a boolean value (this will be explained later). Check out the animations when you hover over the grid."
body.append(p);

let p2 = document.createElement('p')
p2.textContent = "new Row(4, '35vh', false)";
body.append(p2);

let ex1 = new Row(4, "35vh", false);

let h2 = document.createElement('h2');
h2.textContent = "Add a background image";
body.append(h2);

let p3 = document.createElement('p');
p3.textContent = "Add a background image by using the function addBackground. Specify which gallery item to add the image to and pass in a url to an image as a string. This function automatically adjusts the size of the image to fit the gallery item perfectly.";
body.append(p3);

let p4 = document.createElement('p');
p4.textContent = "row.addBackground(0, '<url>')";
body.append(p4);

let ex2 = new Row(4, "35vh", false);
ex2.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
ex2.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex2.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex2.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

let h3 = document.createElement('h2');
h3.textContent = "Switch up the order";
body.append(h3);

let p5 = document.createElement('p')
p5.textContent = "There are multiple methods to play around with the order of the gallery items. We can reverse the order by using reverseOrder(). We can also change the order based on a list of new order values i.e [2,0,1,3]"
body.append(p5)

let p6 = document.createElement('p')
p6.textContent = "row.reverseOrder()"
body.append(p6)

let ex3 = new Row(4, "35vh", false);
ex3.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
ex3.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex3.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex3.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

ex3.reverseOrder()

let p7 = document.createElement('p')
p7.textContent = "row.changeOrder([2,0,1,3])"
body.append(p7)

let ex4 = new Row(4, "35vh", false);
ex4.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
ex4.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex4.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex4.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

ex4.changeOrder([2,0,1,3])

let h4 = document.createElement('h2');
h4.textContent = "Change item's width ratios";
body.append(h4);

let p8 = document.createElement('p')
p8.textContent = "Having equal sized item's can be boring sometimes. We can change the width ratio by passing in a list with the new ratio i.e. [1,4,1,1]"
body.append(p8)

let p9 = document.createElement('p')
p9.textContent = "row.changeWidths([1,4,1,1])"
body.append(p9)

let ex5 = new Row(4, "35vh", false);
ex5.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
ex5.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex5.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex5.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

ex5.changeWidths([1,4,1,1])

let h5 = document.createElement('h2');
h5.textContent = "Change row's height";
body.append(h5);

let p10 = document.createElement('p')
p10.textContent = "We can change the rows height by adding a height adjuster slider by setting the last value in the rows initializer to true. We can simply reset the rows height by clicking the button reset."
body.append(p10)

let ex6 = new Row(3, "35vh", true);

ex6.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
ex6.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
ex6.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');

let h6 = document.createElement('h2');
h6.textContent = "Pending features:";
body.append(h6);

let p11 = document.createElement('p')
p11.textContent = "Drag items to new order, vertical alignment using columns, text overlays on hover, and maybe some more :)"
body.append(p11)

let h7 = document.createElement('h2');
h7.textContent = "Putting it all together";
body.append(h7);

let row = new Row(1, "80vh", true);

row.addBackground(0, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80');


let row3 = new Row(3, "35vh", false);

row3.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
row3.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
row3.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');

row3.changeOrder([0,2,1]);

let row4 = new Row(4, "20vh", false);

row4.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
row4.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
row4.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
row4.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

let row4rev = new Row(4, "35vh", false);

row4rev.addBackground(0, 'https://images.unsplash.com/photo-1625671680827-fdc3014d516d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
row4rev.addBackground(1, 'https://images.unsplash.com/photo-1629872874038-b1d600221640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
row4rev.addBackground(2, 'https://images.unsplash.com/photo-1633684801944-e6f68e10e439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
row4rev.addBackground(3, 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3240&q=80')

row4rev.reverseOrder();
row4rev.changeWidths([2,1,1,2])