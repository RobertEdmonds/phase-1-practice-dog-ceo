console.log('%c HI', 'color: firebrick')
function upload(pic){
    let img = document.createElement('img')
    img.src = pic 
    document.querySelector('#dog-image-container').append(img)
}
function dogName(name){
    let list = document.createElement('li')
    list.textContent = name
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
        console.log(json)
        const dog = Object.values(json)[0]
        dog.message.forEach(dogName)
        // if(dog.values > [0]){
        //     return Array.from(dog)
        // }
        // dog.forEach(dogName)
    })
    console.log(breedUrl)
        
    return (breedUrl, imgUrl)

}
renderPage()