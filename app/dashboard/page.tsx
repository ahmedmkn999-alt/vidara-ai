export default function Studio() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white p-10">
      <div className="flex justify-between items-center mb-16">
         <h1 className="text-3xl font-bold">استوديو صناعة الفيديو</h1>
         <button className="bg-gray-800 px-6 py-2 rounded-xl text-yellow-400 border border-yellow-400/30">باقات الاشتراك</button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* الخيار الأول */}
        <div className="bg-[#161b2a] p-10 rounded-[40px] border border-gray-800 hover:border-purple-500/50 transition shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-purple-400">١. تحريك صورة (Image to Video)</h2>
          <div className="bg-gray-900 border-2 border-dashed border-gray-700 rounded-3xl p-10 text-center mb-6">
            <p className="text-gray-500">اضغط لرفع الصورة المراد تحريكها</p>
          </div>
          <textarea placeholder="اوصف الحركة هنا (مثلاً: خلي الشخص يضحك)" className="w-full bg-gray-900 rounded-2xl p-4 border border-gray-800 h-32"></textarea>
          <button className="w-full mt-6 bg-purple-600 py-4 rounded-2xl font-bold shadow-lg shadow-purple-900/20">اصنع فيديو من الصورة</button>
        </div>

        {/* الخيار الثاني */}
        <div className="bg-[#161b2a] p-10 rounded-[40px] border border-gray-800 hover:border-blue-500/50 transition shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-blue-400">٢. نص إلى فيديو (Text to Video)</h2>
          <textarea placeholder="اكتب مشهدك الخيالي هنا بالتفصيل..." className="w-full bg-gray-900 rounded-2xl p-4 border border-gray-800 h-64"></textarea>
          <button className="w-full mt-6 bg-blue-600 py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/20">حول النص لفيديو</button>
        </div>
      </div>
    </div>
  );
      }
          
