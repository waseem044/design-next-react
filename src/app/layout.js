import "../style.scss";

export const metadata = {
  title: "Next App",
  description: "Basic layout demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          {children}
        </div>
      </body>
    </html>
  );
}
