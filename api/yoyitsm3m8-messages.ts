import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const date = "what is th date?"
  res.status(200).send(date);
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       oof = xhttp.responseText;
    }
};
xhttp.open("GET", "https://api.scratch.mit.edu/users/yoyitsm3m8/count", true);
xhttp.send();

export default (_req: NowRequest, res: NowResponse) => {
  res.status(200).send(oof);
};
