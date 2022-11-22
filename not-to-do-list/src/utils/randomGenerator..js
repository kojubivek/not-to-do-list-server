const steLength = 6;
const chars = "aasdfghjklqwertyuiopzxcvbnmAASDFGHJKLZXCVBNMQWERTYUIOP";
export const randomStr = () => {
  let str = "";
  for (let i = 0; i < steLength; i++) {
    const position = Math.round(Math.random() * chars.length);
    str += chars[position];
  }

  return str;
};
