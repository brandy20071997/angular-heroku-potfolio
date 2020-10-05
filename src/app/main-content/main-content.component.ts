import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})




export class MainContentComponent implements OnInit {

  // onClick(){
  //   myTest();
  // }
  skills = [
    {"id":1,"code":"HTML","icon":"fa-html5"},
    {"id":2,"code":"CSS","icon":"fa-css3-alt"},
    {"id":3,"code":"Bootstrap","icon":"fa-bootstrap"},
    {"id":4,"code":"Javascript","icon":"fa-js-square"},
     {"id":5,"code":"Angular","icon":"fa-angular"},
 
    // {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];

images=[
 {"url":"../../assets/img/travogarpher.png","detail":"travographer.com"},
 {"url":"../../assets/img/uxpotato.png","detail":"ux.potato.com"} 
]

// console.log("hkjhfskj")

  constructor() { }

  ngOnInit(): void {
  
  }

}
