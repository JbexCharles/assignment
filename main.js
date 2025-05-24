//fruits prices and quantities
//small quantity
let sQuantity = 30;
const sAmount = sQuantity * 5;
//medium quantity
let mQuantity = 70;
const mAmount = mQuantity * 5
//large quantity
let lQuantity = 150;
const lAmount = lQuantity * 5

// fruits variables
const fruits = [
    {name: 'Apples',
        basket: [
            {size: 'small', quantity: sQuantity, price: sAmount},
            {size: 'meduim', quantity: mQuantity, price: mAmount},
            {size: 'large', quantity: lQuantity, price: lAmount},]},
    {name: 'Bananas',
        basket: [
            {size: 'small', quantity: sQuantity, price: sAmount},
            {size: 'meduim', quantity: mQuantity, price: mAmount},
            {size: 'large', quantity: lQuantity, price: lAmount},]},
    {name: 'Coconuts',
        basket: [
            {size: 'small', quantity: sQuantity, price: sAmount},
            {size: 'meduim', quantity: mQuantity, price: mAmount},
            {size: 'large', quantity: lQuantity, price: lAmount},]},
    {name: 'Dates',
        basket: [
            {size: 'small', quantity: sQuantity, price: sAmount},
            {size: 'meduim', quantity: mQuantity, price: mAmount},
            {size: 'large', quantity: lQuantity, price: lAmount},]},
    {name: 'Oranges',
        basket: [
            {size: 'small', quantity: sQuantity, price: sAmount},
            {size: 'meduim', quantity: mQuantity, price: mAmount},
            {size: 'large', quantity: lQuantity, price: lAmount},]}
];
//displaying fruits to table from Js
function displayTable(data){
    const table = document.getElementById('table-data');
    table.innerHTML = '';

    //data as instance of fruits
    data.forEach(entry => {
            table.innerHTML += `
            <tr>
                <td>${entry.name}</td>
                <td>${entry.size}</td>
                <td>${entry.quantity}</td>
                <td>${entry.price}</td>
            </tr>`;
        });
};
//search compare
function fruitsObjects(){
    let result = [];
    fruits.forEach(fruit => {
        fruit.basket.forEach(basData => {
            result.push({name: fruit.name,
                        size: basData.size,
                        quantity: basData.quantity,
                        price: basData.price}); 
        });
    });
    //remeber to unreturn result
    return result;  
};

function returnedSearch(){
    const query = document.getElementById('searchTextInput').value.toLowerCase();
    const arrangedData = fruitsObjects();
    const message = document.getElementById('Msg');
    message.style.display = 'none';
    
    const datas = arrangedData.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.size.toLowerCase().includes(query) ||
    item.quantity.toString().includes(query) ||
    item.price.toString().includes(query));

    if(datas.length > 0){
        message.style.display = 'flex';
        message.style.backgroundColor = '#6feb94';
        message.textContent = `Your search  '${query}' was sucessful, and returned the following`;
        displayTable(datas);
    }else{
        message.style.display = 'flex';
        message.textContent = `Your search  '${query}' is't on the list. Search Again.`;
        message.style.backgroundColor = '#eb6f6f';
        displayTable(arrangedData);
        }
    }

displayTable(fruitsObjects());