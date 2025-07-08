import React, { useState } from 'react';
import VoteScreen from '../components/VoteScreen';
import FinalPrompt from '../components/FinalPrompt';

const VotingFlow = ({ onFinish }) => {
  const positions = [
    {
      position: 'Treasurer',
      candidates: [{ id: 't1', name: 'Mohammed Nabil' }],
    },
    {
      position: 'WOCOM',
      candidates: [
        { id: 'Ayisha', name: 'Musah Ayisha' },
        { id: 'Gifty', name: 'Owusu Gifty' },
      ],
    },
    {
      position: 'President',
      candidates: [
        { id: 'Anthony', name: 'Dev Anthony' },
        { id: 'Clara', name: 'Kofi Clara' },
        { id: 'Kindo', name: 'Abdulai Kindo' },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [votes, setVotes] = useState({});
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);

  const handleVote = (position, value) => {
    setVotes({ ...votes, [position]: value });
    if (step === positions.length - 1) {
      setShowFinalPrompt(true);
    } else {
      setStep(step + 1);
    }
  };

  if (showFinalPrompt) return <FinalPrompt onClose={onFinish} />;

  return (
    <VoteScreen
      key={positions[step].position}
      position={positions[step].position}
      candidates={positions[step].candidates}
      onConfirm={(value) => handleVote(positions[step].position, value)}
    />
  );
};

export default VotingFlow;
