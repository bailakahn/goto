import { Classes } from "../../styles";
import { TextInput, Button } from "../../components/atoms";

function Home() {
  return (
    <div style={Classes.container}>
      <TextInput
        id="search-stock"
        onChange={(e) => console.log({ v: e.target.value })}
        style={Classes.input}
        placeholder="Enter Stock"
      />
      <Button
        text="Search"
        onClick={() => console.log("click")}
        style={Classes.button}
        className="primary ml"
      />
    </div>
  );
}

export default Home;
