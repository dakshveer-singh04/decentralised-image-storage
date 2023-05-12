import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      console.log("Not Empty acc");
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}x
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(7)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      console.log("This acc is empty.");
      alert("This acc is empty. No image to display");
    }
  };
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Load Data
      </button>
    </>
  );
};
export default Display;
