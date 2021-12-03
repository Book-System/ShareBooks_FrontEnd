export const planetChartData = {
    type: 'line',
    data: {
        labels: ['Ann' ,'B', 'C', 'D', 'E', 'T', 'H', 'Q'],
        datasets: [
            {
                label: 'Number of Moons',
                data: [0, 0, 1, 2, 25, 62, 3, 1],
                backgroundColor: [
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                    'rgba(54, 73, 93, .5)',
                ],
                borderColor: [
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                ],
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25
                }
            }]
        }
    }
}
export default planetChartData;