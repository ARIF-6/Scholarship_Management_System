import { useEffect, useState } from "react";
import API from "./Api";
import { toast } from "react-toastify";

const MyPrograms = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchMyPrograms();
  }, []);

  const fetchMyPrograms = async () => {
    try {
      const res = await API.get("/api/programs/my");
      setPrograms(res.data);
    } catch (err) {
      toast.error("Failed to fetch your programs");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-white">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">🎓 My Applications</h2>

      {programs.length === 0 ? (
        <p className="text-gray-500">You haven't applied for any programs yet.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full border text-sm text-gray-700">
            <thead className="bg-blue-100 text-blue-800 font-semibold">
              <tr>
                <th className="px-4 py-2 text-left">Program Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <tr key={program.id} className="border-t">
                  <td className="px-4 py-2">{program.name}</td>
                  <td className="px-4 py-2">{program.status}</td>
                  <td className="px-4 py-2">{new Date(program.appliedDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPrograms;
