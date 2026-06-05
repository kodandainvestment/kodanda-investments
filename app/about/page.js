import Hero from "./Hero";
import CompanyOverview from "./CompanyOverview";
import MissionVision from "./MissionVision";
import FundManagement from "./FundManagement";
import LeadershipTeam from "./LeadershipTeam";
import CoreValues from "./CoreValues";
import WhyIndore from "./WhyIndore";

export const metadata = { title: "About – Kodanda Investments" };

export default function AboutPage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <MissionVision />
      <FundManagement />
      <LeadershipTeam />
      <CoreValues />
      <WhyIndore />
    </>
  );
}
