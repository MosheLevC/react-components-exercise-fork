import Spam from "./Spam";

const Spamalot = () => {
  const spamArray = [];
  for (let index = 0; index < 500; index++) {
    spamArray.push(Spam());
  }
  return spamArray;
};
export default Spamalot;
