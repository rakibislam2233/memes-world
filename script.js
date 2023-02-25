const loadData = (searchValue) =>{
    const url = `https://meme-api.com/gimme/${searchValue}`
    fetch(url)
    .then(res =>res.json())
    .then((data) =>{
        document.getElementById("btn").classList.add("hidden");
        displayData(data.memes)})
}
const displayData = data =>{
    const containerDiv  =  document.getElementById("container");
    containerDiv.innerHTML = ''
    for(let datas of data){
        const title = datas.title;
        console.log(title);
    if(title.includes('irl') || datas.url == ''){
        console.log(datas.url);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-full md:w-96 h-96 card-compact bg-base-100 shadow-xl">
        <figure><img src="${datas.url?datas.url:'https://picsum.photos/200'}" alt="Memes Not Found" /></figure>
        <div class="card-body">
            <h2 id="name" class="card-title">Memes &#128514</h2>
        </div>
        </div>
        `
            containerDiv.appendChild(div)
    }
    else{
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-full md:w-96 h-96 card-compact bg-base-100 shadow-xl">
        <figure><img src="${datas.url?datas.url:'https://picsum.photos/200'}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 id="name" class="card-title">${datas.title}</h2>
        </div>
        </div>
        `
            containerDiv.appendChild(div)
       }
    }
   
    
}
const getMeme = () =>{
    const searchInput = document.getElementById("input");
    const inputValue = searchInput.value;
    if(inputValue === '' || isNaN(inputValue)){
        alert("Please Input Your Valid Number")
        searchInput.value = ''
    }else if(inputValue>50){
        alert("Memese Not Found")
        searchInput.value = ''
    }else{
        loadData(inputValue)
        searchInput.value = ''
        document.getElementById("btn").classList.remove("hidden")
    }
   
}
loadData('9')