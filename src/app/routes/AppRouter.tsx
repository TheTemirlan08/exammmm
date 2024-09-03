import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';


export enum Page_List {
    Section = '/',
    Action = '/action'
  }
  export type RoutePageType = {
    path: string;
    Element: JSX.Element;
  }
  interface IAppRouterProps {
    pages: RoutePageType[];
  }
  
  const AppRouter: FC<IAppRouterProps> = ({ pages }) => {
    return (
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          {pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.Element} />
          ))}
        </Routes>
      </Suspense>
    );
  };
  
  export default AppRouter;