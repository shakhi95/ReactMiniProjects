import React from "react";

import data from "./data";
import Question from "./Question";

const QuestionsList = () => {
  //
  const renderedList = () => {
    return data.map((que) => {
      return <Question key={que.id} que={que} />;
    });
  };

  return (
    <div className="container-fluid min-vh-100 bg-secondary py-5">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="card p-5 shadow">
            <div className="row">
              <div className="col-md-4">
                <h1>Question And Answers About Login</h1>
              </div>
              <div className="col-md-8">{renderedList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsList;
