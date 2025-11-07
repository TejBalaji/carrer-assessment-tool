import React, { useState } from 'react';
import { SKILL_QUESTIONS, PERSONALITY_PAIRS, INTEREST_TOPICS } from '../../data/questions';
import { computeAndShowResults } from '../../lib/scoring';
import ReviewPanel from './ReviewPanel';

const FullAssessment = () => {
  const [fullState, setFullState] = useState({
    skills: {},
    personality: {},
    interests: [],
    timestamp: null,
  });
  const [fullPhase, setFullPhase] = useState('skills');
  const [fullIndex, setFullIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startFullAssessment = () => {
    setFullState({ skills: {}, personality: {}, interests: [], timestamp: null });
    setFullPhase('skills');
    setFullIndex(0);
    setShowResults(false);
  };

  const nextStep = () => {
    if (fullPhase === 'skills') {
      const currentQuestion = SKILL_QUESTIONS[fullIndex];
      const updatedSkills = { ...fullState.skills, [currentQuestion.id]: currentQuestion.value };
      setFullState({ ...fullState, skills: updatedSkills });

      if (fullIndex < SKILL_QUESTIONS.length - 1) {
        setFullIndex(fullIndex + 1);
      } else {
        setFullPhase('personality');
        setFullIndex(0);
      }
    } else if (fullPhase === 'personality') {
      const currentPair = PERSONALITY_PAIRS[fullIndex];
      const updatedPersonality = { ...fullState.personality, [currentPair.id]: currentPair.value };
      setFullState({ ...fullState, personality: updatedPersonality });

      if (fullIndex < PERSONALITY_PAIRS.length - 1) {
        setFullIndex(fullIndex + 1);
      } else {
        setFullPhase('interests');
        setFullIndex(0);
      }
    } else if (fullPhase === 'interests') {
      setFullPhase('review');
      setFullState({ ...fullState, timestamp: new Date().toISOString() });
    } else if (fullPhase === 'review') {
      const results = computeAndShowResults(fullState);
      setFullState({ ...fullState, results });
      setShowResults(true);
    }
  };

  const renderCurrentStep = () => {
    if (fullPhase === 'skills') {
      return <SkillQuestion question={SKILL_QUESTIONS[fullIndex]} />;
    } else if (fullPhase === 'personality') {
      return <PersonalityPair pair={PERSONALITY_PAIRS[fullIndex]} />;
    } else if (fullPhase === 'interests') {
      return <InterestSelection interests={INTEREST_TOPICS} />;
    } else if (fullPhase === 'review') {
      return <ReviewPanel results={fullState.results} />;
    }
  };

  return (
    <div>
      <h2>Full Assessment</h2>
      {renderCurrentStep()}
      <button onClick={nextStep}>Next</button>
      {showResults && <div>Your results have been computed!</div>}
    </div>
  );
};

export default FullAssessment;