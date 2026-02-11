import { useState } from "react";

export default function PrayerRequest() {
  const [data, setData] = useState({
    category: "",
    intention: "",
    urgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Prayer submitted — connect with Firebase next!");
  };

  return (
    <section className="min-h-screen flex justify-center items-center px-6 bg-black text-amber-100">
      <div className="max-w-xl w-full bg-[#1a1208] p-8 rounded-xl border border-amber-700 animate-fadeIn">
        <h2 className="text-3xl font-serif text-amber-300 text-center mb-6">
          Submit a Prayer Request
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-amber-400 mb-2">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-amber-500"
              required
            >
              <option value="">Select Category</option>
              <option value="health">Health</option>
              <option value="family">Family</option>
              <option value="financial">Financial</option>
              <option value="thanksgiving">Thanksgiving</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-amber-400 mb-2">
              Prayer Intention
            </label>
            <textarea
              name="intention"
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded bg-black border border-amber-500"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="urgent"
              onChange={handleChange}
              className="w-4 h-4 text-amber-400"
            />
            <label className="text-sm">Urgent</label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-400 text-black font-semibold rounded-md"
          >
            Send Prayer
          </button>
        </form>
      </div>
    </section>
  );
}
