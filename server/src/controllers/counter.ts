import * as express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import Html from "../views/pages/sample/html";
import vcounter1 from "../views/components/Counter/counter";
import { getCovid19Positives, getCovid19Total } from "../func/covid19";

export default async (req: express.Request, res: express.Response) => {
  let cv19_Row = await getCovid19Total();
  let cv19 = JSON.stringify(cv19_Row);
  console.log("chk_cv19" + cv19);
  console.log("cv19_Row['date']" + cv19_Row["date"]);

  let date: string = cv19_Row["date"];
  let positive: string = cv19_Row["positive"];
  let hospitalize: string = cv19_Row["hospitalize"];
  let severe: string = cv19_Row["severe"];
  let death: string = cv19_Row["death"];

  const counter = renderToString(
    React.createElement(
      vcounter1,
      {
        date: date,
        positive: positive,
        hospitalize: hospitalize,
        severe: severe,
        death: death,
      },
      null
    )
  );
  console.log("counter = " + counter);

  res.send(
    Html({
      counter,
    })
  );
};
