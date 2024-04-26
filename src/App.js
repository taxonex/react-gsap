import "./App.css";
import Navbar from "./component/navbar/navbar";
import Banner from "./component/slider/banner";
import Part1 from "./component/part1/part1";
import Part2 from "./component/part2/part2";
import Part3 from "./component/part3/part3"

function App() {
  return (
    <div id="main-container">
      <Navbar />
      <Banner />
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
}

export default App;
