const btnAjax = document.getElementsByClassName('btn')[0]
const btnPromise = document.getElementsByClassName('btn')[1]
const btnAsync = document.getElementsByClassName('btn')[2]

function ajax(src, callback){
    // your code here
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(JSON.parse(xhr.response));
        }
    }
    xhr.open('GET', src, true);
    xhr.send('');
}

function promiseFunc(src){
    // your code here
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response));
            }
        }
    xhr.open('GET', src, true);
    xhr.send('');
    })
}

function render(data){
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    let s = document.createElement("ul");
    s.setAttribute("class",'hide')
    for(let i=0; i<data.length;i++){
        s.innerHTML += `<li> name: ${data[i].name}<br> price:${data[i].price} <br> description:${data[i].description} </li>`;
    }
    document.body.appendChild(s);
}



btnAjax.addEventListener("click", ()=>{
    ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products",
        function(response){
            console.log('render by ajax')
            render(response);
    }); // you should get product information in JSON format and render data in the page
});

btnPromise.addEventListener("click", ()=>{
    promiseFunc("https://appworks-school.github.io/Remote-Aassigiment-Data/products").then((data)=>{
        console.log('render by promise')
        render(data)
    }); 
});

btnAsync.addEventListener("click", async()=>{
    const data = await promiseFunc("https://appworks-school.github.io/Remote-Aassigiment-Data/products")
    console.log('render by async')
    render(data)     
});