import Question from './Question';
import TriviaApi from'./TriviaApi';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;
  
  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.api= new TriviaApi(5);
    


    // TASK: Add more props here per the exercise

    this.score=0;
    this.score=[];

  }

  // Example method:
  startGame() {
    this.active = true;
    this.api.getItems ()
    .then(res=>res.json())
    .then(jsonData=>jsonData.results)
    .then(arr=>arr.map(item=>new Question(item.question,item.incorrect_answers,item.correct_answer)))
    .then(classArray=>classArray.forEach(item=>this.getQuestionData(item)))
    .then(()=>this.nextQuestion());

   
    console.log(this.unasked);
    

    
  }

  endGame(){
    this.active=false;
  }

  nextQuestion(){
    this.asked.push(this.unasked[0]);
    this.unasked.splice(0,1);

    console.log(this.unasked);
    console.log(this.asked);
  }
getQuestionData(item){

  this.unasked.push(item)



}

keepScore(){
  
}
}





export default Quiz;
