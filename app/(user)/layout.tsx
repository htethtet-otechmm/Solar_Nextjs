import Footer from "@/component/UserLayout/Footer";
import Header from "@/component/UserLayout/Header";

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
