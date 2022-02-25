const toCurrency = price => {
     return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price);
};

document.querySelectorAll('.old-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
});

document.querySelectorAll('.new-price').forEach(node => {
    node.textContent = toCurrency(node.textContent);
});
    




