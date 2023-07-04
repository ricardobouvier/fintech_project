// Dados do gráfico
const meses = ['Dez', 'Jan', 'Fev', 'Mar', 'Abr'];
const dados = [50, 80, 60, 70, 90];

// Configurações do gráfico
const config = {
    type: 'line',
    data: {
        labels: meses,
        datasets: [{
            label: 'Elevado',
            data: dados,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverRadius: 6,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: '#fff',
        }]
    },
    options: {
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Meses'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Valores'
                }
            }
        }
    }
};

// Renderizar o gráfico
window.onload = function () {
    const ctx = document.getElementById('line-chart').getContext('2d');
    new Chart(ctx, config);
};
