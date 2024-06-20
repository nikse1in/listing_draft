let selectedItems = [];
let totalCost = 0;

function selectListing(element, name, price) {
    // Deselect other listings
    document.querySelectorAll('.menu .item').forEach(item => {
        item.classList.remove('selected');
    });
    selectedItems = selectedItems.filter(item => item.type !== 'listing');

    // Select current listing
    element.classList.add('selected');
    addItem({ name, price, type: 'listing' });
    updateSelectedItems();
}

function selectItem(element, name, price) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        removeItem(name);
    } else {
        element.classList.add('selected');
        addItem({ name, price, type: 'extra' });
    }
    updateSelectedItems();
}

function addItem(item) {
    selectedItems.push(item);
    totalCost += item.price;
}

function removeItem(name) {
    const item = selectedItems.find(item => item.name === name);
    if (item) {
        selectedItems = selectedItems.filter(item => item.name !== name);
        totalCost -= item.price;
    }
}

function updateSelectedItems() {
    const selectedItemsList = document.getElementById('selected-items');
    selectedItemsList.innerHTML = '';
    selectedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        selectedItemsList.appendChild(li);
    });
    document.getElementById('total-cost').textContent = totalCost;
}

function checkout() {
    const paymentInfo = document.getElementById('payment-info');
    paymentInfo.innerHTML = `
        <p>Pay in USDC on Base: <0xCf0103dF4732B0e1a70cb17B605Eb103D954E57d</strong></p>
        <p>Pay in ETH on Base: <s0xCf0103dF4732B0e1a70cb17B605Eb103D954E57d</strong></p>
    `;
}