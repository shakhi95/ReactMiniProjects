import React from "react";

import { useGlobalValues } from "../context";

const SetupForm = () => {
  //
  const { formData, setFormData, fetchQuestions, error } = useGlobalValues();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuestions();
  };

  return (
    <div className="min-vh-100 bg-info d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
            <div className="card shadow py-3 px-4">
              <h2 className="text-center text-primary mb-5">Setup Quiz</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Number Of Questions :
                  </label>
                  <input
                    name="amount"
                    type="number"
                    className="form-control form-control-sm"
                    max="50"
                    min="1"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category :</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-select form-select-sm"
                  >
                    <option value="sports">Sports</option>
                    <option value="history">History</option>
                    <option value="politics">Politics</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Select Difficulty :
                  </label>
                  <select
                    name="defficulty"
                    value={formData.defficulty}
                    onChange={handleChange}
                    className="form-select form-select-sm"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <p className="text-center my-0">
                  <small
                    style={{ visibility: error.visibility, color: "darkred" }}
                  >
                    {error.mssg}
                  </small>
                </p>
                <button
                  type="submit"
                  className="w-100 btn btn-sm btn-warning mt-2"
                >
                  Start
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupForm;
