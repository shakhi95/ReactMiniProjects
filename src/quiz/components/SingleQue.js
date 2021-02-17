import React from "react";
import { useGlobalValues } from "../context";

const SingleQue = () => {
  //
  const {
    allQue,
    selectedQue,
    setSelectedQue,
    setIsModalOpen,
    correct,
    setCorrect,
    wrong,
    setWrong,
  } = useGlobalValues();

  const { question, incorrect_answers, correct_answer } = allQue[selectedQue];
  let answers = [...incorrect_answers];

  const randomCorrectAnsIndex = Math.floor(Math.random() * 4);

  if (randomCorrectAnsIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[randomCorrectAnsIndex]);
    answers[randomCorrectAnsIndex] = correct_answer;
  }

  const handleClick = (e) => {
    if (e.target.textContent === correct_answer) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }

    if (allQue.length - 1 === selectedQue) {
      setIsModalOpen(true);
    } else {
      setSelectedQue(selectedQue + 1);
    }
  };

  return (
    <div className="min-vh-100 bg-info d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
            <div className="card shadow py-3 px-4">
              <div className="d-flex justify-content-between flex-wrap px-3 bg-warning rounded mb-3">
                <span className="text-success">Correct : {correct}</span>
                <span className="text-danger">Wrong : {wrong}</span>
                <span>Left : {allQue.length - selectedQue}</span>
              </div>
              <h2
                className="text-center my-4"
                dangerouslySetInnerHTML={{ __html: question }}
              />
              {answers.map((ans, index) => {
                return (
                  <button
                    key={index}
                    className="btn btn-sm btn-secondary my-2"
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{ __html: ans }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQue;
