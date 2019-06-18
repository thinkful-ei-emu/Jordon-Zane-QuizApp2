import $ from 'jquery';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay';
import QuizStatus from './QuizStatus';

function main() {
  const q = new Quiz();
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  const display = new QuizDisplay(q, '.display');
  const status = new QuizStatus(q, '.status')
}

$(main);

