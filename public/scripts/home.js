
  module.exports = { homeHtml =(home) =>{ ` <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="household">
                            <p>household + pets </p>  <i id=${home.id} class="addUser fas fa-plus"></i>
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
                <button class="dltThisHome" id=${home.id}>delete home</button>
       </div>` 
}
}
