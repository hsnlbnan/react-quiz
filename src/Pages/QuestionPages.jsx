import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Layout from "../Layout";
import StyledButton from "../components/Button/Button";
import QuestionWrapper from "../components/QuestionWrapper/QuestionWrapper";
import questions from "../datas/questions";
import { colors, textStyle } from "../constants/theme";
import timerSvg from "../assets/timer.svg";

const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 30px auto;
  column-gap: 20px;
  row-gap: 10px;
`;

const H2 = styled.h2`
  ${textStyle}
  text-align: center;
  color: ${colors.primary[500]};
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const H4 = styled.h4`
  ${textStyle}
  text-align: center;
  background-color: ${colors.primary[500]};
  color: ${colors.white["full"]};
  padding: 12px 20px;
  border-radius: 100px;
  margin: 0 auto -20px;
  z-index: 1;
`;

const H5 = styled.h5`
  ${textStyle}
  text-align: center;
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  right: 20px;
`;

export const QuestionPages = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [timerMinute, setTimerMinute] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {showScore ? (
        <ScoreWrapper>
          {score > 3 ? (
            <H2>
              Bravo 🎉! <br /> {score} Doğru Cevap
            </H2>
          ) : (
            <H2>
              Maalesef 😓 <br /> {score} Doğru Cevap
            </H2>
          )}

          <Link to="/">
            <StyledButton
              buttonStyle="primary"
              buttonSize="large"
              justifyContent="center"
            >
              Başa Dön
            </StyledButton>
          </Link>
        </ScoreWrapper>
      ) : (
        <>
          {timerMinute >= 1 ? (
            <H5>
              <img src={timerSvg} alt="Timer" /> {timerSvg} {timerMinute} Dakika{" "}
              {timer} Saniye
            </H5>
          ) : (
            <H5>
              <img src={timerSvg} alt="Timer" /> {timer} Saniye
            </H5>
          )}

          <H4>{currentQuestion + 1}. Soru</H4>
          <QuestionWrapper>
            {questions[currentQuestion].question.includes("\n")
              ? () => {
                  const [first, second] =
                    questions[currentQuestion].question.split("\n");
                  return (
                    <>
                      {first}
                      <br />
                      {second}
                    </>
                  );
                }
              : questions[currentQuestion].question}
          </QuestionWrapper>
          <AnswersWrapper>
            {questions[currentQuestion].options.map((answerOption, key) => (
              <StyledButton
                key={key}
                buttonStyle="primary"
                buttonSize="large"
                justifyContent="center"
                width="calc(50% - 10px)"
                onClick={() => {
                  if (answerOption === questions[currentQuestion].answer) {
                    setScore(score + 1);
                  }
                  const nextQuestion = currentQuestion + 1;
                  if (nextQuestion < questions.length) {
                    setCurrentQuestion(nextQuestion);
                  } else {
                    setShowScore(true);
                  }
                }}
              >
                {answerOption}
              </StyledButton>
            ))}
          </AnswersWrapper>
        </>
      )}
    </Layout>
  );
};

export default QuestionPages;
