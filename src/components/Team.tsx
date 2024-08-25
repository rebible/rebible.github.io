import TeamMember from "@/components/TeamMember";

const Team: React.FC = () => (
  <section id="team" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#dfdfdf]">팀</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TeamMember
          name="David K."
          position="CEO"
          career={[
            "8 years of experience in the blockchain industry",
            "Founded a blockchain exchange",
            "Worked for a trading company covering regions from South America to Southeast Asia"
          ]}
          education={[
            "eMBA from INSEAD Business School, 2017",
            "Studied graduate school level Counseling and Coaching from Yonsei University, 2017",
            "BA of Theology/Philosophy from Yonsei University, 2014",
          ]}
        />
        <TeamMember
          name="Essie L."
          position="CPO"
          career={[
            "9 years of development experience, mostly at AI startups",
            "Experience in creating and publishing a mobile game app"
          ]}
          education={[
            "Pursuing BSc of Computer Science at University of London, 2025",
            "BS of Industrial Design from KAIST, 2015",
            "Studied Interactive Environments Minor Program at TU Delft, Fall 2013",
          ]}
        />
      </div>
    </div>
  </section>
);

export default Team;
