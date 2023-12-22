import "./globals.css";

export const metadata = {
  title: "Dhruv Dedhia",
  description: "Dhruv's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
