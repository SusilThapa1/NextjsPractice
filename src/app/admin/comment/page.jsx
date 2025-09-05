"use client";
"use client";
import React, { useState, useMemo } from "react";

const sampleComments = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  user: ["Alex", "Sam", "Jamie", "Taylor"][i % 4],
  text: `This is comment #${i + 1} — just some placeholder text.`,
  createdAt: new Date().toISOString().split("T")[0],
  status: ["Approved", "Pending"][i % 2],
}));

export default function CommentsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filtered = useMemo(() => {
    return sampleComments.filter((c) =>
      `${c.user} ${c.text} ${c.status}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const paginated = useMemo(() => {
    const start = page * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  return (
    <div className="w-full h-full mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search comments..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-semibold">{filtered.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Approved</p>
          <p className="text-xl font-semibold">
            {filtered.filter((f) => f.status === "Approved").length}
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-xl font-semibold">
            {filtered.filter((f) => f.status === "Pending").length}
          </p>
        </div>
      </div>

      {/* Comment list */}
      <div className="space-y-4">
        {paginated.length > 0 ? (
          paginated.map((c) => (
            <div
              key={c.id}
              className="bg-white shadow rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <p className="font-medium">{c.user}</p>
                <p className="text-gray-700">{c.text}</p>
                <p className="text-xs text-gray-400 mt-1">{c.createdAt}</p>
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`px-2 py-1 text-xs rounded-full mb-2 ${
                    c.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {c.status}
                </span>
                <div className="space-x-2">
                  <button className="text-xs px-2 py-1 bg-green-500 text-white rounded">
                    Approve
                  </button>
                  <button className="text-xs px-2 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No comments found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 pb-5">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <p className="text-sm text-gray-600">
          Page {page + 1} of {Math.ceil(filtered.length / rowsPerPage)}
        </p>
        <button
          onClick={() =>
            setPage((p) =>
              p + 1 < Math.ceil(filtered.length / rowsPerPage) ? p + 1 : p
            )
          }
          disabled={page + 1 >= Math.ceil(filtered.length / rowsPerPage)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

