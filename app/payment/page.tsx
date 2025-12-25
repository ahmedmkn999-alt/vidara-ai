export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center p-6">
      <div className="bg-[#161b2a] p-10 rounded-[40px] border border-gray-800 max-w-lg w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">تأكيد الاشتراك في باقة برو</h2>
        <div className="bg-purple-900/20 p-4 rounded-2xl mb-8 border border-purple-500/30 text-center">
          <p className="text-sm text-purple-300 mb-2">حول المبلغ المطلوب عبر فودافون كاش إلى:</p>
          <p className="text-3xl font-black text-white">01114672635</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">الرقم اللي حولت منه</label>
            <input type="text" placeholder="01xxxxxxxxx" className="w-full bg-gray-900 border border-gray-800 p-4 rounded-2xl outline-none focus:border-purple-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">صورة إيصال التحويل (Screenshot)</label>
            <input type="file" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-2xl font-bold shadow-xl">إرسال لطلب التفعيل</button>
        </form>
      </div>
    </div>
  );
}
