import "./globals.css"

export const metadata = {
  title: "YouTube Copyright Checker - A HIRXWRLD Product",
  description: "Find out if a video is likely copyrighted, distributor-managed, or self-owned.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_AD_CLIENT}`}
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="w-full py-4 bg-red-600 text-white text-center font-semibold shadow-md">
          YouTube Copyright Checker - A HIRXWRLD Product
        </header>
        <main className="flex justify-center mt-8 px-4">{children}</main>
        <footer className="text-center text-sm text-gray-500 mt-10 py-4 border-t">
          © {new Date().getFullYear()} HIRXWRLD LLC — All rights reserved.
        </footer>
      </body>
    </html>
  );
}

