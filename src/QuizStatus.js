import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`
    const score = this.model.score;
    const history = this.model.scoreHistory;
    //counts question number for progress
    const current = this.model.asked.length;
    const totalQ = this.model.asked.length + this.model.unasked.length;

    return `
      <div>
      <p>Score: ${score}</p>
      <p>High Score: ${this.insertHighScore()}</p>
      <p>Progress: ${this.gameProgress()}</p>
      </div>
    `;
  }
  insertHighScore(){
    if(this.model.score>this.model.scoreHistory[0]){
      return this.model.scoreHistory.push(this.model.score);
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