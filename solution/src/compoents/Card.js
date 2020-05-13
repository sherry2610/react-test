import React, { Component } from "react";
import easy from "../images/easy.png";
import medium from "../images/medium.jpg";
import hard from "../images/hard.png";

class Card extends Component {
    state = {
        btnToShow:false,
        checkForCorrect:false
    }
    setToInitial = () => {
        this.setState(()=>({
        btnToShow:false,
        checkForCorrect:false
        }))
    }
  btnAnswer = (e) => {
    e.preventDefault();
    this.setState(()=>({
        btnToShow:true
    }))
    const { correct, options } = this.props;
    const {btnToShow} = this.state
    const correctText = correct.replace(/%20/g, " ");
    console.log("CORRECT", correctText);
    console.log("options", options);
    console.log(e.target.value);
    if (e.target.value === correctText) {
        this.setState(()=>({
            checkForCorrect:true
        }))
    } else {
        if (e.target.value === correctText) {
            this.setState(()=>({
                checkForCorrect:false
            }))
    }
    }
  }
  render() {

    console.log("CARDS", this.props);
    const { ques, quesNumber, difficulty, category, options, nextQuestionBtn } = this.props;
    const questionText = ques.replace(/%20/g, " ").replace(/%/g, " ");
    const categoryText = category.replace(/%20/g, " ").replace("%", " : ");
    const optionText = options.map((option) => option.replace(/%20/g, " "));
    let source;
    switch (difficulty) {
      case "easy":
        source = easy;
        break;
      case "medium":
        source = medium;
        break;
      case "hard":
        source = hard;
        break;
      default:
        source = hard;
        break;
    }
    const {btnToShow,checkForCorrect} = this.state
    let display = btnToShow?{display: 'inline'}:{display: 'none'}
    let displayResult = btnToShow?{display: 'inline'}:{display: 'none'}
    return (
      <div
        style={{
          border: "1px solid black",
          width: "50%",
          margin: "0 auto",
          height: "400px",
          fontSize: "24px",
        }}
        id="card"
      >
        <div style={{ lineHeight: "0.1", margin: "40px 100px 20px 40px" }}>
          <h2>Question {quesNumber} of 20</h2>
          <p>{categoryText}</p>
          <img src={source} width="100px" />
        </div>
        <p style={{ marginLeft: "40px", width: "75%" }}>{questionText}</p>
        <form>
          {optionText.map((option) => {
            return (
              <button
                onClick={(e) => this.btnAnswer(e)}
                type="submit"
                id="btnOption"
                value={option}
                key={option}
              >
                {option}
              </button>
            );
          })}
        </form>
        <h5 style={displayResult}>{checkForCorrect?"Correct!":"Sorry!"}</h5><br />
        <button style={display} onClick={()=>nextQuestionBtn(this.setToInitial,checkForCorrect)}>NEXT QUESTION</button>
      </div>
    );
  }
}

export default Card;
