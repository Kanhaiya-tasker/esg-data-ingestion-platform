import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [records, setRecords] = useState([]);

  const [file, setFile] = useState(null);

  const [sourceType, setSourceType] = useState("sap");

  const fetchRecords = () => {
    axios
      .get("https://esg-backend-jovj.onrender.com/api/records/")
      .then((response) => {
        setRecords(response.data);
      });
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const uploadFile = () => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("source_type", sourceType);

    axios
      .post("https://esg-backend-jovj.onrender.com/api/upload/", formData)
      .then(() => {
        alert("CSV Uploaded Successfully");

        fetchRecords();
      });
  };

  const approveRecord = (id) => {
    axios
      .patch(`https://esg-backend-jovj.onrender.com/api/approve/${id}/`)
      .then(() => {
        fetchRecords();
      });
  };

  const getStatusColor = (status) => {
    if (status === "approved") {
      return "bg-green-500";
    }

    if (status === "suspicious") {
      return "bg-red-500";
    }

    return "bg-yellow-500";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        ESG Analyst Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upload CSV</h2>

        <div className="flex gap-4 items-center">
          <select
            className="border p-2 rounded"
            onChange={(e) => setSourceType(e.target.value)}
          >
            <option value="sap">SAP</option>

            <option value="utility">Utility</option>

            <option value="travel">Travel</option>
          </select>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button
            onClick={uploadFile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload CSV
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Emission Records</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">ID</th>

                <th className="p-3">Source</th>

                <th className="p-3">Activity</th>

                <th className="p-3">Quantity</th>

                <th className="p-3">Unit</th>

                <th className="p-3">Status</th>

                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {records.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.id}</td>

                  <td className="p-3 capitalize">{item.source_type}</td>

                  <td className="p-3">{item.activity_type}</td>

                  <td className="p-3">{item.quantity}</td>

                  <td className="p-3">{item.unit}</td>

                  <td className="p-3">
                    <span
                      className={`text-white px-3 py-1 rounded-full text-sm ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => approveRecord(item.id)}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
