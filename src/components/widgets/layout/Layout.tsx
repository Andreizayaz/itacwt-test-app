import { FC, ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import { Main } from "../main";

export const Layout: FC = (): ReactElement => (
  <>
    <Header />
    <Main>
      <Suspense fallback={<h2>loading...</h2>}>
        <Outlet />
      </Suspense>
    </Main>
    <Footer />
  </>
);
