import * as Express from "express";
import CounterController from "./controllers/Counter";

const app = Express();

/*
//APIサービスを構築する際に、Postmanなどのツールでは正常にアクセスできますが、
//ブラウザからアクセスすると、エラーになる場合があります。
//それはCORS(Cross-Origin Resource Sharing)対応をしていない可能性があります。
//なぜなら、サイトのドメインとAPIサービスのドメインが違う場合は
//先にoptionsメソッドで問い合わせをします。許可する場合のみ実際のAPIを通信します。
const allowCrossDomain = function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, access_token"
  );

  console.log("allowCrossDomain=" + req.method);
  // intercept OPTIONS method
  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);
*/

app.get("/", CounterController);

//app.use("/static", Express.static('./static/'));
app.use("/js", Express.static("./dist/js"));

app.listen(process.env.PORT || 3000, function () {
  console.log("express app is started.");
});
