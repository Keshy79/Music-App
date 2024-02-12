const fetchMe = () =>{

    }

    let url ='https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url).then(response => response.json()).then(convertedResponse => {
      convertedResponse.map((user)=>{
         console.log(user);
         show.innerHTML += `
         <div class="contain">
         <div class="name"> 
         <h3 class="id">${user.id}.<h3>
        <img src="${user.songImage}" alt="pix" style="height: 100px; width: 100px;"> 
        <h3 class="title">${user.songTitle}<br> <small>${user.artistName} </small></h3> 
        <audio class="url" src="${user.songUrl}" controls />
       
        </div>
        </div>
       
         `
      })
  }).catch(error =>{
    console.log(error);
  })