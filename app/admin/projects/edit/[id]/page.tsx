// 'use client';

// import { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { projects } from '@/constants/index';

// export default function EditProjectPage() {

//   const params = useParams();
//   const router = useRouter();

//   const project = projects.find(
//     (item) => item.id === Number(params.id)
//   );

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         Project not found
//       </div>
//     );
//   }

//   const [title, setTitle] = useState(project.title);
//   const [description, setDescription] = useState(
//     project.shortDescription
//   );

//   const handleUpdate = (e: React.FormEvent) => {
//     e.preventDefault();

//     project.title = title;
//     project.shortDescription = description;

//     alert('Project updated successfully');

//     router.push('/admin/projects');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-10">

//       <h1 className="text-5xl font-bold mb-10">
//         Edit Project
//       </h1>

//       <form
//         onSubmit={handleUpdate}
//         className="max-w-3xl space-y-6"
//       >

//         {/* TITLE */}
//         <div className="space-y-2">
//           <label className="text-sm text-gray-400">
//             Project Title
//           </label>

//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4"
//           />
//         </div>

//         {/* DESCRIPTION */}
//         <div className="space-y-2">
//           <label className="text-sm text-gray-400">
//             Short Description
//           </label>

//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 h-40"
//           />
//         </div>

//         {/* BUTTON */}
//         <button
//           type="submit"
//           className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
//         >
//           Update Project
//         </button>

//       </form>
//     </div>
//   );
// }