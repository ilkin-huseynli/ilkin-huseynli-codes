function addProduct() {
    const category = document.getElementById('input1').value;
    const stock = document.getElementById('input2').value;
    const image = document.getElementById('input3').value;

    if (category === '' || stock === '' || image === '') {
        alert('Zəhmət olmasa bütün sahələri doldurun');
        return;
    }

    const code = "PRD-001";

    const tableBody = document.querySelector('table tbody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${code}</td>
        <td>${category}</td>
        <td>${stock}</td>
        <td><img src="${image}" alt="${category}" width="60"></td>
    `;

    tableBody.appendChild(newRow);

    
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
}