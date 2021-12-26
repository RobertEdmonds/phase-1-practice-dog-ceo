console.log('%c HI', 'color: firebrick')
function upload(pic){
    let img = document.createElement('img')
    img.src = pic 
    document.querySelector('#dog-image-container').append(img)
}
function dogName(name){
    let list = document.createElement('li')
    list.textContent = name
    list.addEventListener('click',changeColor)
    // console.log(document.querySelector('#breed-dropdown').value)
    list.addEventListener('onclick', dogMatch)
    document.querySelector('#dog-breeds').append(list)    
}
function changeColor(spot){
        if(spot.path[0].style.color == ""){
            console.log('color')
            spot.path[0].style.color = "red"
        }else{
            spot.path[0].style.color = ""
        }
    }
function dogMatch(array){
    let list = document.createElement('li')
    let target = document.querySelector('#breed-dropdown').value
    // array.filter(char =>char.slice(0, target.length) === target)
    target.addEventListener('submit', function(){
        if (array.slice(0, target.length) === target){
       return list.textContent = array}
    })
    
    console.log('click')
    console.log(list)
    document.querySelector('#dog-breeds').append(list)    
}


function renderPage(){
    const imgUrl = fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(json => {
        json.message.forEach(upload)
    })
    const breedUrl = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
        const obDog = Object.keys(json.message)
        // const dog = Object.values(json)
        // const dogList = Array.from(dog)
        obDog.filter(dogMatch)
        obDog.forEach(dogName)
        // obDog.filter(dogMatch)
    }) 
    return (breedUrl, imgUrl)


}
renderPage()