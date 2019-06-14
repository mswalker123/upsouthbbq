import { Component, HostBinding } from '@angular/core';
// import {
//   // trigger,
//   // state,
//   // style,
//   animate,
//   // transition,
//   // ...
// } from '@angular/animations';
// import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   animate, 
  //   slideInAnimation
  // ]
})
export class AppComponent {
  title = 'my-app';

  //  classToggle=() => {
  //   const navs = document.querySelectorAll('.Navbar__Items')
    
  //   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  // }
  
  // document.querySelector('.Navbar__Link-toggle')
  //   .addEventListener('click', classToggle);

}

