import React from "react";
import Container from "./Container";
import { FaRegCalendarAlt } from "react-icons/fa";

const CustomerTickets = ({ cards, handleCardClick }) => {
    return (

        <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {/* mapping card */}
                {cards
                    .filter((card) => card.status !== "Resolved")
                    .map((card) => {
                        const formattedDate = new Date(card.createdAt).toLocaleDateString(
                            "en-US"
                        );
                        return (
                            <div
                                key={card.id}
                                onClick={() => handleCardClick(card.id)}
                                className="bg-white rounded-lg shadow p-4 h-full"
                            >
                                <div className=" flex flex-col md:flex-row justify-between items-start">
                                    <h3 className=" font-semibold text-lg text-gray-800">
                                        {card.title}
                                    </h3>
                                    <span
                                        className={`cursor-pointer my-3 font-semibold text-sm px-2 py-1 rounded-2xl ${card.status === "In-Progress"
                                                ? "bg-[#F8F3B9] text-[#9C7700]"
                                                : "bg-[#B9F8CF] text-[#0B5E06]"
                                            }`}
                                    >
                                        {card.status === "In-Progress"
                                            ? "🟡 In-Progress"
                                            : "🟢 Open"}
                                    </span>
                                </div>
                                <p className=" text-gray-600 ">{card.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="my-3 ">
                                        <span className="text-gray-600 "># {card.id}</span>
                                        <span
                                            className={`ml-2 font-semibold flex flex-col md:flex-row mt-3 md:mt-0 uppercase ${card.priority === "High Priority"
                                                    ? "text-[#F83044]"
                                                    : card.priority === "Medium Priority"
                                                        ? "text-yellow-500"
                                                        : "text-green-500"
                                                }`}
                                        >
                                            {card.priority}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-600 ">
                                        <span>{card.customer_name}</span>
                                        <span className="ml-2  items-center gap-1 flex flex-col md:flex-row mt-5 md:mt-0">
                                            <FaRegCalendarAlt className="text-gray-500" />
                                            {formattedDate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>

    );
};
export default CustomerTickets;
