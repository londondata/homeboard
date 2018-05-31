addHomeFormHtml =() =>{
    `<div id="addHomeForm">
            <form action="/api/homes" method="post" id="newHomeForm">
                <div class="form-group"> <!-- Name field -->
                <label class="control-label " for="name">Name</label>
                <input class="form-control" id="name" name="name" type="text"/>
                </div>
                    <div class="form-group center">
                        <button class="btn btn-primary " name="submit" type="submit">Submit</button>
                    </div>
            </form>	
    </div>`
};

homeHtml = (homes) =>{
    `<div id="homes">
            <div class="homesContainer">
               
                </div> 
                <div class="home">      
                    <div id="addHome">
                        <i style = "font-size: 6em" class="fas fa-home"></i>
                        <h1>add home +</h1>
                    </div>
                </div>
            </div>
    </div>`

    homes.forEach(home => {
        $('.homesContainer').append(homeIcons(home))
    });
}

   homeIcons = (home)=>{
        ` <div class="home" id= ${home.id} >
        <div style="text-decoration: none">
            <i style = "font-size: 6em" class="fas fa-home"></i>
            <h1>${home.name}</h1>
        </div>`
   } 


//    module.exports={
//        homeHtml: homesHtml,
//        addHomeFormHtml: addHomeFormHtml
// }