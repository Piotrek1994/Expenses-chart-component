const diagram = document.querySelector('.diagrams')
const charts = document.querySelectorAll('.chart')

function openPrice() {

    this.firstElementChild.classList.toggle('active')
}


charts.forEach(chart => chart.addEventListener('click', openPrice))

console.log(charts)
