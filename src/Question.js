class Question {

  constructor(text,answers,correctAnswer){
    // text is a question
    this.text=text;
    this.answers=[...answers,correctAnswer];
    this.correctAnswer=correctAnswer;
    this.userAnswer=null;
    console.log(this.answers);
  }
  
  
  
  submitAnswer(answer){
    this.userAnswer=answer;}

  answerStatus(){
    if (this.userAnswer!==null){
      if(this.userAnswer===this.correctAnswer){
        return 1;
      }
      else{
        return 0;
      }

    }
    else{
      return -1;
    }

  }
}



export default Question;
