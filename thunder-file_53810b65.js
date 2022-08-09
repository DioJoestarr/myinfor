import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
}

let formdata = new FormData();
formdata.append("productId", "1000000");
formdata.append("productName", "dai");
formdata.append("alias", "dai");
formdata.append("catId", "1");
formdata.append("brandId", "2");
formdata.append("image", "image");
formdata.append("status", "1");
formdata.append("trash", "0");
formdata.append("salePrice", "1800000");
formdata.append("price", "2000000");
formdata.append("detail", "cc");

let bodyContent =  formdata;

let reqOptions = {
  url: "http://localhost:8082/product",
  method: "POST",
  headers: headersList,
  data: bodyContent,
}

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
})