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
    <section class="display">    
      <form id="form">
          <h2 class="question">${this.model.asked[0].text}</h2>
        <input type="radio" name="option" class="textdisplay" value="${this.model.asked[0].answers[0]}">${this.model.asked[0].answers[0]}<br>
        <input type="radio" name="option" class="textdisplay" value="${this.model.asked[0].answers[1]}">${this.model.asked[0].answers[1]}<br>
        <input type="radio" name="option" class="textdisplay" value="${this.model.asked[0].answers[2]}">${this.model.asked[0].answers[2]}<br>
        <input type="radio" name="option" class="textdisplay" value="${this.model.asked[0].answers[3]}">${this.model.asked[0].answers[3]}<br>
        <button type="submit" class="submit-button button">Submit!</button>
        </form>
        </section>
      `;
  }

  _generateResults(){
    if(this.model.getCurrentQuestion().getAnswerStatus()===1){ return `<div>
   <section class="display">
    <h2 class="question">
     ${this.model.asked[0].text}
   </h2>

   <h3 class="correct">
     You got it!<br>
     The correct answer was:${this.model.asked[0].correctAnswer}
     
   </h3>
   </section>
 </div>
 <div class="buttons">
   <button class="next-question button">Next Question </button>
 </div>
   
   `;}

    else{return `<div>
   <h2 class="question">
     ${this.model.asked[0].text}
   </h2>
<h3 class="incorrect">You answered: ${this.model.asked[0].userAnswer}</h3>
   <h3 class="incorrect"> Im sorry that incorrect!</h3><br>
    <h3 class="correct"> The correct answer was:${this.model.asked[0].correctAnswer}</h3>
     
   
 </div>
 <div class="buttons">
   <button class="next-question button">Next Question </button>
 </div>
   
   `;}
     
   
  }

  _generateIntro() {
    return `
      <section class="display">
        <h1>
          Welcome to the Trivia Quiz
        </h1>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </section>
      <div class="buttons">
        <button class="start-quiz button">Start Quiz</button>
      </div>
    `;
  }

  generateEndOfGame(){
    return `
      <div>
        <p>
          Good Job!
        </p>
        <h3 class="endgame">
          Your final score was ${this.model.score} out of 5
        </h3>
      </div>
      <div class="buttons">
        <button class="start-quiz button">Play Again?</button>
      </div>
    `;

  }

  template() {
    let html = '';
    
    if (this.model.asked.length === 0&&this.model.unasked.length===0) {
      // Quiz has not started
      html = this._generateIntro();
    } else {
      html = this._generateQuiz();
    }
    if (this.model.asked.length>0 && this.model.asked[0].userAnswer!==null){
      html=this._generateResults();

    }
    if((this.model.asked.length===5)&&this.model.active===false){
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
   
    if(this.model.asked.length<5 ){
      this.model.nextQuestion();
      
      //  this.model.update();
      //onsole.log(this.model.unasked[0].text);
      console.log(this.model.active);
      
    }
    else if(this.model.asked.length===5){
      this.model.active=false;
      //this.model.update();
    }
    this.model.update();
  }

}


export default QuizDisplay;