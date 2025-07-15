// import { useEffect, useState } from "react";
// import API from "./Api";
// import { toast } from "react-toastify";
// import {
//   FaCheckCircle,
//   FaTimesCircle,
//   FaHourglassHalf,
//   FaEnvelopeOpenText,
//   FaUniversity,
// } from "react-icons/fa";
// import scholarImg from "./images/apply.png"; // You must have this image in the correct path

// const Dashboard = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await API.get("/api/applications/my", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setApplications(res.data);
//       } catch (err) {
//         console.error(err);
//         toast.error("❌ Failed to load applications.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const getStatusDetails = (status) => {
//     switch (status) {
//       case "ACCEPTED":
//         return {
//           icon: <FaCheckCircle className="text-green-600 text-3xl" />,
//           message: "🎉 Congratulations! Your application was approved.",
//         };
//       case "REJECTED":
//         return {
//           icon: <FaTimesCircle className="text-red-600 text-3xl" />,
//           message: "❌ Unfortunately, your application was not successful.",
//         };
//       default:
//         return {
//           icon: <FaHourglassHalf className="text-yellow-500 text-4xl" />,
//           message: "⏳ Your application is under review.",
//         };
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-14">
//       <div className="text-center mb-14">
//         <h1 className="text-5xl font-extrabold text-teal-800 mb-3">
//           📚 Application Status Center
//         </h1>
//         <p className="text-lg text-gray-700">
//           Track and manage all your scholarship applications here.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {loading ? (
//           <div className="text-center text-lg text-gray-600">
//             Loading applications...
//           </div>
//         ) : applications.length === 0 ? (
//           <div className="text-center bg-white py-12 px-10 rounded-3xl shadow-md text-xl text-gray-500">
//             You haven’t submitted any applications yet.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-10">
//             {applications.map((app) => {
//               const { icon, message } = getStatusDetails(app.status);
//               return (
//                 <div
//                   key={app.id}
//                   className="bg-white rounded-3xl shadow-md transition-transform duration-200 transform hover:scale-[1.01] w-full flex flex-col lg:flex-row p-8"
//                 >
//                   <img
//                     src={scholarImg}
//                     alt="Scholarship"
//                     className="h-60 w-full lg:w-1/3 object-cover rounded-lg shadow-md"
//                   />
//                   <div className="p-6 lg:w-2/3 space-y-4 lg:ml-10 mt-6 lg:mt-0">
//                     <h3 className="text-3xl font-bold text-teal-700 flex items-center gap-2">
//                       <FaUniversity />
//                       {app.program?.title || "Unknown Program"}
//                     </h3>
//                     <p className="text-gray-500 text-sm italic">
//                       Application ID: {app.id}
//                     </p>
//                     <p className="text-lg text-gray-800 font-semibold">
//                       <strong>Name:</strong> {app.fullName}
//                     </p>
//                     <p className="flex items-center gap-2 text-lg text-gray-800 font-semibold">
//                       <FaEnvelopeOpenText className="text-teal-500 text-xl" />
//                       {app.email}
//                     </p>
//                     <div className="flex items-start gap-3 pt-2">
//                       {icon}
//                       <span className="text-base text-gray-700 leading-relaxed">
//                         {message}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useState } from "react";
import API from "./Api";
import { toast } from "react-toastify";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaEnvelopeOpenText,
  FaUniversity,
} from "react-icons/fa";
import scholarImg from "./images/apply.png"; // Make sure this path is correct

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await API.get("/api/applications/my", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setApplications(res.data);
      } catch (err) {
        console.error(err);
        toast.error("❌ Failed to load applications.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const getStatusDetails = (status) => {
    switch (status) {
      case "ACCEPTED":
        return {
          icon: <FaCheckCircle className="text-green-600 text-3xl" />,
          message: "🎉 Congratulations! Your application was approved.",
        };
      case "REJECTED":
        return {
          icon: <FaTimesCircle className="text-red-600 text-3xl" />,
          message: "❌ Unfortunately, your application was not successful.",
        };
      default:
        return {
          icon: <FaHourglassHalf className="text-yellow-500 text-4xl" />,
          message: "⏳ Your application is under review.",
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-14">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-teal-800 mb-3">
          📚 Application Status Center
        </h1>
        <p className="text-lg text-gray-700">
          Track and manage all your scholarship applications here.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-lg text-gray-600">
            Loading applications...
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center bg-white py-12 px-10 rounded-3xl shadow-md text-xl text-gray-500">
            You haven’t submitted any applications yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10">
            {applications.map((app) => {
              const { icon, message } = getStatusDetails(app.status);
              return (
                <div
                  key={app.id}
                  className="bg-white rounded-3xl shadow-md transition-transform duration-200 transform hover:scale-[1.01] w-full flex flex-col lg:flex-row p-8"
                >
                  <img
                    src={scholarImg}
                    alt="Scholarship"
                    className="h-60 w-full lg:w-1/3 object-cover rounded-lg shadow-md"
                  />
                  <div className="p-6 lg:w-2/3 space-y-4 lg:ml-10 mt-6 lg:mt-0">
                    <h3 className="text-3xl font-bold text-teal-700 flex items-center gap-2">
                      <FaUniversity />
                      {app.program?.title || "Unknown Program"}
                    </h3>
                    <p className="text-gray-500 text-sm italic">
                      Application ID: {app.id}
                    </p>
                    <p className="text-lg text-gray-800 font-semibold">
                      <strong>Name:</strong> {app.fullName}
                    </p>
                    <p className="flex items-center gap-2 text-lg text-gray-800 font-semibold">
                      <FaEnvelopeOpenText className="text-teal-500 text-xl" />
                      {app.email}
                    </p>

                    {/* Status Info + Orientation Button */}
                    <div className="flex flex-col gap-4 pt-2">
                      <div className="flex items-start gap-3">
                        {icon}
                        <span className="text-base text-gray-700 leading-relaxed">
                          {message}
                        </span>
                      </div>

                      {app.status === "ACCEPTED" && (
                        <a
                          href="/orientation"
                          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-lg shadow transition w-fit"
                        >
                          📅 View Orientation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
