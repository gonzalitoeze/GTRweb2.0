const verMas = document.getElementById('productosdes');

verMas.addEventListener('click', () => {
    Swal.fire({
        title: 'Lo sentimos',
        text: ' En este momento no tenemos productos en esta sección',
        icon: 'warning'
    });    
})
