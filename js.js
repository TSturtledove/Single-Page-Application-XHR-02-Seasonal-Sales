// var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
// var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
//
//
// var hohohoElement = document.getElementById("coloredReindeer").innerHTML;
//
// for(t=0; t<reindeer.length; t++) {
//   hohohoElement=hohohoElement + colors[t] + " " + reindeer[t] + ", "
//   console.log(hohohoElement)
// }
//
// hohohoElement
// console.log(hohohoElement)
//
// document.getElementById("coloredReindeer").innerHTML = hohohoElement;




// Your job is to build a web page that lists all of the products,
// the name of the department it's in, and the price.

//^ --for this I'm going to want to run a loop that goes through the
// array of products and prints them out.  I'll have to find some way
// to print out the cateory based on the number with the product.


//Additionally,
//  put a <select> element at the top of the page that contains all
//  possible values of the season_discount key in the categories file.
//   As soon as you select one of the seasons, all prices on the page
//   should immediately be discounted by the corresponding percentage.
// For example, when Spring is chosen, all products in the corresponding
// Household category should have their prices updated with a 15% discount
// off the base price.
//

//^ --this will be a little hard to make it effect the products.  Maybe
// add an if else loop cycle in the for loop to effect the prices as needed


// The two JSON representations above should be
// in two files: products.json, and categories.json.
// You should load both file via XHRs and store the contents in two
//  different JavaScript variables in your code.
