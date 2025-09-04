"use client"
import React, { useMemo, useState } from "react";

const sampleData = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Report #${i + 1}`,
  owner: ["Alex", "Sam", "Jamie", "Taylor"][i % 4],
  createdAt: new Date().toISOString(),
  status: ["Completed", "In Progress", "Failed"][i % 3],
  value: Math.round(Math.random() * 5000) / 100,
}));

export default function ReportsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filtered = useMemo(() => {
    return sampleData.filter((r) =>
      `${r.title} ${r.owner} ${r.status}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const paginated = useMemo(() => {
    const start = page * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <input
        type="text"
        placeholder="Search reports..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-semibold">{filtered.length}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-xl font-semibold">{filtered.filter((f) => f.status === "Completed").length}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">Value</p>
          <p className="text-xl font-semibold">
            ${filtered.reduce((s, r) => s + r.value, 0).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Owner</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-2 border">{row.id}</td>
                <td className="px-4 py-2 border">{row.title}</td>
                <td className="px-4 py-2 border">{row.owner}</td>
                <td className="px-4 py-2 border">{row.status}</td>
              </tr>
            ))}
            {paginated.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-2 border text-center text-gray-500">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Page {page + 1} of {Math.ceil(filtered.length / rowsPerPage) || 1}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => (p + 1 < filtered.length / rowsPerPage ? p + 1 : p))}
            disabled={(page + 1) * rowsPerPage >= filtered.length}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 border rounded hover:bg-gray-100">
          Export CSV
        </button>
      </div>
    </div>
  );
}
