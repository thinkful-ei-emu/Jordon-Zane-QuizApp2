import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit #form': 'handleSubmit',
      'click .next-question': 'handleNextQuestion'
    };
  }

  _generateQuiz(){
    return `
        <form id="form">
          <p>${this.model.asked[0].text}</p>
        <input type="radio" name="option" value="${this.model.asked[0].answers[0]}">${this.model.asked[0].answers[0]}<br>
        <input type="radio" name="option" value="${this.model.asked[0].answers[1]}">${this.model.asked[0].answers[1]}<br>
        <input type="radio" name="option" value="${this.model.asked[0].answers[2]}">${this.model.asked[0].answers[2]}<br>
        <input type="radio" name="option" value="${this.model.asked[0].answers[3]}">${this.model.asked[0].answers[3]}<br>
        <button type="submit" class="submit-button">Submit!</button>
        </form>
      `;
  }

  _generateResults(){
    if(this.model.getCurrentQuestion().getAnswerStatus()===1){ return `<div>
   <p>
     ${this.model.asked[0].text}
   </p>

   <p>
     You got it!<br>
     The correct answer was:${this.model.asked[0].correctAnswer}
     
   </p>
 </div>
 <div class="buttons">
   <button class="next-question">Next Question </button>
 </div>
   
   `;}

    else{return `<div>
   <p>
     ${this.model.asked[0].text}
   </p>

   <p>
     Im sorry that incorrect!<br>
     The correct answer was:${this.model.asked[0].correctAnswer}
     
   </p>
 </div>
 <div class="buttons">
   <button class="next-question">Next Question </button>
 </div>
   
   `;}
     
   
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  generateEndOfGame(){
    return `
      <div>
        <p>
          Goog Job!
        </p>
        <p>
          Your final score was ${this.model.score}
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;

  }

  template() {
    let html = '';
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    } 
    if (this.model.active === true){
      html = this._generateQuiz();
    }
    if (this.model.asked.length>0 && this.model.asked[0].userAnswer!==null){
      html=this._generateResults();

    }
    if(this.model.unasked.length===0&&this.model.active===false  ){
      html=this.generateEndOfGame();
    }

    
    return html;
  }

  handleStart() {
    this.model.startGame();
  }
  handleSubmit(e){
    this._generateResults();
    e.preventDefault();
    console.log('Rann');
    console.log(e.target);
    const answer=new FormData(e.target).get('option');
    console.log(answer);
    this.model.answerCurrentQuestion(answer);
    this.model.update();

    


  }

  handleNextQuestion(){
    if(this.model.unasked.length===0){
      this.model.active===false;
    }
    else{this.model.nextQuestion();
      this.model.update();}
  }

}


export default QuizDisplay;