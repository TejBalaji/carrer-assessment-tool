import React from 'react';

interface ResultCardProps {
  title: string;
  skills: { name: string; score: number }[];
  personality: string;
  interests: string[];
  careerSuggestions: { label: string; score: number }[];
}

const ResultCard: React.FC<ResultCardProps> = ({
  title,
  skills,
  personality,
  interests,
  careerSuggestions,
}) => {
  return (
    <div className="card">
      <h3 className="font-semibold text-xl">{title}</h3>
      <div className="mt-4">
        <h4 className="font-semibold">Top Skills</h4>
        <ul className="list-disc pl-6">
          {skills.map((skill) => (
            <li key={skill.name}>
              {skill.name} — {skill.score}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Personality Snapshot</h4>
        <p>{personality}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Interests</h4>
        <p>{interests.join(', ')}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">Career Suggestions</h4>
        <ul className="list-decimal pl-6">
          {careerSuggestions.map((career) => (
            <li key={career.label}>
              {career.label} <span className="muted text-sm">(score {career.score})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;