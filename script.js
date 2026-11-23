let cart = []
function add() {
    let Added_items = document.getElementById("items")
    let dislpalArea = document.getElementById("display")
    let item = Added_items.value.trim()
    if (item == "".trim()) {
        alert("No items selected");
        return;
    }
    cart.push(item);
    Added_items.value = "";
    dislpalArea.textContent = "";
    displayCart();

}

function displayCart() {
    let dislpalArea = document.getElementById("display");

    dislpalArea.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        dislpalArea.innerHTML +=
            '<div class="shopping-item">' +
            '<span class="item-number">' + (i + 1) + '</span>' +
            '<span class="item-name">' + cart[i] + '</span>' +
            '<button class="delete-item" type="button" onclick="deleteitem(' + i + ')" aria-label="Delete ' + cart[i] + '">' +
            '<svg viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M3 6h18"></path>' +
            '<path d="M8 6V4h8v2"></path>' +
            '<path d="M19 6l-1 14H6L5 6"></path>' +
            '<path d="M10 11v5M14 11v5"></path>' +
            '</svg>' +
            '</button>' +
            '</div>';
    }
}

function deleteLastItem() {
    cart.pop();
    displayCart();
}
function deleteAll() {
    cart = [];
    displayCart();
}
function deleteitem(index) {
    cart.splice(index, 1);
    displayCart();
    
}