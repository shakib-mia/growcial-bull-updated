// import React from "react";
// import styles from "./Charts.module.css";
// // import TradingViewWidget from './TradingViewWidget';

// const Charts = () => {
//   return (
//     <div id={styles.chartContainer} className="relative mt-[100px]">
//       <div className="lg:flex justify-center flex-col items-center chart">
//         {/* <iframe id='st_d8a4866855ea437187f4df156cc7dc8f' title='second' frameBorder='0' scrolling='no' className='lg:w-[1200px] w-10/12 mx-auto' height='800' src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=E2C8A695FBDB40E1B58296A0E9E5D620&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=13&backgroundColor=1a183b&onload=st_d8a4866855ea437187f4df156cc7dc8f'></iframe> */}
//         {/* <iframe id='st_73daa86c0f1b4072aa142886c18d30ff' title='second' frameBorder='0' scrolling='no' className='lg:w-[1200px] w-10/12 mx-auto' height='800' src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=E2C8A695FBDB40E1B58296A0E9E5D620&stockExchange=NSE&dividends=true&splits=true&showHeader=true&palette=Financial-Light&title=Market%20Overview&chartHeight=300&borderColor=afacd4&backgroundColor=1a183b&captionColor=1a183b&titleColor=fefefe&priceColor=ffffff&volumeColor=ffffff&labelsColor=f6e8ea&interlacedColor=6235b2&positiveTextColor=ffffff&negativeTextColor=ffffff&dividendsColor=ffffff&periodsColor=f2f2f2&periodsBackgroundColor=de1497&tooltipsColor=e60404&onload=st_73daa86c0f1b4072aa142886c18d30ff'></iframe> */}
        
        
//         <iframe id='st_f87b64c5be994ad2b3bb41e713ee1e10' frameBorder='0' scrolling='no'  className="lg:w-[1200px] w-10/12 mx-auto"
//           height="800" src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=025BA93FF0084686AA309A784375ABC6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=13&backgroundColor=120B37&onload=st_f87b64c5be994ad2b3bb41e713ee1e10'></iframe>
        
        
        
        
        
        
        
        
        
        
//         {/* <iframe
//           id="st_68f25e8994584c7b9a35bf1d17cad680"
//           title="ticker"
//           frameBorder="0"
//           scrolling="no"
//           className="lg:w-[1200px] w-10/12 mx-auto"
//           height="800"
//           src="https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=01917EBFE19345F4AE4DC59617B4BBE6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=13&backgroundColor=1a183b&onload=st_68f25e8994584c7b9a35bf1d17cad680"
//         ></iframe> */}
//         {/* <iframe id='st_a6c905051a9e48158f7eb534944c992b' title='first' frameBorder='0' scrolling='no' className='lg:w-[1200px] w-10/12 mx-auto' height='100' src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=E2C8A695FBDB40E1B58296A0E9E5D620&stockExchange=NSE&indices=CNXNIFTY&dividends=true&splits=true&showHeader=true&palette=Financial-Light&title=Market%20Overview&chartHeight=300&borderColor=afacd4&backgroundColor=1a183b&titleColor=fefefe&priceColor=ffffff&interlacedColor=ffffff&axesLinesColor=edf3f3&positiveColor=1ed834&positiveTextColor=ffffff&negativeColor=ec0f47&negativeTextColor=ffffff&periodsBackgroundColor=de1497&tooltipsColor=e60404&onload=st_a6c905051a9e48158f7eb534944c992b'></iframe> */}
//         {/* <iframe id='st_73daa86c0f1b4072aa142886c18d30ff' frameBorder='0' scrolling='no' className='lg:w-[1200px] w-10/12 mx-auto' height='800' src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=E2C8A695FBDB40E1B58296A0E9E5D620&stockExchange=NSE&dividends=true&splits=true&showHeader=true&palette=Financial-Light&title=Market%20Overview&chartHeight=300&borderColor=afacd4&backgroundColor=1a183b&captionColor=1a183b&titleColor=fefefe&priceColor=ffffff&volumeColor=ffffff&labelsColor=f6e8ea&interlacedColor=6235b2&positiveTextColor=ffffff&negativeTextColor=ffffff&dividendsColor=ffffff&periodsColor=f2f2f2&periodsBackgroundColor=de1497&tooltipsColor=e60404&onload=st_73daa86c0f1b4072aa142886c18d30ff'></iframe> */}
//         {/* <iframe
//           id="st_fdeefa85d0574e0b9436c41fdc63aa7b"
//           frameBorder="0"
//           scrolling="no"
//           className="lg:w-[1200px] w-10/12 mx-auto"
//           height="800"
//           src="https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=01917EBFE19345F4AE4DC59617B4BBE6&stockExchange=NSE&dividends=true&splits=true&showHeader=true&palette=Financial-Light&title=Market%20Overview&chartHeight=300&borderColor=afacd4&backgroundColor=1a183b&captionColor=1a183b&titleColor=ffff&priceColor=f6e6e6&labelsColor=ffffff&interlacedColor=1a183b&axesLinesColor=ffffff&positiveTextColor=ffffff&negativeTextColor=ffffff&dividendsColor=ffffff&headerBackgroundColor=1a183b&dividendsTextColor=10e3e3&periodsColor=f2f2f2&periodsBackgroundColor=ffffff&onload=st_fdeefa85d0574e0b9436c41fdc63aa7b"
//         ></iframe>
//          */}
        
//         <iframe id='st_15a28dad089f4e1fa134901d2da3f5c1' frameBorder='0' scrolling='no'className='lg:w-[1200px] w-10/12 mx-auto' height='100' src='https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=025BA93FF0084686AA309A784375ABC6&stockExchange=NSE&indices=CNXNIFTY&palette=Financial-Light&title=Market%20Overview&backgroundColor=120b37&priceColor=ffffff&volumeColor=b1e9e9&axesLinesColor=e5f2f2&periodsBackgroundColor=e6eeee&tooltipsTextColor=ededed&onload=st_15a28dad089f4e1fa134901d2da3f5c1'></iframe>
        
        
//         {" "}
//       </div>
//       {/* <AboutUs /> */}
//     </div>
//   );
// };

// export default Charts;
