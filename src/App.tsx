import './App.css';
import CodeBlock from './components/CodeBlock';
import Header from './components/Header';
import Project from './components/Project';
import { Variants, motion } from 'framer-motion';
import projects  from './resources/projects.json';
import { useState, useEffect } from 'react';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	// Change title
	useEffect(() => {
		document.title = "Vladyslav Havriutkin Portfolio";
	}, []);

	const handleToggle = (value: boolean) => {
		setIsDarkMode(value);
	}
	
	const cursorVariants: Variants = {
		animate: {
			opacity: [1.0, 0.0],
			transition: { repeat: Infinity, repeatType: "loop", duration: 1.0, ease: "anticipate" },
		},
	};

	return (
		<div className={`${isDarkMode ? 'dark' : ''} 
						bg-white dark:bg-dark-bg 
						w-full h-full flex flex-col gap-10 `}>
			<Header onToggle={handleToggle}/>

			{/* CodeBlock */}
			<div className='flex justify-center items-center w-full h-full'>
				<div className='flex flex-col justify-center items-center w-full h-full'>
					<h1 className='w-2/3 mb-10 font-jet-brains-mono font-extrabold text-left text-4xl
								 text-blue-800 dark:text-code-blue'>
					&gt; Vladyslav Havriutkin
					<motion.span
						className="ml-2 h-4 w-2 bg-blue-800 dark:bg-code-blue"
						variants={cursorVariants}
						animate="animate"
					>|</motion.span>
					</h1>
					<CodeBlock />
				</div>
			</div>

			{/* Projects */}
			<div id='projects' className='flex-grow flex flex-col items-center justify-around mt-10'>
				<h2 className=' font-jet-brains-mono font-extrabold dark:text-white text-2xl text-center'>Projects</h2>
				<div className='flex flex-col items-center justify-around mt-10 w-2/3 gap-10'>
					{projects.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							description={project.description}
							imgSrc={project.imgSrc}
							imgAlt={project.imgAlt}
							technologies={project.technologies}
							githubLink={project.githubLink}
							liveLink={project.liveLink}
						/>
					))}
				</div>
			</div>

			{/* Contacts */}
			<div id='contacts' className='flex-grow flex flex-col items-center justify-around mt-10 h-fit'>
				<h2 className=' font-jet-brains-mono font-extrabold dark:text-white text-2xl text-center'>Contacts</h2>
				<div className='flex flex-col items-center justify-around mt-10 w-2/3'>
					<a href='https://github.com/havriutkin' className='text-xl text-custom-purple hover:underline'>GitHub</a>
					<a href='https://www.linkedin.com/in/vladyslav-havriutkin/' className='text-xl text-custom-purple hover:underline'>LinkedIn</a>
					<span className='text-xl text-custom-purple'>havriutkin@gmail.com</span>
				</div>
				<h3 className='dark:text-white font-jet-brains-mono'>Made by: Vladyslav Havriutkin</h3>
			</div>
		</div>
	)
}

export default App
