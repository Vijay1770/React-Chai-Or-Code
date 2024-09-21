import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const AppLayout = () => {
  //When we move from one to another page and the data takes time to load then we use this to show loading state...
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <>
      <Header></Header>
      {/* It is used in the parent route elements to render their child route elements.*/}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
