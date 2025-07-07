'use client';

import Link from 'next/link';

export default function ExpensesPage() {
  // Dummy data
  const expenses = [
    { id: 1, amount: 200, date: '2025-07-07', category: 'Food', notes: 'Lunch with friends' },
    { id: 2, amount: 50, date: '2025-07-06', category: 'Transport', notes: 'Bus fare' },
    { id: 3, amount: 500, date: '2025-07-05', category: 'Shopping', notes: 'New shoes' },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>

      <Link
        href="/expenses/add"
        className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Expense
      </Link>

      <div className="space-y-4">
        {expenses.map(exp => (
          <div key={exp.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p><span className="font-semibold">${exp.amount}</span> - {exp.category}</p>
              <p className="text-sm text-gray-500">{exp.date} | {exp.notes}</p>
            </div>
            <div className="space-x-2">
              <Link
                href={`/expenses/edit/${exp.id}`}
                className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
              >
                Edit
              </Link>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
