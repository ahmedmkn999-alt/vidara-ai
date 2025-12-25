export default function HomePage() {
  const plans = [
    { name: "برو 1", price: "99ج", limit: "70 فيديو", color: "from-purple-600 to-blue-600" },
    { name: "برو 2", price: "250ج", limit: "200 فيديو", color: "from-blue-500 to-cyan-500" },
    { name: "برو 3", price: "600ج", limit: "500 فيديو", color: "from-pink-600 to-purple-600" },
    { name: "الملكية (سنوية)", price: "700ج", limit: "لا نهائي", color: "from-yellow-500 to-orange-500" }
  ];

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center sticky top-0 bg-[#0b0f19]/80 backdrop-blur-md z-50">
        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">VIDARA</div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition shadow-lg">دخول</button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-bold shadow-xl hover:scale-105 transition">سجل بجوجل</button>
        </div>
      </nav>

      {/* تعليم الموقع */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">ازاي تشغل الموقع؟</h1>
        <p className="text-gray-400 mb-10">اتبع الخطوات البسيطة وابدأ الإبداع</p>
        <div className="max-w-4xl mx-auto bg-gray-800 p-4 rounded-3xl border border-gray-700 shadow-2xl">
           {/* هنا يوضع فيديو التعليم */}
           <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center text-gray-600 italic">فيديو توضيحي</div>
        </div>
      </section>

      {/* الباقات الأربعة */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-16">باقات برو (PRO)</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="bg-[#161b2a] rounded-3xl p-8 border border-gray-800 text-center hover:border-purple-500 transition-all group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${plan.color}`}></div>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-black mb-4 text-white">{plan.price}</p>
              <p className="text-gray-400 mb-8 font-medium">{plan.limit}</p>
              <button className={`w-full py-4 rounded-2xl font-bold bg-gradient-to-r ${plan.color} shadow-lg hover:brightness-110`}>اشترك الآن</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
