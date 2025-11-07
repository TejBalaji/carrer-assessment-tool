import React from 'react';

interface ReviewPanelProps {
  skills: Record<string, number>;
  personality: Record<string, string>;
  interests: string[];
  onEdit: () => void;
  onSubmit: () => void;
}

const ReviewPanel: React.FC<ReviewPanelProps> = ({ skills, personality, interests, onEdit, onSubmit }) => {
  return (
    <div className="card p-4">
      <h2 className="text-xl font-semibold">Review Your Assessment</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Skills</h3>
        <ul>
          {Object.entries(skills).map(([skill, score]) => (
            <li key={skill}>
              {skill}: {score}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Personality</h3>
        <ul>
          {Object.entries(personality).map(([trait, value]) => (
            <li key={trait}>
              {trait}: {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Interests</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex justify-between">
        <button className="btn-primary" onClick={onEdit}>
          Edit
        </button>
        <button className="btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewPanel;