import "./globals.css";

export const metadata = {
  title: "Dhruv Dedhia",
  description: "Dhruv's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
