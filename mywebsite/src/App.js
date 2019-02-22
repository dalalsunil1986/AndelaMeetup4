import React, { Component } from 'react';
import './index.js';
import MainNav from './componets/nav/MainNav'
import  Home from './componets/Home'
import Project from './componets/Project'
import Skills from './componets/Skills.js'
import About from './componets/About'
import Contacts from './componets/Contacts'
import Footer from './componets/Footer'
/*global google*/
// import Contactcards from './componets/Contactcards';
// import Todos from './componets/Todos';
// import Conditinal from './componets/Conditinal'
//import Islogin from './componets/Islogin'

class App extends Component { 
  
  //  constructor(){
  //    super();
  //     this.state={
  //          count:0
  //     }  

  //     this.handleClick=this.handleClick.bind(this);
  //  }

//    handleClick(){
//    this.setState(prevstate=>{
//         return {
//            count:prevstate.count+1
//         }
//    });  
// }

  // state={

  //     todos:[
  //     {
  //       id:1,
  //       name:'work up at nine',
  //       completed:true
  //     },

  //     {
  //       id:2,
  //       name:'sleep in afternoon',
  //       completed:false,

  //     },
  //     {
  //       id:4,
  //       name:'sleep in afternoon',
  //       completed:true,
        
  //     }
  //   ]
  //   }

  //    markcomplete=(id)=>{
  //       this.setState({todos:
  //          this.state.todos.map(todo=>{
  //             if(todo.id===id){
  //               todo.completed=!todo.completed
  //             }

  //         <Todos  todos={this.state.todos}  markcomplete={this.markcomplete} />           return todo;
             
  //          })})
  //    }

      //  state={
      //      isLoading:true
      //  }

      //    componentDidMount( { this.state.isLoading ? <h1>is Loading......</h1> :
     //  <Conditinal /> }){
      //       setTimeout(()=>{
      //          this.setState({
      //             isLoading:false
      //          })
      //       },1500)
      //    }

      

        //  constructor(){
        //    super();
        //    this.state={isLogin:false}
        //      this.islogin=this.islogin.bind(this);
        //  }


        //  islogin(){
        //    this.setState(prestate=>{
        //        return {
        //          isLogin:!prestate.isLogin
        //        }
        //    })
        //  }

         initMap(){
        
          const options={
 
           zoom:17,
           center:{lat:-6.774587, lng: 39.241197}
          }
 
           const map = new google.maps.Map(document.getElementById('map'),options);
         
 
            const marker = new google.maps.Marker({
 
              position:{lat:-6.774587, lng: 39.241197},
 
              map:map
 
            });
               
 
            }
    
  render() {
    return (
     
      <div>
           
          <div className="content">
          <MainNav />
        <Home />
        <Project />
        <About />
        <Contacts  map={this.initMap}/>
        <Skills/>
          </div>

        <Footer />
      </div>
      
       
    );
  }
}

export default App;
