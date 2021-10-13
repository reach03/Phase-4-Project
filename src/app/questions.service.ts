import { Injectable } from '@angular/core';
import { Quiz } from './quizModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
 quizQuestions:Quiz[] = [
   {
     question:"1. In Angular, you can pass data from parent component to child component using...",
     answer: [
       {option: "@Output()", correct:false},
       {option: "@Input()", correct:true},
       {option: "Input()", correct:false},
       {option: "Output()", correct:false}
     ]
   },
   {
    question:"2. A directive which modifies DOM hierarchy is called",
    answer: [
      {option: "Structural directive", correct:true},
      {option: "Attribute directive", correct:false}
       ]
   },
   {
     question:"3. You can create local HTML reference of HTML tag using variable which starts with character",
     answer: [
       {option: "@", correct:false},
       {option: "#", correct:true},
       {option: "*", correct:false},
       {option: "&", correct:false}
     ]   
   },
   {
    question:"4. In Angular, you can pass data from child component to parent component using",
     answer: [
       {option: "@Output()", correct:true},
       {option: "@Input()", correct:false},
       {option: "Input", correct:false},
       {option: "Output", correct:false}
     ]   
   },
   {
     question:"5. Select correct form control class name which is set to true via [(ngModel)] whenever value is modified",
     answer: [
      {option: ".ng-invalid", correct:false},
      {option: ".ng-pending", correct:false},
      {option: ".ng-pristine", correct:false},
      {option: ".ng-dirty", correct:true}
    ]   
   },
   {
    question:"6. If you provide a custom service in two components’ “providers” section of @Component decorator, how many instances of service shall get created?",
    answer: [
     {option: "1", correct:false},
     {option: "2", correct:true},
     {option: "3", correct:false},
     {option: "4", correct:false}
   ]   
   },
   {
    question:"7. Directive can listen to host/target events using below decoarator",
    answer: [
     {option: "@Listener", correct:false},
     {option: "@HostListener", correct:true},
     {option: "@OnListener", correct:false},
     {option: "@TargetListener", correct:false}
    ]
   },
   {
    question:"8. In Angular routing, below tag is used to render matched component via active route.",
    answer: [
     {option: "<router></router>", correct:false},
     {option: "<router-output></router-output>", correct:false},
     {option: "<router-outlet></router-outlet>", correct:true},
     {option: "<router-display></router-display>", correct:false}
    ]
   },
   {
    question:"9. There can be more than one <router-outlet> element in angular application.",
    answer: [
     {option: "True ", correct:true},
     {option: "False", correct:false}
    ]
   },
   {
    question:"10. Below component represent “target/host” DOM element inside Directive’s constructor.",
    answer: [
     {option: "Element", correct:false},
     {option: "ElementRef", correct:true},
     {option: "Host", correct:true},
     {option: "Target", correct:false}
    ]
   }
 ]
  constructor() { }

  getQuestions(){
    return this.quizQuestions;
  }
}
