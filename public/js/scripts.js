// Alto Contraste
function toggleContraste() {
    document.body.classList.toggle('contraste-alto');
}

// Gráfico
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('graficoDesemprego');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Taxa de Desemprego (%)',
                data: [12, 11.5, 11, 10.8, 10.5, 10.2],
                borderColor: '#004A80',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});