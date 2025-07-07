'use client';

import Link from 'next/link';

export default function ExpensesPage() {
  const expenses = [
    { id: 1, amount: 200, date: '2025-07-07', category: 'Food', notes: 'Lunch with friends' },
    { id: 2, amount: 50, date: '2025-07-06', category: 'Transport', notes: 'Bus fare' },
    { id: 3, amount: 500, date: '2025-07-05', category: 'Shopping', notes: 'New shoes' },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Expense Tracker</h1>

      <div className="flex justify-center mb-8">
        <Link
          href="/expenses/add"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow hover:shadow-lg transition duration-300"
        >
          + Add Expense
        </Link>
      </div>

      <div className="space-y-6">
        {expenses.map(exp => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <p className="text-xl font-semibold text-gray-800">${exp.amount} <span className="text-sm font-normal text-gray-600">({exp.category})</span></p>
              <p className="text-sm text-gray-500 mt-1">{exp.date} | {exp.notes}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/expenses/edit/${exp.id}`}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition duration-200"
              >
                Edit
              </Link>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
