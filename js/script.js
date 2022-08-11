let url = "https://jsonplaceholder.typicode.com/photos"
let cont = document.querySelector(".contener")

for(let i = 0; i<= 12; i++){
  axios.get(url + "/" + i)
  .then(res => {
    if(res.status === 200 || res.status === 201){
      reload(res.data)
    }
  } )
  .catch(err => console.log(err))
}



  function reload(arr) {
    cont.innerHTML += `
        <div class="item">
            <h3>${arr.title}</h3>
            <img src="${arr.url}" alt="${arr.title}" height="100" />
        </div>
    `
    
  }