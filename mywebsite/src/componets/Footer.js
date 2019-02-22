import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
       <div className="footer_info">
                   <div className="container">
              <div className="row">
               <div className="col-sm-4 col-md-4  col-xs-4 social_media">

                <h4>Social media</h4>

                     <li> <a href="https://www.facebook.com/RecipesToFoods">facebook</a></li>
                      <li><a href="https://twitter.com/RecipeToFoods">twitter</a></li>

                 
               </div>


               <div className="col-sm-4 col-md-4  col-xs-4 contact ">

                    <h4>Contact</h4>
                   
                       <p><span>P </span> (+255) 672137313</p>
                       <p><span>S </span> Chrisso</p>
                       <p><span>E  </span> chrissoemma@gmail.com</p>
                 
               </div>


               <div className="col-sm-4 col-md-4  col-xs-4 address">

                      <h4>Address</h4>
                        <p>Tanzania</p>
                        <p>Dar-es-salaam</p>
						<p>Kijitonyama</p>
                 
               </div>
                
             </div>

              
               

               <h5>&copy 2019 copyright. All right reserved.</h5>

                   </div>
                 </div> 
        
      </div>
    )
  }
}

export default Footer
