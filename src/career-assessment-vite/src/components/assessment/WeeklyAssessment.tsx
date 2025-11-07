import React, { useState } from 'react';

const WEEKLY_QUESTIONS = [
  { id: 'w1', question: 'This week I felt more curious about learning new skills.' },
  { id: 'w2', question: 'This week I worked on something related to my career interests.' },
  { id: 'w3', question: 'I feel more confident about my chosen path than last week.' }
];

const WeeklyAssessment: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  
  const handleChange = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    console.log('Weekly Assessment Answers:', answers);
    // Here you can add logic to save the answers to local storage or send to an API
  };

  return (
    <div className="weekly-assessment">
      <h2 className="text-xl font-semibold">Weekly Assessment</h2>
      <div className="mt-4">
        {WEEKLY_QUESTIONS.map(question => (
          <div key={question.id} className="mb-4">
            <label className="block">{question.question}</label>
            <select
              className="border rounded p-2 mt-1"
              value={answers[question.id] || ''}
              onChange={(e) => handleChange(question.id, Number(e.target.value))}
            >
              <option value="">Select</option>
              <option value="0">Strongly disagree</option>
              <option value="1">Disagree</option>
              <option value="2">Neutral</option>
              <option value="3">Agree</option>
              <option value="4">Strongly agree</option>
            </select>
          </div>
        ))}
      </div>
      <button className="btn-primary mt-4" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default WeeklyAssessment;