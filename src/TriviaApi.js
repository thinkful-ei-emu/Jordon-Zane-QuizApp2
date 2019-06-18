import Question from './Question'
class TriviaApi {
    BASE_URL='https://opentdb.com/api.php?';

    constructor(number){

    this.number=number;


    }

    getItems(){
        return fetch(`${this.BASE_URL}amount=${this.number}`)
         

    } 
}



export default TriviaApi;


