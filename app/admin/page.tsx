export default function AdminControl() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-white p-10 text-right">
      <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-12">لوحة المشرف - طلبات الدفع</h1>
      
      <div className="grid gap-6">
        <div className="bg-[#161b2a] p-6 rounded-3xl border border-gray-800 flex flex-row-reverse justify-between items-center shadow-xl">
          <div className="flex-1 px-10 space-y-3">
             <h3 className="text-xl font-bold text-green-400">الاسم: محمد أحمد</h3>
             <p className="text-gray-400">الرقم المحول منه: <span className="text-white">01012345678</span></p>
             <p className="text-gray-400">الباقة المطلوبة: <span className="text-purple-400 font-bold">برو 2 (250ج)</span></p>
             <div className="flex gap-4 pt-4">
                <input type="text" placeholder="اكتب كود التفعيل هنا" className="bg-gray-900 border border-gray-700 p-3 rounded-xl flex-1 focus:border-green-500 outline-none" />
                <button className="bg-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition">إرسال الكود</button>
             </div>
          </div>
          
          <div className="w-56 h-72 bg-gray-900 rounded-3xl border border-gray-700 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
             <p className="text-gray-600 text-sm">صورة التحويل (اضغط للتكبير)</p>
             {/* هنا تظهر الصورة الحقيقية من Back4App */}
          </div>
        </div>
      </div>
    </div>
  );
}
