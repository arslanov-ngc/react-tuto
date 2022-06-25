import "./App.css";
import { Book } from "./components/Book/Book";
import BookAdder from "./components/Book/BookAdder";
import UseStateAdvanced from "./components/useStateAdvanced/UseStateAdvanced";
import UseEffectBasic from "./components/useEffect/UseEffectBasic";
import UseEffectCleanUp from "./components/useEffect/UseEffectCleanUp";

function App() {
  const arrayOfBooks = [
    {
      imgSrc: "https://loremflickr.com/320/242",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      imgSrc: "https://loremflickr.com/320/243",
      title: "Attention",
      author: "Kel Newport",
    },
    {
      imgSrc: "https://loremflickr.com/320/244",
      title: "COC",
      author: "John Miller",
    },
    {
      imgSrc: "https://loremflickr.com/320/245",
      title: "Steve Jobs",
      author: "Walter Hyzecson",
    },
    {
      imgSrc: "https://loremflickr.com/320/246",
      title: "1984",
      author: "Jorj Orwel",
    },
  ];

  return (
    <>
      <div className="App">
        <UseEffectBasic />
        <UseEffectCleanUp />
      </div>
    </>
  );
}

export default App;
