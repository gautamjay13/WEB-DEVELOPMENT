let url  = "https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
   response.json().then((data)=>{
        console.log(data);
        return fetch(url);
   })
})
.catch((err)=>{
    console.log("error",err);
    
})