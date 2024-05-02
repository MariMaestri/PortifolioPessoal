const slider = document.querySelectorAll('.slider'); //VARIAVEL
const bntPrev = document.getElementById('prev-button'); //VARIAVEL
const btnNext = document.getElementById('next-button'); //VARIAVEL

let currentSlide = 0; //VARIAVEL

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0;
    } else{
        currentSlide++;
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1;
    } else{
        currentSlide--;
    }
    showSlider()
}


bntPrev.addEventListener('click', nextSlider);
btnNext.addEventListener('click', prevSlider);


function getProjects(){
    const urlGitHub = 'https://api.github.com/users/MariMaestri/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
    
    .then((response) => response.json())
    .then((response) => {
        loadingElement.style.display = 'none'
        showProjects(response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++){
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}


getProjects()