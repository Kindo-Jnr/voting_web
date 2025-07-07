import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import FinalPrompt from '../components/FinalPrompt';

const VotingPage = ({ onLogout }) => {
  const [selected, setSelected] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);

  const candidates = [
    {
      id: 'alice',
      name: 'Alice Johnson',
      image: '/public/images/student1.jpg',
      position: 'President',
      manifesto: 'Committed to transparency, unity, and student welfare.',
    },
    {
      id: 'bob',
      name: 'Bob Smith',
      image: '/public/images/student2.jpg',
      position: 'President',
      manifesto: 'Leadership with innovation and inclusivity.',
    },
    {
      id: 'clara',
      name: 'Clara Lee',
      image: '/public/images/student3.jpg',
      position: 'President',
      manifesto: 'Empowering students through smart policies.',
    },
  ];

  const handleVote = () => {
    setShowConfirm(false);
    setShowFinalPrompt(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/public/images/Glass.jpg')" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-sm">
        <img src="/public/images/ubids.png" alt="School Logo" className="h-12 w-12 object-contain rounded-3xl" />
        <h1 className="text-xl md:text-2xl font-display font-semibold tracking-wide uppercase">
          SDD UBIDS
        </h1>
      </div>

      {/* Portfolio / Position Title */}
      <div className="text-center mt-10 mb-6">
        <h2 className="text-4xl font-bold text-black drop-shadow-sm">
          Vote for President
        </h2>
      </div>

      {/* Candidate Cards */}
      <div className="grid gap-6 px-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
        {candidates.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`relative rounded-2xl p-4 bg-white/10 border border-white/20 backdrop-blur-xl text-black shadow-lg
                        transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#000] cursor-pointer
                        ${selected === c.id ? 'ring-4 ring-accent' : ''}`}
          >
            {/* Candidate Passport Image */}
            <div className="flex justify-center mb-4">
              <img
                src={c.image}
                alt={c.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white/30 shadow-md"
              />
            </div>

            <h3 className="text-xl font-semibold text-center">{c.name}</h3>
            <p className="text-sm font-light text-accent text-center mb-2">{c.position}</p>
            <p className="text-sm text-black/200 leading-snug text-center">{c.manifesto}</p>

            {/* Checkmark Badge */}
            {selected === c.id && (
              <div className="absolute top-4 right-4 bg-success text-black rounded-full p-2 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Vote Button */}
      <div className="text-center pb-16">
        <button
          disabled={!selected}
          onClick={() => setShowConfirm(true)}
          className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-black/40 transition disabled:opacity-50"
        >
          Confirm Vote
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <ConfirmationModal
          candidateId={selected}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleVote}
        />
      )}

      {/* Final Prompt as Modal */}
      {showFinalPrompt && <FinalPrompt onClose={onLogout} />}
    </div>
  );
};

export default VotingPage;
