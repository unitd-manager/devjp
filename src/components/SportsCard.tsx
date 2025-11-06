import React from "react";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SportsCardProps {
  image: string;
  title: string;
  date: string;
  participants: number;
  description: string;
  prize: number;
}

const SportsCard: React.FC<SportsCardProps> = ({
  image,
  title,
  date,
  participants,
  description,
  prize,
}) => {
  return (
    <div className="relative flex items-center justify-between p-6 rounded-xl border border-[#fff]/90 bg-[#201257] hover:bg-[#281a66] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
      {/* Left image */}
      <div className="flex items-center space-x-5">
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-[#6d5ae8]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_3px_8px_rgba(0,0,0,0.3)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
          <div className="flex items-center text-sm text-purple-200 mb-2">
            <Calendar className="h-4 w-4 mr-1 opacity-80" />
            <span>{date}</span>
            <Users className="h-4 w-4 ml-4 mr-1 opacity-80" />
            <span>{participants} PARTICIPANTS</span>
          </div>
          <p className="text-purple-100 text-sm">{description}</p>
        </div>
      </div>

      {/* Right prize section */}
      <div className="flex flex-col items-end justify-center bg-[#2b1670]/70 rounded-lg p-4 border border-[#5e4bde]/40 shadow-inner">
        <p className="text-sm text-purple-200 mb-1">In Prizes</p>
        <p className="text-3xl font-bold text-emerald-400 mb-3">${prize}</p>
        <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white text-sm font-semibold px-6 py-2 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_12px_rgba(128,0,255,0.4)]">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default SportsCard;
