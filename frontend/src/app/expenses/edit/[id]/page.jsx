'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function EditExpensePage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({
    amount: '',
    date: '',
    category: '',
    notes: '',
  });

  useEffect(() => {
    // Simulate fetching existing expense by ID
    setForm({
      amount: '100',
      date: '2025-07-07',
      category: 'Sample',
      notes: 'Edit your expense',
    });
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Updated expense:', form);
    router.push('/expenses');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
          Edit Expense #{id}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Amount</label>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Category</label>
            <input
              name="category"
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Notes</label>
            <textarea
              name="notes"
              placeholder="Notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Update Expense
          </button>
        </form>
      </div>
    </main>
  );
}
