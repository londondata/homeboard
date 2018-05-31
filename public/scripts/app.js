
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
        // e.stopImmediatePropagation();d
        // console.log("sanity check")
        // $('#addHomeForm').css("display","inline-block");
    });

    //GO TO SELECTED HOME
    // when a specific  home is selected pass the id and get the respective home data
    //also render new page with the requested home
    // $("div").on("click", $('.homesContainer'), (e)=>{
    //     e.preventDefault();
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
       let homesDiv =  `<div class= "homedivs" id="addHome">
                            <i style = "font-size: 6em" class="fas fa-home"></i>
                            <h1>add home +</h1>
                        </div>
                        <div class="modal fade" id="addHouseModal" tabindex="-1" role="dialog" aria-labelledby="addHouseholdModalLabel">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="houseModalLabel">add house name</h4>
                                </div>
                                <div class="modal-body">
                        
                                <form action="/api/homes" method="post"  id="newHouseForm">
                                    <div class="form-group"> <!-- home Name field -->
                                        <label class="control-label " for="name">Home Name</label>
                                        <input class="form-control" id="name" name="name" placeholder="GA" type="text"/>
                                    </div>
                                    <div class="form-group center">
                                        <button class="btn btn-primary" name="submit"  type="submit">Submit</button>
                                    </div>
                                </form>
      
                                </div>
                            </div>
                            </div>
                        </div> `   
        return homesDiv;
    }
    
    homeIcons = (homes)=>{
        console.log("hit", homes)
        homes.forEach(home => {
            // console.log('HIT', home)
             $('.homesContainer').prepend(` <div class="home homedivs" id= ${home._id} >
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
                                    });
                                    
                                    $('#addHome').on('click', (e) => {
                                        // console.log(e.currentTarget.id)    
                                           let id = e.currentTarget.id
                                           console.log('ADDHOme Clicked')
                                        //    addHomeFormHtml();
                                        $('#addHouseModal').modal('toggle');
                                    
                                    }) 
                } 
    
// homesloader end    

// SINGLE HOME DIV
SingleHomeDiv = (data) =>{ 
    $('.hb').prepend(`${data.name}'s `)
    let home =` 
    <div class="container">
        <div class="row">
        	<!-- give the div below the min height -->
            <div class="col-md-3 householdContainer">
            	<!-- this will be title -->
                <div class="household">
                	<p>household</p><i class="fas fa-plus householdadd" data-toggle="modal" data-target="#householdModal"></i>                	
                </div>
                <!-- this will be list -->
                <div class="householdList">
                	<p>teri - general assembly - 8 am - 5 pm</p>
                	<p>little miss kitten - housepet - 24/7</p>
                	<p>isa - cannabis rep - hours vary</p>
                </div>
        </div>

            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info"><p> main static info (weather api, etc)</p></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="message-wall"><p>message wall</p></div>

                        	<div class="message-wall-input input-group">

     						<input type="text" class="form-control" placeholder="type message here" id="messages">
     						
     						<span class="input-group-btn">
       						<button class="btn btn-default" type="button" id="addMessage">submit</button>
						     </span>
						   </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 choresContainer">
                <div class="chores"><p>chores</p><i class="fas fa-plus choresadd" data-toggle="modal" data-target="#choresModal"></i></div>
 				<div class="choreList">
                	<p>clean bathroom
                		<label class="checkboxen">
                			<input type="checkbox">
                		</label>
                	</p>
                	<p>teri <input id="dummydate" type="date"></p>
                	<p>wash dishes
                		<label class="checkboxen">
                			<input type="checkbox">
                		</label>
                	</p>
                	<p>isa <input id="dummydate" type="date"></p>
                	<p>buy incense
                		<label class="checkboxen">
                			<input type="checkbox">
                		</label>
                	</p>
                	<p>teri <input id="dummydate" type="date"></p>
                </div>


            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="footer">&copy; 2018 teri + biniam are amazing</div>
            </div>
        </div>
	</div>

<!-- //MODALs GO HERE: first household, then chores: -->

	<div class="modal fade" id="householdModal" tabindex="-1" role="dialog" aria-labelledby="householdModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="householdModalLabel">add household user</h4>
      </div>
      <div class="modal-body">

        <form action="/api/users" method="post" enctype='${data.id}' id="newUserForm">
           <input class="form-control" id="homeid" name="home_id" value="${data._id}" type="hidden"/>
            <div class="form-group"> <!-- Name field -->
                <label class="control-label " for="name">Name</label>
                <input class="form-control" id="name" name="name" placeholder="duck" type="text"/>
            </div>

            <div class="form-group"> <!-- work field -->
                <label class="control-label " for="work">Where do you work</label>
                <input class="form-control" id="work" name="work" placeholder="GA" type="text"/>
            </div>

            <div class="form-group"> <!-- work hours field -->
                <label class="control-label " for="workHours">when do you work</label>
                <input class="form-control" id="workHours" name="workHours" placeholder="mon-sun 6am-5pm" type="text"/>
            </div>

            <div class="form-group center">
                <button class="btn btn-primary" name="submit"  type="submit">Submit</button>
            </div>
        </form>

      </div>
    </div>
  </div>
</div>

	<div class="modal fade" id="choresModal" tabindex="-1" role="dialog" aria-labelledby="choresModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="choresModalLabel">add chores</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="message-text" class="control-label">chore:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">date due:</label>
           <input id="date" type="date">
          </div>
          <div class="form-group">
            <label for="recipient-name" class="control-label">user responsible:</label>

            		<div class="dropdown">
			  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    select user
			    <span class="caret"></span>
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
			    <li class ="dropydown">mr mcmuffin</li>
			    <li class ="dropydown">little miss kitten</li>
			    <li class ="dropydown">some other idiot</li>
			  </ul>
			</div>
          </div>
          <div class="modal-footer form-group">
        <button type="button" class="btn btn-default" data-dismiss="modal">close</button>
        <button type="submit" name="submit" class="btn btn-default">submit</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
` 

    return home;   
}
// SINGLE HOME DIV End