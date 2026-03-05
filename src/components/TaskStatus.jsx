import React from 'react';


const TaskStatus = ({ cards, handleComplete }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Task Status</h2>
            {cards.length === 0 && (
                <p className="text-gray-500 text-sm">
                    Select a ticket to add to Task Status
                </p>
            )}
            {cards.map((card) => (
                <div
                    key={card.id}
                    className=" bg-white rounded-lg shadow p-4 flex flex-col justify-between  my-4"
                >
                    <span>{card.title}</span>
                    <button
                        onClick={() => handleComplete(card.id)}
                        className="bg-green-500 text-white text-sm my-3 px-3 py-2.5  w-full rounded cursor-pointer"
                    >
                        Complete
                    </button>
                </div>
            ))}
        </div>
    );

};

export default TaskStatus;