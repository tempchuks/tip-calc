import { useState } from "react";
import "./styles.css";
// how much was the bill
// how did you like the service
//how did your friend like the service
// you pay amount(amount+tip)
// reset button
export default function App() {
  const [myrating, setMyrating] = useState(0);
  const [myfriendrating, setMyfriendrating] = useState(0);
  const [bill, setBill] = useState(0);
  const tip = (myrating + myfriendrating) / 2;
  function handleReset() {
    setBill(0);
    setMyrating(0);
    setMyfriendrating(0);
  }
  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Myrating myrating={myrating} setMyrating={setMyrating} user="me">
        <label>How did you like our service</label>
      </Myrating>
      <Myrating
        myfriendrating={myfriendrating}
        setMyfriendrating={setMyfriendrating}
        user="friend"
      >
        <label>How did your friend like our service</label>
      </Myrating>
      <Total bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      bill{" "}
      <input
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        type="number"
      />
    </div>
  );
}
function Myrating({
  children,
  myfriendrating,
  setMyfriendrating,
  myrating,
  setMyrating,
  user,
}) {
  console.log(user === "me" ? myrating : myfriendrating);
  return (
    <div>
      {children}
      <select
        value={user === "me" ? myrating : myfriendrating}
        onChange={(e) =>
          user === "me"
            ? setMyrating(+e.target.value)
            : setMyfriendrating(+e.target.value)
        }
      >
        <option value="0">not satisfied(0)</option>
        <option value="5">satisfied(5)</option>
        <option value="15">vey satisfied(15)</option>
      </select>
    </div>
  );
}
function Total({ bill, tip }) {
  return (
    <p>
      You pay {bill}+{Math.round((tip / 100) * bill)}(
      {bill + Math.round((tip / 100) * bill)})
    </p>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
