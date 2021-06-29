let products_content = document.querySelector(".products_content");
let offSet = 0;

document.querySelector(".btn_next").addEventListener("click", function () {
	offSet = offSet + 400;
	if (offSet > 1000 ) {
		offSet = 0;
	}

	products_content.style.left = -offSet + "px";
})

document.querySelector(".btn_prev").addEventListener("click", function () {
	offSet = offSet - 400;
	if (offSet < 0 ) {
		offSet = 800;
	}

	products_content.style.left = -offSet + "px";
})






let checkbox = document.querySelector(".checkbox");
let checkbox2 = document.querySelector(".checkbox2");
let checkbox3 = document.querySelector(".checkbox3");
let block_products = document.querySelector(".block_items");
let block_items_women = document.querySelector(".block_items_women");
let block_items_children = document.querySelector(".block_items_children");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
	if (block_products.classList.contains("hide")) {
		block_products.classList.remove("hide");	
	}

})

button.addEventListener("click", function () {
	if (block_items_women.classList.contains("hide")) {
		block_items_women.classList.remove("hide");	
	}

})

button.addEventListener("click", function () {
	if (block_items_children.classList.contains("hide")) {
		block_items_children.classList.remove("hide");	
	}

})

checkbox.addEventListener("click", function () {
	if (block_products.classList.contains("hide")) {
		block_products.classList.remove("hide");	
	}	else {
		block_products.classList.add("hide");
	}	


})



checkbox2.addEventListener("click", function () {
	if (!block_items_women.classList.contains("hide")) {
		block_items_women.classList.add("hide");	
	}	else {
		block_items_women.classList.remove("hide");
	}	


})

checkbox3.addEventListener("click", function () {
	if (!block_items_children.classList.contains("hide")) {
		block_items_children.classList.add("hide");	
	}	else {
		block_items_children.classList.remove("hide");
	}	


})