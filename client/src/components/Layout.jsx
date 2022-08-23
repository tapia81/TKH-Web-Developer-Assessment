import { Header } from "./Header";
import { Footer } from "./Footer";
export const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};
