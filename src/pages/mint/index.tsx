import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import Header from "./header";
import Footer from "../../components/footer";
import styles from "./Mint.module.scss";
import { firestore } from "../../firebase";


function Mint(this: any) {
  // const [rangeVal, setRangeVal] = useState(0)
  const [price, setPrice] = useState<number>(0.15);
  const [number, setNumber] = useState<number>(1);
  const [orderList, setOrder] = useState<number[]>([]);

  // const randomArrayShuffle = (array: number[]) =>  {
  //   let currentIndex = array.length;
  //   let temporaryValue;
  //   let randomIndex;
  //   const tempArray = [...array];
  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     temporaryValue = tempArray[currentIndex];
  //     tempArray[currentIndex] = tempArray[randomIndex];
  //     tempArray[randomIndex] = temporaryValue;
  //   }
  //   return tempArray;
  // }

  // const nftOrder = () => {
  //   const order = [];
  //   for (let i = 0; i < 3000; i+=1) {
  //     order.push(1);
  //   }
  //   for (let i = 0; i < 2500; i+=1) {
  //     order.push(2);
  //   }
  //   for (let i = 0; i < 2000; i+=1) {
  //     order.push(3);
  //   }
  //   for (let i = 0; i < 1500; i+=1) {
  //     order.push(4);
  //   }
  //   for (let i = 0; i < 1000; i+=1) {
  //     order.push(5);
  //   }
  //   const randomOrder = randomArrayShuffle(order);
  //   const userInfo = firestore.collection("nftOrder").doc("nftOrder").set({randomOrder});
  //   setOrder(randomOrder);
  //   console.log(randomOrder);
  // }

  // useEffect(() => {
  //   nftOrder();
  // }, []);

  return (
    <div className="mint-bg">
      <Header />
      <div className="py-48 flex flex-col justify-center items-center px-4">
        <div className="flex mb-2 items-center justify-between w-full max-w-lg">
          <span className="text-2xl md:text-4xl inline-block py-1 px-2 uppercase rounded-full text-white">
            Total Minted
          </span>
          <div className="text-right">
            <span className="text-2xl inline-block text-white whitespace-nowrap">
              100
              /10,000
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-4 mb-12 flex rounded-xl bg-white w-full max-w-xl">
          <div style={{
            width: `${Math.max(1000 / 10000 * 100, 1)}%`
          }} className="shadow-none rounded-xl flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow" />
        </div>
        <div className={`${styles.mintForm}`}>
          <button type="button" className={styles.mintBtn}>
            MINT
          </button>
          <div id="mint" className="flex justify-start items-center mt-16 text-sm md:text-2xl">
            <span className="flex text-white items-center bg-grey-lighter rounded rounded-r-none px-3">PRICE:</span>
            <input type="number"
              min={0.15}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className={styles.price}
            />
            <span className="flex text-white items-center bg-grey-lighter rounded rounded-r-none px-3 whitespace-nowrap">X {number} = {(price * number).toFixed(2)}</span>
            <span className={styles.yellow}>BNB</span>
          </div>
          <ReactSlider
            className="horizontal-slider"
            min={1}
            max={10}
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onChange={(e) => setNumber(e)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;