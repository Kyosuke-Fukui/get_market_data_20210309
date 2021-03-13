const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US",
  method: "GET",
  dataType: "json",
  headers: {
    "x-rapidapi-key": "",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);

  //オブジェクトの中のオブジェクト→Object[key]、中に配列→Object.key

  //1.取りたい層のオブジェクト指定
  let resp = response["marketSummaryAndSparkResponse"]["result"];

  console.log(resp);

  //2.そのオブジェクト内の各配列の各銘柄（オブジェクト））をループで取得
  for (const key in resp) {
    if (Object.hasOwnProperty.call(resp, key)) {
      const element = resp[key];
      //3.配列の中の取得したい要素を指定
      var close = element["spark"].chartPreviousClose;

      var content = element.symbol + ":" + close;

      $("#lists").append(`<li> ${content} </li>`);
    }
  }
});
