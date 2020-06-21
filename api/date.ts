import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const date = "what is th date?"
  res.status(200).send(date);
};
