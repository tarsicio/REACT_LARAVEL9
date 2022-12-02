import Header from "../Header/Header";
import Routers from "../Routers/Routers";
import Footer from "../Footer/Footer";

function Layout(props){
    return (
      <>
        <Header />
        <Routers />
        <main>{props.children}</main>
        <Footer />
      </>
    )
}
export default Layout;