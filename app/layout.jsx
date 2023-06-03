import "@styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "My English Class",
  description: "A website help you improve your english skills",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
