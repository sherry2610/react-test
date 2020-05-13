import React, { Component } from "react";
import data from "./data.json";
import Card from "./compoents/Card";
import TopBar from "./compoents/TopBar";

class App extends Component {
  state = {
    questions: data,
    questionToShow: 0,
    correct: 0,
  };

  nextQuestionBtn = (cb, check) => {
    const { questionToShow, correct } = this.state;
    cb();
    if (questionToShow <= 19) {
      this.setState(() => ({
        questionToShow: questionToShow + 1,
      }));
    } else {
      this.setState(() => ({
        questionToShow: 0,
      }));
    }

    if (check === true) {
      this.setState(() => ({
        correct: correct + 1,
      }));
    }
  };
  render() {
    console.log("STATE", this.state);
    const { questions, questionToShow, correct } = this.state;
    console.log("var", questions);
    let options = [];
    options.push(questions[questionToShow].correct_answer);
    questions[questionToShow].incorrect_answers.forEach((ques) =>
      options.push(ques)
    );
    if (questionToShow <= 19) {
      return (
        <div className="App">
          <TopBar questionToShow={questionToShow} />
          <h3>QUIZ</h3>
          <Card
            ques={questions[questionToShow].question}
            quesNumber={questionToShow}
            difficulty={questions[questionToShow].difficulty}
            category={questions[questionToShow].category}
            correct={questions[questionToShow].correct_answer}
            options={options}
            nextQuestionBtn={this.nextQuestionBtn}
          />
          <TopBar questionToShow={correct} />
        </div>
      );
    } else {
      return <h2>Game Over. Your Score : {correct}</h2>;
    }
  }
}

export default App;
