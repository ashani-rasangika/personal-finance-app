'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddExpensePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    amount: '',
    date: '',
    category: '',
    notes: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Expense submitted:', form);
    // TODO: send to backend
    router.push('/expenses');
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Expense</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="category"
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </main>
  );
}
