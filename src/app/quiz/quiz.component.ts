import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quizModel';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  

  questions:Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  prevAnswered = [];
  
  result = false;
  resultStatus = 'Show Result';
  
  constructor(private quizService:QuestionsService){}

    ngOnInit(): void {
      this.questions =this.quizService.getQuestions();
     }

     checkAnswer(option:boolean){
     
      this.answerSelected = true;
      if(option){
        console.log(option)
        this.correctAnswers++;
        console.log(this.correctAnswers);
      }else{
        this.incorrectAnswers++;
        console.log(this.incorrectAnswers);
      }
     }

    disableButton(qNum:number){
      console.log(qNum);
    }
     nextQuextion(){
       
       //if (this.questions.length<10){
        this.currentQuiz++; 
       //}
      
     }

     prevQuextion(){
      this.currentQuiz--;
     
     }

     showResult(){
      this.result = true;
      //this.resultStatus = 'Try Again!';    
    }
    playAgain(){
      this.prevAnswered = [];
      
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
    }
    
  }



  




