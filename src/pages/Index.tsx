import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Markets from "@/components/Markets";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import UpcomingEventsPanel from "@/components/UpcomingEventsPanel";

const Index = () => {
  const dummyMatches = [
    {
      time: "7:00 PM",
      volume: "100,000",
      teams: {
        home: {
          name: "Team A",
          record: "10-2",
          logo: "src/assets/NFL_NO.webp",
        },
        away: {
          name: "Team B",
          record: "8-4",
          logo: "src/assets/NCAAFB_TULN.webp",
        },
      },
      odds: {
        home: {
          moneyline: -150,
          spread: "-3.5",
          total: "O 45.5",
        },
        away: {
          moneyline: +130,
          spread: "+3.5",
          total: "U 45.5",
        },
        draw: 250,
      },
    },
    {
      time: "8:30 PM",
      volume: "75,000",
      teams: {
        home: {
          name: "Team C",
          record: "6-6",
          logo: "src/assets/NCAAFB_USC.webp",
        },
        away: {
          name: "Team D",
          record: "9-3",
          logo: "src/assets/NCAAFB_TULN.webp",
        },
      },
      odds: {
        home: {
          moneyline: +110,
          spread: "+1.5",
          total: "O 38.0",
        },
        away: {
          moneyline: -130,
          spread: "-1.5",
          total: "U 38.0",
        },
        draw: 200,
      },
    },
    {
      time: "9:00 PM",
      volume: "120,000",
      teams: {
        home: {
          name: "Team E",
          record: "12-0",
          logo: "src/assets/NFL_NO.webp",
        },
        away: {
          name: "Team F",
          record: "5-7",
          logo: "src/assets/NCAAFB_TULN.webp",
        },
      },
      odds: {
        home: {
          moneyline: -200,
          spread: "-7.0",
          total: "O 50.0",
        },
        away: {
          moneyline: +180,
          spread: "+7.0",
          total: "U 50.0",
        },
        draw: 300,
      },
    },
      {
      time: "7:00 PM",
      volume: "100,000",
      teams: {
        home: {
          name: "Team G",
          record: "10-2",
          logo: "src/assets/NFL_NO.webp",
        },
        away: {
          name: "Team H",
          record: "8-4",
          logo: "src/assets/NCAAFB_TULN.webp",
        },
      },
      odds: {
        home: {
          moneyline: -150,
          spread: "-3.5",
          total: "O 45.5",
        },
        away: {
          moneyline: +130,
          spread: "+3.5",
          total: "U 45.5",
        },
        draw: 250,
      },
    },
      {
      time: "7:00 PM",
      volume: "100,000",
      teams: {
        home: {
          name: "Team I",
          record: "10-2",
          logo: "src/assets/NFL_NO.webp",
        },
        away: {
          name: "Team J",
          record: "8-4",
          logo: "src/assets/NCAAFB_TULN.webp",
        },
      },
      odds: {
        home: {
          moneyline: -150,
          spread: "-3.5",
          total: "O 45.5",
        },
        away: {
          moneyline: +130,
          spread: "+3.5",
          total: "U 45.5",
        },
        draw: 250,
      },
    },
      {
        time: "7:00 PM",
        volume: "100,000",
        teams: {
          home: {
            name: "Team K",
            record: "10-2",
            logo: "src/assets/NFL_NO.webp",
          },
          away: {
            name: "Team L",
            record: "8-4",
            logo: "src/assets/NCAAFB_TULN.webp",
          },
        },
        odds: {
          home: {
            moneyline: -150,
            spread: "-3.5",
            total: "O 45.5",
          },
          away: {
            moneyline: +130,
            spread: "+3.5",
            total: "U 45.5",
          },
          draw: 250,
        },
      },
      {
        time: "7:00 PM",
        volume: "100,000",
        teams: {
          home: {
            name: "Team M",
            record: "10-2",
            logo: "src/assets/NFL_NO.webp",
          },
          away: {
            name: "Team N",
            record: "8-4",
            logo: "src/assets/NCAAFB_TULN.webp",
          },
        },
        odds: {
          home: {
            moneyline: -150,
            spread: "-3.5",
            total: "O 45.5",
          },
          away: {
            moneyline: +130,
            spread: "+3.5",
            total: "U 45.5",
          },
          draw: 250,
        },
      },
      {
        time: "7:00 PM",
        volume: "100,000",
        teams: {
          home: {
            name: "Team O",
            record: "10-2",
            logo: "src/assets/NFL_NO.webp",
          },
          away: {
            name: "Team P",
            record: "8-4",
            logo: "src/assets/NCAAFB_TULN.webp",
          },
        },
        odds: {
          home: {
            moneyline: -150,
            spread: "-3.5",
            total: "O 45.5",
          },
          away: {
            moneyline: +130,
            spread: "+3.5",
            total: "U 45.5",
          },
          draw: 250,
        },
      },
      {
        time: "7:00 PM",
        volume: "100,000",
        teams: {
          home: {
            name: "Team Q",
            record: "10-2",
            logo: "src/assets/NFL_NO.webp",
          },
          away: {
            name: "Team R",
            record: "8-4",
            logo: "src/assets/NCAAFB_TULN.webp",
          },
        },
        odds: {
          home: {
            moneyline: -150,
            spread: "-3.5",
            total: "O 45.5",
          },
          away: {
            moneyline: +130,
            spread: "+3.5",
            total: "U 45.5",
          },
          draw: 250,
        },
      },
      {
        time: "7:00 PM",
        volume: "100,000",
        teams: {
          home: {
            name: "Team S",
            record: "10-2",
            logo: "src/assets/NFL_NO.webp",
          },
          away: {
            name: "Team T",
            record: "8-4",
            logo: "src/assets/NCAAFB_TULN.webp",
          },
        },
        odds: {
          home: {
            moneyline: -150,
            spread: "-3.5",
            total: "O 45.5",
          },
          away: {
            moneyline: +130,
            spread: "+3.5",
            total: "U 45.5",
          },
          draw: 250,
        },
      },
    
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Markets />
      <UpcomingEventsPanel matches={dummyMatches} />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
