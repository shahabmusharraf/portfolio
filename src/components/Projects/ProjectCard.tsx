// // ProjectCard.js

// import React from 'react';

// const ProjectCard = ({ title, description, imageUrl }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500">
//       <img className="w-full" src={imageUrl} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 py-4">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full opacity-0 hover:opacity-100 transition duration-300">
//           View Project
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
// ProjectCard.js

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 relative">
      <Image className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <Link href={projectLink} target='_blank' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
