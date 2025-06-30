import skillsData from '../../data/skills.json'

function SkillsCard() {
  return (
   

      <div className="text-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="inline-block m-1 px-3 py-1 bg-gradient-to-t from-primary-dark to-accent-gold text-text-light rounded text-sm font-semibold transition-transform duration-300 hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
  );
}

export default SkillsCard;