(async function(){
    const response=await fetch("./data.json");
    const movies=await response.json();

    const genreValue=document.querySelector("#genre");
    const language=document.querySelector("#language");
    const year=document.querySelector("#year");
    const searches=document.getElementById("search");
    const display=document.getElementById("display")
   
   function displayResult(result){
         display.innerHTML="";
         let a=0; 
         result.forEach(function(movie){
            const dates=movie.release_date.slice(0,4);
            a=a+1;
            var num = movie.runtime;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
        
             let li=document.createElement("li")
           
             
            newItem=`
            <div class="item">
            <div class="rank-number"><p>${a}</p></div>
            <div class="pic"></div>
            <p id="film-name">${movie.title}</p>
            <div class="information-of-film">
                 <ul class="list">
                 ${movie.genres.map(function(genres){
                    return "<li>"+ genres +"</li>"
               }).join(" ")}
                 </ul>
                 <p class="time">${rhours +"h " +rminutes +"min"}</p>
            </div>
            
                <p class="year">${dates}</p>
            
          </div>
            `


            li.innerHTML=newItem
            display.appendChild(li)
         })
        


   }
    function search(){
         const genres=genreValue.value.toLowerCase()
         const lower=language.value.toLowerCase();
         const dte=year.value.toLowerCase();
          
       
        const result=movies.filter(function (movie){
            const datess=movie.release_date.slice(0,4);
            return(movie.original_language.toLowerCase().includes(lower) && movie.genres.toString().toLowerCase().includes(genres) && datess.includes(dte) )
            
        })
        console.log(result)
         displayResult(result)
        
        
      
       
    }


    searches.addEventListener("click" , search)
})()