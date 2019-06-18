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
      <p>High Score: ${history}</p>
      <p>Progress: </p>
      </div>
    `;
  }
}

export default QuizStatus;