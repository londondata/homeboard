
// import homeHtml from './homes'
// server.js
// const homeHtml = require('./homes');
// $.getScript("homes.js", (data, textStatus, jqxhr)=>{
//     console.log("this is data ", data)
//     // console.log("data returned", data); // Data returned
//     // console.log("data success",textStatus); // Success
//     // console.log("data eroor", jqxhr.status); // 200
//     // console.log("Load was performed.");
//   });


$(document).ready(() =>{
    // console.log("sanity check")

    // set current date
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#date').val(today);

   //TODO: check if there are any homes if so go to
   // home else offer user to create one
    $.ajax({
        method: 'GET',
        url: '/api/homes',
        success: handleSuccess,
        error: handleError
      });

    //ADD HOME WHEN BTN CLICKED
    $("#addHome").on("mouseover",  (e)=>{
        console.log("hovering over home")
        // e.preventDefault();
        // e.stopImmediatePropagation();
        // console.log("sanity check")
        // $('#addHomeForm').css("display","inline-block");
    });

    //GO TO SELECTED HOME
    // when a specific  home is selected pass the id and get the respective home data
    //also render new page with the requested home
    // $("div").on("click", $('.homesContainer'), (e)=>{
    //     e.preventDefault();
    //     // e.stopImmediatePropagation();
    //     let id = e.currentTarget.id
    //     console.log(`HOME WITH ${e.target} SELECTED`)   
    // });

});


handleSuccess = (succ) =>{
     let homes = succ;
    // console.log("this is homes", succ);
    $(".homesContainer").append(homeHtml(succ));
    homeIcons(homes);
}
handleError = (err) =>{
    console.log(err)
    console.log('err HIT')
    }


//function to let user GET to specific home and DISPLAY home on the view    
getHome = (id)=>{
    // console.log("from get home", id)
    $.ajax({
        method: 'GET',
        url: `/api/homes/${id}`,
        success: (res) => {
            // console.log("this is res:", res)
            renderHome(res);
            // window.location.href= `/${id}`;
            },
            error: (a, b, c) => {
            console.log(a, b, c)
            }
        
    });
}

renderHome=(res)=>{
    console.log("GOT HOME", res)
    $(".homesContainer").empty();
    $(".homesContainer").append(SingleHomeDiv(res));


}
//  this function lets client create user or home memeber   
 //CREATE USER WHEN BTN-ADD-USER IS CLICKED

 addUser = ()=>{
    $('.addUser').on("click", (e)=> {
       e.preventDefault();
       e.stopImmediatePropagation();
       let id = e.currentTarget.id
       console.log("id of button", id)
       $.ajax({
           method: 'post',
           url: `/newuser`,
           data: {
               name:"biniam", 
               work:{where: "GA", workhours: "m-f 9-5"},
               chors: null,
               isHome: true,
               homeid: {type: id, ref: 'home'}
           },
           success: (res) => {
                console.log("just made user", res)
                window.location = `/`
           },
           error: (a, b, c) => {
               console.log(a, b, c)
           }
       });
   });
   }

//this funcion lets user delete home
deleteHome = ()=>{
    // console.log(`home with id ${e.currentTarget.id} clicked`)
    //DELETE THE HOME WHEN THE BUTTON IS CLICKED
    $(".dltThisHome").on('click', (e)=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        let id = e.currentTarget.id
         console.log(`home id ${e.currentTarget.id} will be destroyed`)
        $.ajax({
            method: 'DELETE',
            url: `/${id}`,
            success: (res) => {
                console.log("just deleted home")
                window.location = `/`
            },
            error: (a, b, c) => {
                 console.log(a, b, c)
            }
        });
    });
}


 //Initial homes loader
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
        // console.log("HIT",homes)
       let homesDiv =  `<div id="addHome">
                            <i style = "font-size: 6em" class="fas fa-home"></i>
                            <h1>add home +</h1>
                        </div>`
        return homesDiv;
    }
    
    homeIcons = (homes)=>{
        console.log("hit", homes)
        homes.forEach(home => {
            // console.log('HIT', home)
             $('.homesContainer').prepend(` <div class="home" id= ${home._id} >
                                                       <div style="text-decoration: none">
                                                        <i style = "font-size: 6em" class="fas fa-home"></i>
                                                        <h1>${home.name}</h1>
                                                        </div>
                                             </div>`
                                        );
    
                                    });     
                                    $('.home').on('click',$('.homesContainer'), (e) => {
                                        // console.log(e.currentTarget.id)
                                        if(e.currentTarget.id !== null){
                                           let id = e.currentTarget.id
                                           getHome(id)
                                        }
                                    }) 
                } 
    
// homesloader end    

// SINGLE HOME DIV
SingleHomeDiv = (data) =>{ 
    
    let home =` <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="household">
                            <p>household + pets </p>  <i id=${data.id} class="addUser fas fa-plus"></i>
                                <ul id="members">
                                1.memeber one
                                2.memeber two
                                3.member three
                                </ul>
                        
                        </div>
                    </div>
        
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="info"><p> main static info (weather api, etc)    <i class="fas fa-plus"></i></p></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="message-wall"><p>message wall</p></div>
        
                                        <div class="message-wall-input input-group">
                                                             <input type="text" class="form-control" placeholder="type message here">
                                                             <span class="input-group-btn">
                                                               <button class="btn btn-default" type="button">submit</button>
                                                             </span>
                                                           </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-md-3">
                        <div class="chores"><p>chores    <i class="fas fa-plus"></i></p></div>
                    </div>
                </div>
        </div>
       <div>
                <button class="dltThisHome" id=${data.id}>delete home</button>
       </div>` 

    return home;   
}
// SINGLE HOME DIV End