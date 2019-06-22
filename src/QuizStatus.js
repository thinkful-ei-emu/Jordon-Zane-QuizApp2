import Renderer from './lib/Renderer';
import './index.css';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`
    const score = this.model.score;
    const history = this.model.scoreHistory;
    //counts question number for progress
    const current = this.model.asked.length;
    const totalQ = this.model.asked.length + this.model.unasked.length;
    this.insertHighScore();
    return `
      <section class="quizstatus">
      <p>Score: ${score}</p>
      <p>High Score: ${this.model.scoreHistory[this.model.scoreHistory.length-1]}</p>
      <p>Progress: ${this.gameProgress()}</p>
      </section>
    `;
  }
  insertHighScore(){
    ////console.log('inserHighScoreRan');
    ////console.log(this.model.scoreHistory);
    if(this.model.scoreHistory.length===0){
      this.model.scoreHistory.push(this.model.score);
      ////console.log('insert High Score Ran');
      
    }
    else if(this.model.score>this.model.scoreHistory[this.model.scoreHistory.length-1]){
      this.model.scoreHistory.push(this.model.score);

    }
  }

  gameProgress(){
    let currentProgress;
    if(this.model.asked.length === 0){
      currentProgress = 'Inactive';
    } else {
      currentProgress = `${this.model.asked.length} of 5`;
    }
    return currentProgress;
  }
}

export default QuizStatus;