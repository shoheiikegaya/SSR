/*
import * as React from "react";

export interface CounterProps {}

export interface CounterState {
  counter: number;
}


class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>counter at: {this.state.counter}</h1>
        <button onClick={() => this.incrementCounter()}>test</button>
      </div>
    );
  }
}
*/

import * as React from "react";

import { useState } from "react";

interface ICounterInterface {
  date: string;
  positive: string;
  hospitalize: string;
  severe: string;
  death: string;
}

const counter: React.FC<ICounterInterface> = (prps): JSX.Element => {
  //state関数呼び出し
  const [date, setDate] = useState(prps.date);
  const [positive, setPositive] = useState(prps.positive);
  const [hospitalize, setHospitalize] = useState(prps.hospitalize);
  const [severe, setSevere] = useState(prps.severe);
  const [death, setDeath] = useState(prps.death);

  return (
    <div>
      <div className="c-section-container">
        {/*<h2>Covid19</h2>*/}
        <div className="module-spacer--medium"></div>

        <div style={{ width: "100%", height: "300px" }}>
          <div>日付：{date}</div>
          <div>感染者数：{positive}</div>
          <div>入院者数：{hospitalize}</div>
          <div>重症者数：{severe}</div>
          <div>死亡者数：{death}</div>
        </div>
      </div>
    </div>
  );
};

export default counter;
