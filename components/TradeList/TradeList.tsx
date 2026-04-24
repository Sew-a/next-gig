"use client";

import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import "./styles.scss";

const SYMBOLS = [
  { symbol: "btcusdt", name: "Bitcoin" },
  { symbol: "ethusdt", name: "Ethereum" },
  { symbol: "bnbusdt", name: "BNB" },
  { symbol: "solusdt", name: "Solana" },
  { symbol: "adausdt", name: "Cardano" },
  { symbol: "dogeusdt", name: "Dogecoin" },
  { symbol: "uaiusdt", name: "UAI" },
];

interface TickerData {
  e: string;
  E: number;
  s: string;
  p: string;
  P: string;
  w: string;
  c: string;
  Q: string;
  o: string;
  h: string;
  l: string;
  v: string;
  q: string;
  O: number;
  C: number;
  F: number;
  L: number;
  n: number;
}

const SocketCard = ({ symbol, name }: { symbol: string; name: string }) => {
  const [ticker, setTicker] = useState<TickerData | null>(null);

  const socketUrl = `wss://fstream.binance.com/ws/${symbol.toLowerCase()}@ticker`;

  const { lastJsonMessage } = useWebSocket(socketUrl, {
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastJsonMessage !== null) {
      setTicker(lastJsonMessage as TickerData);
    }
  }, [lastJsonMessage]);

  const isPositive = ticker ? parseFloat(ticker.P) >= 0 : true;

  const formatNumber = (val: string | number, decimals = 2) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return isNaN(num) ? val : num.toFixed(decimals);
  };

  const formatVolume = (val: string) => {
    const num = parseFloat(val);
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(2) + "K";
    return num.toFixed(2);
  };

  return (
    <div className="socket-card">
      <div className="socket-header">
        <span className="socket-name">{name}</span>
        <span className="socket-symbol">{symbol.toUpperCase()}</span>
      </div>
      {ticker ? (
        <div className="socket-rows">
          <div className="socket-row main-price">
            <span className="row-label">Last Price</span>
            <span className="row-value price">${formatNumber(ticker.c)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">Change %</span>
            <span className={`row-value ${isPositive ? "positive" : "negative"}`}>
              {isPositive ? "+" : ""}{formatNumber(ticker.P)}%
            </span>
          </div>
          <div className="socket-row">
            <span className="row-label">Open Price</span>
            <span className="row-value">${formatNumber(ticker.o)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">High Price</span>
            <span className="row-value">${formatNumber(ticker.h)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">Low Price</span>
            <span className="row-value">${formatNumber(ticker.l)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">Price Change</span>
            <span className="row-value">{formatNumber(ticker.p)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">Weighted Avg</span>
            <span className="row-value">${formatNumber(ticker.w)}</span>
          </div>
          <div className="socket-row">
            <span className="row-label">Number of Trades</span>
            <span className="row-value">{ticker.n.toLocaleString()}</span>
          </div>
        </div>
      ) : (
        <div className="socket-loading">Connecting...</div>
      )}
    </div>
  );
};

const TradeList = () => {
  return (
    <div className="trade-list">
      <h1 className="trade-title">Crypto Market</h1>
      <div className="socket-grid">
        {SYMBOLS.map((item) => (
          <SocketCard key={item.symbol} symbol={item.symbol} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default TradeList;
