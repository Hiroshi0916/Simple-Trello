import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";
import React, { Suspense } from 'react';
// import bgImage from './img/background.jpg';



function App() {
  return (
    // <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="app" >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <TaskCards />
      </Suspense>
    </div>
  );
}

export default App;
