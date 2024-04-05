interface SkillProps {
    name: string;
}

function Skill({ name }: SkillProps) {
    return (
        <div className="border border-yellow-300 rounded-sm p-1 text-sm w-fit">
            <span className="">{name}</span>
        </div>
    );
}

export default Skill;