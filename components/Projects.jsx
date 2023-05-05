import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import multipleImg from '../public/assets/projects/multiPL-E.png';
import aeroImg from '../public/assets/projects/revised-aero.png'
import stonksImg from '../public/assets/projects/stonks.gif'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <h2 className="uppercase text-3xl py-2 tracking-wident text-[#68B0AB]">
            Projects
          </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Objective-C Translator'
            backgroundImg={multipleImg}
            projectUrl='/property'
            tech='Python, Obj-C, Code LLMs'
          />
          <ProjectItem
            title='AerospaceNU Engine Control Software'
            backgroundImg={aeroImg}
            projectUrl='/crypto'
            tech='C++'
          />
          <ProjectItem
            title='High School - Platformer Game'
            backgroundImg={stonksImg}
            projectUrl='/netflix'
            tech='Unity, C#'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;