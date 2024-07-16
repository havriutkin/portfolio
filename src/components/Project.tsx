import Skill from "./Skill";

interface ProjectProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
}

function Project({ title, description, imgSrc, imgAlt, technologies, githubLink, liveLink }: ProjectProps) {
    return (
        <div className="flex flex-col lg:flex-row rounded-md
                        font-jet-brains-mono dark:text-white gap-5 p-3 
                        shadow-md shadow-gray-700
                        transition-all hover:scale-105 hover:shadow-lg hover:shadow-gray-600">
            <img width="375" height="200" src={imgSrc} alt={imgAlt}
                className="hidden lg:block" />
            <div className="flex flex-col items-start justify-around gap-3">
                <h3 className=" text-xl">{title}</h3>
                <p>{description}</p>
                <div className="flex flex-wrap justify-start items-center gap-2">
                    {technologies.map((tech, index) => (
                        <Skill name={tech} key={index}/>
                    ))}
                </div>

                <div className="flex justify-start items-center gap-5 text-lg">
                    <a className=" bg-accent-purple p-1 rounded-sm transition-all hover:scale-105" href={githubLink}>Code</a>
                    {liveLink && <a className=" bg-primary-grey text-black p-1 rounded-sm transition-all hover:scale-105" href={liveLink}>Live</a>}
                </div>
            </div>
        </div>
    );
}

export default Project;