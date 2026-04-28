import Footer from "@/components/UserLayout/Footer";
import Header from "@/components/UserLayout/Header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="userContainer">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
