import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  onSave(){    
 
    document.getElementById("navbarSupportedContent").classList.add("mystyle")
    document.getElementById("navbarSupportedContent").style.transition="2s";
  } 
  Shownavbar(){
   
    document.getElementById("navbarSupportedContent").style.transition="1s";
    document.getElementById("navbarSupportedContent").classList.remove("mystyle")
    document.getElementById("navbarSupportedContent").classList.remove("show")


  }

  constructor() { }

  ngOnInit(): void {
  }

}
