import React from 'react';
import SportsCard from '@/components/SportsCard';
import logo from "@/assets/premium.jpg";
import Navbar from "@/components/Navbar";

const SportsPage = () => {
  const dummySportsEvents = [
    {
      image: logo,
      title: "NBA Spotlight",
      date: "NOV 27 23:00 - DEC 2 14:00",
      participants: 43,
      description: "Compete for a chance to win one of five special Rage Fan NFT prizes.",
      prize: 300,
    },
    {
      image: logo,
      title: "Football Frenzy",
      date: "DEC 1 18:00 - DEC 5 20:00",
      participants: 120,
      description: "Show your skills and win big in our weekly football challenge.",
      prize: 500,
    },
    {
      image: logo,
      title: "Tennis Open",
      date: "DEC 3 10:00 - DEC 7 16:00",
      participants: 25,
      description: "Serve your way to victory and claim exclusive tennis gear.",
      prize: 200,
    },
    {
      image: logo,
      title: "Basketball Bash",
      date: "DEC 6 19:00 - DEC 10 22:00",
      participants: 80,
      description: "Dunk, dribble, and dominate to win cash prizes.",
      prize: 400,
    },
    {
      image: logo,
      title: "Soccer Showdown",
      date: "DEC 8 14:00 - DEC 12 17:00",
      participants: 60,
      description: "Score goals and outplay your opponents for ultimate glory.",
      prize: 350,
    },
    {
      image: logo,
      title: "Hockey Heat",
      date: "DEC 10 20:00 - DEC 14 23:00",
      participants: 30,
      description: "Skate fast, shoot hard, and win the championship trophy.",
      prize: 450,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-white p-8">
        <h1 className="text-3xl font-bold mb-8">Sports Events</h1>
        <div className="grid grid-cols-1 gap-6">
          {dummySportsEvents.map((event, index) => (
            <SportsCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsPage;