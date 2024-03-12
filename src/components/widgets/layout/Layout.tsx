import { FC, ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = (): ReactElement => (
  <>
    <Suspense fallback={<h2>loading...</h2>}>
      <Outlet />
    </Suspense>
  </>
);
