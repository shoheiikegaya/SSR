import * as express from "express";
import * as React from "react";

import fetch from "node-fetch";

export async function getCovid19Positives() {
  let url = "https://covid19-japan-web-api.now.sh/api//v1/positives";
  let options = {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  };

  var res = await fetch(url, options);
  var status: number = await res.status;
  //var responseBody: Promise<any> = await res.json();
  var responseBody: any = await res.json();

  //console.log('status:' + status + ', body:' + responseBody);
  console.log(responseBody);
  return JSON.stringify(responseBody);
}

export async function getCovid19Total() {
  let url = "https://covid19-japan-web-api.now.sh/api//v1/total";
  let options = {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    mode: "cors",
  };

  var res = await fetch(url, options);
  var status = await res.status;
  var responseBody = await res.json();

  //console.log('status:' + status + ', body:' + responseBody);
  console.log("responseBody = " + responseBody);
  console.log("JSON.stringify(responseBody) = " + JSON.stringify(responseBody));
  console.log("responseBody['date'] = " + responseBody["date"]);
  console.log("ここに来ている");

  return responseBody;
}
