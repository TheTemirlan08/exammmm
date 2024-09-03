import { FC } from 'react'
import Section from '../components/Section/Section'
import Approuter, { Page_List, RoutePageType } from './routes/AppRouter';
import Action from '../pages/Action/Action';
import Header from '../components/Header/Header';

export interface I {} 

export const App: FC<I> = () => {
    
const routes: RoutePageType[] = [
    {
      path: Page_List.Section,
      Element: <Section />
    },
    {
      path: Page_List.Action,
      Element: <Action/>
    }
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
          <Approuter pages={routes} />
      </div>
    </div>
  )
}


export default App;
