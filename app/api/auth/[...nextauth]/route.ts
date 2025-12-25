import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // تعريف الموفرين (جوجل)
  providers: [
    GoogleProvider({
      // سحب المفاتيح من متغيرات البيئة في Vercel
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  // مفتاح السر لتشفير الجلسة
  secret: process.env.NEXTAUTH_SECRET,
  // تخصيص الجلسة
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user }) {
      return token;
    }
  },
  // الصفحات المخصصة
  pages: {
    signIn: '/', // هيرجع للمستخدم لصفحة الباقات لو مش مسجل
  }
});

// تصدير المعالج للطلبات من نوع GET و POST
export { handler as GET, handler as POST };

