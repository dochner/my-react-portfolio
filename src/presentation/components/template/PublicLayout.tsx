import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export interface IPublicLayoutProps extends React.PropsWithChildren<{}> {}

const PublicLayout = ({ children }: IPublicLayoutProps) => {
  return (
    <div className="column min-h-screen">
      <Header></Header>
      <main className="w-full flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
