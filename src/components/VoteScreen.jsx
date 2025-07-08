import React, { useState } from 'react';
import CandidateCard from './CandidateCard';
import ConfirmationModal from './ConfirmationModal';
import { motion } from 'framer-motion';

const VoteScreen = ({ position, candidates, onConfirm }) => {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const voteType = candidates.length === 1 ? 'single' : 'multiple';

  const handleYes = () => {
    onConfirm({ candidateId: candidates[0].id, choice: 'yes' });
  };

  const handleNo = () => {
    onConfirm({ candidateId: candidates[0].id, choice: 'no' });
  };

  return (
    <motion.div
      className="min-h-screen bg-cover bg-center pb-10 text-white"
      style={{ backgroundImage: "url('/images/Glass.jpg')" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-5 bg-black/50 rounded-lg backdrop-blur-sm mb-8">
        <img src="/images/ubids.png" alt="School Logo" className="h-12 w-12 object-contain rounded-full" />
        <h1 className="text-xl text-black font-bold tracking-wider uppercase">SDD UBIDS</h1>
      </div>

      {/* Position Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase drop-shadow-md text-black">
          Vote for {position}
        </h2>
      </div>

      {/* Candidate Cards */}
      <div className={`grid gap-10 place-items-center justify-center mx-6 ${
        candidates.length === 1
          ? 'grid-cols-1'
          : candidates.length === 2
          ? 'grid-cols-1 md:grid-cols-2'
          : 'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {candidates.map((candidate, index) => (
          <div
            key={candidate.id}
            onClick={voteType === 'multiple' ? () => setSelected(candidate.id) : undefined}
            className={`relative bg-white/10 border border-white/30 rounded-3xl p-6 shadow-2xl backdrop-blur-lg text-black cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#000] ${
              selected === candidate.id ? 'ring-4 ring-accent' : ''
            }`}
          >
            {selected === candidate.id && (
              <div className="absolute top-4 right-4 bg-green-600 text-white p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            <div className="flex justify-center mb-4">
              <img
                src={candidate.image || `/images/student${index + 1}.jpg`}
                alt={candidate.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white/40 shadow-md"
              />
            </div>

            <h3 className="text-xl font-bold text-center mb-1">{candidate.name}</h3>
            <p className="text-sm font-medium text-center text-accent mb-2">
              Aspiring: {position}
            </p>
            <p className="text-sm text-center text-black/100 leading-snug px-2">
              {candidate.manifesto || 'A visionary leader with commitment to progress and unity.'}
            </p>

            {voteType === 'single' && (
              <div className="flex justify-center gap-4 mt-6">
                
                <button
                  onClick={handleNo}
                  className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={handleYes}
                  className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer"
                >
                  Yes
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      {voteType === 'multiple' && (
        <div className="text-center mt-14">
          <button
            disabled={!selected}
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-black/60 disabled:opacity-50"
          >
            Confirm Vote
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <ConfirmationModal
          candidateId={selected}
          onCancel={() => setShowModal(false)}
          onConfirm={() => onConfirm({ candidateId: selected })}
        />
      )}
    </motion.div>
  );
};

export default VoteScreen;
