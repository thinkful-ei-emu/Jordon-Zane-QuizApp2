import $ from 'jquery';
import Renderer from './lib/Renderer';


class QuizDisplay extends Renderer {
  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit .submit-answer': 'handleSubmit',
    };
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

  _generateQuiz(){
    return `
      <div>
        <p>${this.model.asked[0].text}</p>
        <p>
        <form role="form" class="submit-answer">
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[0]}"/> ${this.model.asked[0].answers[0]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[1]}"/> ${this.model.asked[0].answers[1]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[2]}"/> ${this.model.asked[0].answers[2]}<br>
        <input class="answer" type="radio" name="answer" value="${this.model.asked[0].answers[3]}"/> ${this.model.asked[0].answers[3]}<br>
        <button type="submit" value="Submit">Submit</button>
        </form>
        </p>
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
    event.preventDefault();
    const answer = event.target.answer.value;
    console.log(answer);
    
  }

  
}

export default QuizDisplay;