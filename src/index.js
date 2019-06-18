import $ from 'jquery';
import Quiz from './Quiz';
import TriviaApi from './TriviaApi';
import Question from './Question';

function main() {
  const q = new Quiz();
  // const api= new TriviaApi(5);

  
  // api.getItems ()
  //   .then(res=>res.json())
  //   .then(jsonData=>jsonData.results)
  //   .then(arr=>arr.map(item=>new Question(item.question,item.incorrect_answers,item.correct_answer)))
  //   .then(classArray=>classArray.forEach(item=>q.getQuestionData(item)));
    
 

  

    
  
  

  
  
  

  window.q=q;
    
}

$(main);

