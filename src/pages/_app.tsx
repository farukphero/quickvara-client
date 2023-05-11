import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import ApiContext from "@/Context/ApiContext/ApiContext";
import AuthProvider from "@/Context/AuthProvider/AuthProvider";
import NamInfo from "@/Context/NamInfo";
import StateInfo from "@/Context/StateContext/StateContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <StateInfo>
      <ApiContext>
        <NamInfo>
          <AuthProvider>
            <NavBar></NavBar>
            <div>
              <Component {...pageProps} />
            </div>
            <Footer></Footer>
          </AuthProvider>
        </NamInfo>
      </ApiContext>
    </StateInfo>
  );
}
