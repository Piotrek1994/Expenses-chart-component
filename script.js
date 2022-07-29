const diagram = document.querySelector('.diagrams')
const charts = document.querySelectorAll('.chart')

function openPrice() {

		closePirce()
		this.firstElementChild.classList.toggle('active')
	
}

const closePirce = () => {

	charts.forEach(item => item.classList.remove('active'))
}

charts.forEach(chart => chart.addEventListener('click', openPrice))

console.log(charts)
