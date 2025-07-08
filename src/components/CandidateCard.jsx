import React from 'react';

const CandidateCard = ({ candidate, voteType, isSelected, onSelect, onVoteYes, onVoteNo }) => {
  return (
    <div
      onClick={voteType === 'multiple' ? onSelect : undefined}
      className={`p-5 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 ${
        isSelected ? 'border-primary bg-blue-50' : 'border-gray-200'
      }`}
    >
      <h3 className="text-lg font-semibold text-center mb-2">{candidate.name}</h3>

      {voteType === 'single' && (
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onVoteYes}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Yes
          </button>
          <button
            onClick={onVoteNo}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateCard;
