import Head from "next/head";
import { useState } from "react";
import Header from "./../components/header";
import Footer from "./../components/footer";
import Paragraph1 from "./../components/index/paragraph1";
import Paragraph2 from "./../components/index/paragraph2";
import Paragraph3 from "./../components/index/paragraph3";
import Paragraph4 from "./../components/index/paragraph4";

import { useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import styles from '../styles/modal.module.css';

import Gallery from './gallery'; // Import the Gallery component


export default function ExplorePage() {
  const [themeMode, setThemeMode] = useState(true);

  const h2Style = {
    fontSize: '24px',   // 원하는 글자 크기
    fontWeight: 'bold', // 원하는 굵기
  };
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  const [coinData, setCoinData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 20,
              page: 1,
              sparkline: false,
            },
          }
        );

        setCoinData(response.data);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Head>
        <title>OPPA</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content=" OPPA Market" />
        <meta property="og:description" content="OPPA marketplace" />
        <meta property="og:image" content="https://untactict.vercel.app/assets/png/logo.png"/>
      </Head>

      <Header current={0}></Header>
      <div className="bg-[#050505] dark:bg-white">
        <div className="w-full 2xl:max-w-screen-2xl h-auto pt-[104px] flex flex-col m-auto">
          <Paragraph1></Paragraph1>
          <Paragraph2></Paragraph2>
          <Paragraph3></Paragraph3>
          <Gallery />
          <Paragraph4></Paragraph4>

          <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Coin Prices"
        ariaHideApp={false} // 이 설정을 추가합니다.
      >
        <div className={styles['modal-content']} >
          <br></br><br></br><br></br>
          <h2 style={h2Style}>OPPA MARKET</h2>
          <br></br>
          <ul>
            {coinData.map((coin) => (
              <li key={coin.id}>
                <h3>{coin.name}</h3>
                <p>코인이름: {coin.symbol}</p>
                <p>현재시세: ${coin.current_price}</p>
                <p>시가총액: ${coin.market_cap} </p><br></br>
              </li>
            ))}
          </ul>
          <button style={buttonStyle} onClick={closeModal}>Close</button>
        </div>
      </Modal> 

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
