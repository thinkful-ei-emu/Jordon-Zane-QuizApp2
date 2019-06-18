import $ from 'jquery';
import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
    };
  }

  _generateQuiz(){
      return `
        <div>
          <p>
            ${this.model.asked[0].text}
          </p>
        </div>
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
}

export default QuizDisplay;