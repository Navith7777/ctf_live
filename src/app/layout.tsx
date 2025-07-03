// import { DM_Sans } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Layout/Header";
// import Footer from "@/components/Layout/Footer";
// import { ThemeProvider } from "next-themes";
// import ScrollToTop from "@/components/ScrollToTop";
// import Aoscompo from "@/utils/aos";
// const font = DM_Sans({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${font.className}`}>
//         <ThemeProvider
//           attribute="class"
//           enableSystem={true}
//           defaultTheme="system"
//         >
//           <Aoscompo>
//             <Header />
//             {children}
//             <Footer />
//           </Aoscompo>
//           <ScrollToTop />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noLayoutPages = ["/signin", "/signup", "/kyc"];
  const hideLayout = noLayoutPages.includes(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Aoscompo>
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
          </Aoscompo>
          {!hideLayout && <ScrollToTop />}
        </ThemeProvider>
      </body>
    </html>
  );
}
