import Footer from "components/common/Footer";
import Header from "components/common/Header";
interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-4/5 mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SiteLayout;
