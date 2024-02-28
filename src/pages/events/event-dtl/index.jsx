// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import useSmoothScroll from '../../../hooks/general/useSmoothScroll';
// import useEmailAuth from '../../../hooks/auth/useEmailAuth';
// import { useFirestore } from '../../../context/FirestoreContext';

// import { RiTeamLine } from "react-icons/ri";
// import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineEmojiEvents, MdLogin } from "react-icons/md";
// import { GiSandsOfTime, GiPodiumWinner } from "react-icons/gi";

// import Timeline from '../../../components/timeline';
// import EventCarousel from '../../../components/carousel/event-carousel';

// import { eventsData } from '../../../.data/event'

// const EventDtls = () => {
//   useSmoothScroll()

//   const [isLoading, setIsLoading] = useState(false)
//   const [eventData, setEventData] = useState()
//   const [activeTab, setActiveTab] = useState();
//   const [isAuth, setIsAuth] = useState(false)

//   const { eventId } = useParams();
//   const { currentUser } = useEmailAuth()
//   const { getDocumentData: getEventData } = useFirestore()

//   const handleGetEventData = async () => {
//     setIsLoading(true)
//     try {
//       const res = await getEventData('events', eventId);
//       // console.log(res)
//       setEventData(res)
//     } catch (error) {
//       console.error('Error while getting event data: ', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleTabChange = (value) => {
//     setActiveTab(value)
//   }

//   useEffect(() => {

//     if (currentUser) {
//       setIsAuth(true)
//     } else {
//       setIsAuth(false)
//     }

//     handleGetEventData()
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <section className='space-y-6'>
//       <section className='mt-4 mx-auto'>
//         <div className="w-4/5 h-96 mx-auto overflow-hidden shadow-lg flex justify-center items-center">
//           <img
//             src={eventData.eventImage}
//             alt="Brandladder"
//             className=''
//             loading='lazy'
//           />
//         </div>
//       </section>
//       <section className='grid grid-cols-3 gap-4 px-10 z-0'>
//         <aside className='col-span-1 bg-white shadow-2xl px-4 py-12 space-y-6' >
//           <div className="grid grid-cols-2 gap-4">
//             <p className='text-center'>Free</p>

//             {
//               isAuth ? (
//                 <button
//                   className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
//                   Enroll Now <MdOutlineEmojiEvents />
//                 </button>
//               ) : (
//                 <Link to='/login'>
//                   <button
//                     className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
//                     Signin To Enroll <MdLogin />
//                   </button>
//                 </Link>
//               )
//             }
//           </div>

//           <div className='space-y-6'>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <GiPodiumWinner />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Eligibility</p>
//                 <small>{eventData.eligibility}</small>
//               </aside>
//             </section>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <RiTeamLine />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Team Size</p>
//                 <small>{eventData.teamSize[0].min} - {eventData.teamSize[0].max}</small>
//               </aside>
//             </section>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <GiSandsOfTime />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Registration Deadline</p>
//                 <small>{eventData.eventTimeline[0].reg_end}</small>
//               </aside>
//             </section>
//           </div>
//           <div>
//             {/* <h3>Share on socials</h3> */}
//             {/* <SocialShareButton url={eventData.shocialShareLink} title='test' /> */}

//           </div>
//         </aside>
//         <aside className='col-span-2 bg-white shadow-2xl p-4'>
//           <section className="card bg-orange-1 max-w-full">
//             <div className="card-body">
//               <div className=" grid grid-cols-3 gap-4">
//                 <img src="" alt="" />
//                 <div className='space-y-3'>
//                   <h1 className='text-black text-2xl'>title</h1>
//                   <span className='flex space-x-2' >
//                     <HiOutlineOfficeBuilding className='my-auto' />
//                     <p>Compnay Name</p>
//                   </span>
//                   <small>hastags</small> <br />
//                   <span className="badge badge-outline-error"><IoLocationOutline /> Online</span>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className='space-y-4 py-6'>

//             <div className="w-3/5 mx-auto">
//               <ul className="flex justify-between border-b pb-2">
//                 <li
//                   className={`cursor-pointer ${activeTab === 'brief' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('brief')}
//                 >
//                   Brief
//                 </li>
//                 <li
//                   className={`cursor-pointer ${activeTab === 'problemStatement' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('problemStatement')}
//                 >
//                   Problem Statement
//                 </li>
//                 <li
//                   className={`cursor-pointer ${activeTab === 'timeline' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('timeline')}
//                 >
//                   Timeline
//                 </li>
//               </ul>
//             </div>
//             {activeTab === 'brief' && (
//               <div>
//                 Brief Content
//               </div>
//             )}
//             {activeTab === 'problemStatement' && (
//               <div>
//                 Problem Statement Content
//               </div>
//             )}
//             {activeTab === 'timeline' && (
//               <div>
//                 <Timeline />
//               </div>
//             )}
//           </section>
//         </aside>
//       </section>

//       <section>
//         <p className="text-orange-4"> ..... Realted Events</p>
//         <EventCarousel eventList={eventsData} isAuth={isAuth} />
//       </section>
//     </section>
//   )
// }

// export default EventDtls

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useFirestore } from '../../../context/FirestoreContext';
// import useSmoothScroll from '../../../hooks/general/useSmoothScroll';
// import useEmailAuth from '../../../hooks/auth/useEmailAuth';

// import { RiTeamLine } from "react-icons/ri";
// import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineEmojiEvents, MdLogin } from "react-icons/md";
// import { GiSandsOfTime, GiPodiumWinner } from "react-icons/gi";
// // import { FaAngleDoubleDown } from "react-icons/fa";

// // import SocialShareButton from '../../../components/share-on-socials'
// import Timeline from '../../../components/timeline';
// import EventCarousel from '../../../components/carousel/event-carousel';

// import { eventsData } from '../../../.data/event'

// const EventDtl = () => {
//   useSmoothScroll();

//   const [activeTab, setActiveTab] = useState();
//   const [isAuth, setIsAuth] = useState(false)

//   const { eventId } = useParams();
//   const { currentUser } = useEmailAuth()

//   const handleTabChange = (value) => {
//     setActiveTab(value)
//   }

//   useEffect(() => {
//     if (currentUser) {
//       setIsAuth(true)
//     } else {
//       setIsAuth(false)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   console.log(eventId)

//   return (
//     <section className='space-y-6'>
//       <section className='mt-4 mx-auto'>
//         <div className="w-4/5 h-96 mx-auto overflow-hidden shadow-lg flex justify-center items-center">
//           <img src="https://source.unsplash.com/random" alt="Brandladder" className='' />
//         </div>
//       </section>
//       <section className='grid grid-cols-3 gap-4 px-10 z-0'>
//         <aside className='col-span-1 bg-white shadow-2xl px-4 py-12 space-y-6' >
//           <div className="grid grid-cols-2 gap-4">
//             <p className='text-center'>Free</p>

//             {
//               isAuth ? (
//                 <button
//                   className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
//                   Enroll Now <MdOutlineEmojiEvents />
//                 </button>
//               ) : (
//                 <Link to='/login'>
//                   <button
//                     className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
//                     Signin To Enroll <MdLogin />
//                   </button>
//                 </Link>
//               )
//             }
//           </div>

//           <div className='space-y-6'>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <GiPodiumWinner />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Eligibility</p>
//                 <small>All</small>
//               </aside>
//             </section>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <RiTeamLine />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Team Size</p>
//                 <small>1 - 2</small>
//               </aside>
//             </section>
//             <section className="grid grid-cols-3 gap-4">
//               <aside className="border border-orange-3 rounded-full col-span-1 flex justify-center items-center">
//                 <GiSandsOfTime />
//               </aside>
//               <aside className='col-span-2'>
//                 <p>Registration Deadline</p>
//                 <small>date</small>
//               </aside>
//             </section>
//           </div>
//           <div>
//             {/* <h3>Share on socials</h3> */}
//             {/* <SocialShareButton url={eventData.shocialShareLink} title='test' /> */}

//           </div>
//         </aside>
//         <aside className='col-span-2 bg-white shadow-2xl p-4'>
//           <section className="card bg-orange-1 max-w-full">
//             <div className="card-body">
//               <div className=" grid grid-cols-3 gap-4">
//                 <img src="" alt="" />
//                 <div className='space-y-3'>
//                   <h1 className='text-black text-2xl'>title</h1>
//                   <span className='flex space-x-2' >
//                     <HiOutlineOfficeBuilding className='my-auto' />
//                     <p>Compnay Name</p>
//                   </span>
//                   <small>hastags</small> <br />
//                   <span className="badge badge-outline-error"><IoLocationOutline /> Online</span>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className='space-y-4 py-6'>

//             <div className="w-3/5 mx-auto">
//               <ul className="flex justify-between border-b pb-2">
//                 <li
//                   className={`cursor-pointer ${activeTab === 'brief' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('brief')}
//                 >
//                   Brief
//                 </li>
//                 <li
//                   className={`cursor-pointer ${activeTab === 'problemStatement' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('problemStatement')}
//                 >
//                   Problem Statement
//                 </li>
//                 <li
//                   className={`cursor-pointer ${activeTab === 'timeline' ? 'border-b-2 text-black border-orange-6' : ''}`}
//                   onClick={() => handleTabChange('timeline')}
//                 >
//                   Timeline
//                 </li>
//               </ul>
//             </div>
//             {activeTab === 'brief' && (
//               <div>
//                 Brief Content
//               </div>
//             )}
//             {activeTab === 'problemStatement' && (
//               <div>
//                 Problem Statement Content
//               </div>
//             )}
//             {activeTab === 'timeline' && (
//               <div>
//                 <Timeline />
//               </div>
//             )}
//           </section>
//         </aside>
//       </section>

//       <section>
//         <p className="text-orange-4"> ..... Realted Events</p>
//         <EventCarousel eventList={eventsData} isAuth={isAuth} />
//       </section>
//     </section>
//   )
// }

// export default EventDtl

import React from 'react'

const EventDtls = () => {
  return (
    <div>
      Comming soon
    </div>
  )
}

export default EventDtls
