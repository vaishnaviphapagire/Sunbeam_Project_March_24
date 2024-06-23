import React, { useState } from 'react';

export default function CreateQuiz() {
    const [quizName, setQuizName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState(0);
    const [maxMarks, setMaxMarks] = useState(10);
    const [minMarks, setMinMarks] = useState(0);

    const handleAddQuestion = () => {
        const newQuestion = {
            question: currentQuestion,
            options: options,
            correctOption: correctOption,
            maxMarks: maxMarks,
            minMarks: minMarks
        };
        setQuestions([...questions, newQuestion]);
        setCurrentQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption(0);
        setMaxMarks(10);
        setMinMarks(0);
    };

    const handleSaveQuiz = () => {
        // Here you would handle saving the quiz (e.g., send data to backend)
        // Reset state after saving
        setQuizName('');
        setQuestions([]);
        setCurrentQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption(0);
        setMaxMarks(10);
        setMinMarks(0);
        alert('Quiz saved successfully!');
    };

    const handleOptionChange = (index, e) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    const handleCorrectOptionChange = (e) => {
        setCorrectOption(parseInt(e.target.value, 10));
    };

    return (
        <div className="container py-4">
            <h2 className="heading">Create Quiz</h2>
            <div className="mb-3">
                <label htmlFor="quizName" className="form-label">Quiz Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="quizName"
                    value={quizName}
                    onChange={(e) => setQuizName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="question" className="form-label">Question:</label>
                <input
                    type="text"
                    className="form-control"
                    id="question"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Options:</label>
                {options.map((option, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={`Option ${index + 1}`}
                            value={option}
                            onChange={(e) => handleOptionChange(index, e)}
                        />
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="correctOption"
                                id={`correctOption${index}`}
                                value={index}
                                checked={correctOption === index}
                                onChange={handleCorrectOptionChange}
                            />
                            <label className="form-check-label" htmlFor={`correctOption${index}`}>
                                Correct Answer
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row mb-3">
                <div className="col-sm-6">
                    <label htmlFor="maxMarks" className="form-label">Maximum Marks:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="maxMarks"
                        value={maxMarks}
                        onChange={(e) => setMaxMarks(parseInt(e.target.value, 10))}
                    />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="minMarks" className="form-label">Minimum Marks:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="minMarks"
                        value={minMarks}
                        onChange={(e) => setMinMarks(parseInt(e.target.value, 10))}
                    />
                </div>
            </div>
            <button className="btn btn-primary me-2" onClick={handleAddQuestion}>Add Question</button>
            <button className="btn btn-success" onClick={handleSaveQuiz}>Save Quiz</button>

            <div className="mt-4">
                <h3>Preview:</h3>
                {questions.map((q, index) => (
                    <div key={index} className="mb-3">
                        <h5>{index + 1}. {q.question}</h5>
                        <ul className="list-group">
                            {q.options.map((option, idx) => (
                                <li key={idx} className={`list-group-item ${q.correctOption === idx ? 'bg-success text-white' : ''}`}>
                                    {option} {q.correctOption === idx ? '(Correct)' : ''}
                                </li>
                            ))}
                        </ul>
                        <p>Max Marks: {q.maxMarks}, Min Marks: {q.minMarks}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
