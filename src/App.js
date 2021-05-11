import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import{ Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  const onDelete = (todo)=> {
    console.log("deleted of ",todo);
  }
  let todos=[
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the  market to get this job Done!"
    },
    {
      sno:2,
      title:"Go to the School",
      desc:"You need to go to the  School to get this job Done!"
    },
    {
      sno:3,
      title:"Go to the Temple",
      desc:"You need to go to the  Temple to get this job Done!"
    }
  ]
  return (
    <>
  <Header title="TO-Do App" />
  <Todos todos={todos} onDelete={onDelete} />
  <Footer/>
    
  </>
  );
}

export default App;
