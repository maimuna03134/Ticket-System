import React from 'react';

const ResolvedTask = ({ cards }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Resolved Task</h2>
            {cards.length === 0 && (
                <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
            )}
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="bg-[#E0E7FF] rounded-lg shadow p-4 flex flex-col justify-between my-4"
                >
                    <span>{card.title}</span>
                    <span className="text-green-600 mt-1">✅ Completed </span>
                </div>
            ))}
        </div>
    );
};

export default ResolvedTask;