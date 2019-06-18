import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit #form': 'handleSubmit'
    };
  }

  _generateQuiz(){
    return `
        <form id="form">
          <p>${this.model.asked[0].text}</p>
        <input type="radio" name="option" value"1">${this.model.asked[0].answers[0]}<br>
        <input type="radio" name="option" value"1">${this.model.asked[0].answers[1]}<br>
        <input type="radio" name="option" value"1">${this.model.asked[0].answers[2]}<br>
        <input type="radio" name="option" value"1">${this.model.asked[0].answers[3]}<br>
        <button type="submit" class="submit-button">Submit!</button>
        </form>
      `;
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

  template() {
    let html = '';
    
    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    } 
    if (this.model.active === true){
      html = this._generateQuiz();
    }
    
    return html;
  }

  handleStart() {
    this.model.startGame();
  }
  handleSubmit(){
    this.model.nextQuestion();
    this.model.getCurrentQuestion();
    console.log('hello');
  }
}


export default QuizDisplay;