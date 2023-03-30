const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38011e3f5bmsh67cf985cd7f0811p11a2a7jsn7da68eae1a14',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

console.log(fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err)));




