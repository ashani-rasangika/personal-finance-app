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
    router.push('/expenses');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-10 transition-transform duration-300 hover:scale-[1.02]">
        
        {/* IMAGE on top */}
        <div className="flex justify-center mb-6">
          <img 
            src="/images/welcomeimg2.jpg" 
            alt="Expense" 
            className="w-24 h-24 object-cover rounded-full shadow-md"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
          Add Expense
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="notes"
            placeholder="Notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            Save Expense
          </button>
        </form>
      </div>
    </main>
  );
}
