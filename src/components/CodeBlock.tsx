import TypingAnimation from "./TypingAnimation";
import resume from "../../public/Vladyslav_Havriutkin_Resume.pdf";

function CodeBlock(){
    return (
        <div className=" bg-code-bg w-2/3 h-max min-h-screen-3/4  md:min-h-screen-1/2 lg:min-h-screen-3/4
                        rounded-md shadow-lg
                        flex flex-col justify-start items-start gap-5
                        font-jet-brains-mono text-white text-lg py-3 pl-4 break-words pr-3">

            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={100} speed={0} />
                <TypingAnimation text="Vlad.location" className="text-code-blue" delay={500} speed={30} />
                <br/>
                <TypingAnimation text='"Atlanta, GA, USA"' className="text-code-brown" delay={1000} speed={0} />
            </div>

            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={1000} speed={0} />
                <TypingAnimation text="Vlad.contactInfo" className="text-code-blue" delay={2500} speed={30} />
                <br/>
                <TypingAnimation text='[' className="text-code-pink" delay={3000} speed={0} />
                <TypingAnimation text='"havriutkin@gmail.com"' className="text-code-brown" delay={3000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={3000} speed={0} />
                <a href="https://www.linkedin.com/in/vladyslav-havriutkin/">
                    <TypingAnimation text='LinkedIn' className="text-code-blue underline cursor-pointer" delay={3000} speed={0} />
                </a>
                <TypingAnimation text=',&nbsp;' className="text-white" delay={3000} speed={0} />
                <a href="https://github.com/havriutkin">
                    <TypingAnimation text='GitHub' className="text-code-blue underline cursor-pointer" delay={3000} speed={0} />
                </a>
                <TypingAnimation text=']' className="text-code-pink" delay={3000} speed={0} />
            </div>

            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={3000} speed={0} />
                <TypingAnimation text="Vlad.resume" className="text-code-blue" delay={4500} speed={30} />
                <br/>
                <TypingAnimation text='"' className="text-code-brown" delay={5000} speed={0} />
                <a href={resume} target="_blank">
                <TypingAnimation text='vlad.pdf' className="text-code-brown underline cursor-pointer" delay={5000} speed={0} />
                </a>
                <TypingAnimation text='"' className="text-code-brown" delay={5000} speed={0} />
            </div>

            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={5000} speed={0} />
                <TypingAnimation text="Vlad.skills" className="text-code-blue" delay={6500} speed={30} />
                <br/>
                <TypingAnimation text='[' className="text-code-pink" delay={7000} speed={0} />
                <br/>
                <TypingAnimation text='"C/C++"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"Python"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"PostgreSQL"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"TypeScript"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"JavaScript"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"Express"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"React"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"TailwindCSS"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"Java"' className="text-code-brown" delay={7000} speed={0} />
                <TypingAnimation text=',&nbsp;' className="text-white" delay={7000} speed={0} />
                <TypingAnimation text='"Postman"' className="text-code-brown" delay={7000} speed={0} />
                <br/>
                <TypingAnimation text=']' className="text-code-pink" delay={7000} speed={0} />
            </div>
            
            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={7000} speed={0} />
                <TypingAnimation text="Vlad.education" className="text-code-blue" delay={8500} speed={30} />
                <br/>
                <TypingAnimation text='{' className="text-code-gold" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;school:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"Georgia Insistute of Technology"' className="text-code-brown" delay={9000} speed={0} />
                <TypingAnimation text=',' className="text-white" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;major:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"M.S. Computer Science"' className="text-code-brown" delay={9000} speed={0} />
                <TypingAnimation text=',' className="text-white" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;status:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"Robotics and Computational Perceptions"' className="text-code-brown" delay={9000} speed={0} />
                <br/>
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;school:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"V.N.Karazin Kharkiv National University"' className="text-code-brown" delay={9000} speed={0} />
                <TypingAnimation text=',' className="text-white" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;major:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"B.S. Computer Science"' className="text-code-brown" delay={9000} speed={0} />
                <TypingAnimation text=',' className="text-white" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='&nbsp;&nbsp;status:' className="text-code-blue" delay={9000} speed={0} />
                <TypingAnimation text='&nbsp;"Graduated with honors"' className="text-code-brown" delay={9000} speed={0} />
                <br/>
                <TypingAnimation text='}' className="text-code-gold" delay={9000} speed={0} />
            </div>

            <div className="max-w-full">
                <TypingAnimation text="&gt;&nbsp;" className=" text-white" delay={9000} speed={0} />
                <TypingAnimation text="hire(Vlad)" className="text-accent-pink" delay={10500} speed={30} />
            </div>

        </div>
    )
}

export default CodeBlock;