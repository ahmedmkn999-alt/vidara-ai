"use client";
import { useState } from 'react';

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  // حماية اللوحة بباسورد
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="mb-4">دخول الإدارة</h1>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          className="bg-gray-800 p-2 rounded"
        />
        <button 
          onClick={() => password === "admin123" && setIsAuthorized(true)}
          className="mt-4 bg-purple-600 px-6 py-2 rounded"
        >
          دخول
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 text-white bg-[#0b0f19] min-h-screen text-right">
      <h1 className="text-3xl font-bold text-purple-500 mb-8">طلبات المشتركين (01114672635)</h1>
      <div className="grid gap-4">
        {/* سيتم جلب البيانات هنا من Back4App */}
        <div className="bg-[#161b2a] p-6 rounded-2xl border border-gray-800 flex justify-between">
          <div>
             <p className="text-green-400 font-bold">بانتظار التفعيل...</p>
             <input type="text" placeholder="كود التفعيل" className="bg-black p-2 mt-2 rounded border border-gray-700" />
             <button className="bg-blue-600 px-4 py-2 rounded mr-2">إرسال</button>
          </div>
          <div className="text-left">
             <p>رقم المحول: 01xxxxxxxxx</p>
             <p className="text-gray-500 text-sm italic">صورة التحويل مرفقة</p>
          </div>
        </div>
      </div>
    </div>
  );
}
