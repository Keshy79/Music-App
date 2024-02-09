const fetchMe = () =>{

    }

    let url ='https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url).then(response => response.json()).then(convertedResponse => {
      convertedResponse.map((user)=>{
         console.log(user);
         show.innerHTML += `
         <div style="display: flex;">
        <h3>${user.id}<h3>
        <img src="${user.songImage}" alt="pix">  
        <h3>${user.songTitle}</h3>
        <p>${user.artistName}</p>         
        <audio src="${user.songUrl}" controls />
        </div>
         `
      })
  }).catch(error =>{
    console.log(error);
  })