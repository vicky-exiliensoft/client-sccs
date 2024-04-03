import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function TradingViewWidget1Hours() {
  const container1Minute = useRef<HTMLDivElement>(null);
  const container1Hour = useRef<HTMLDivElement>(null);
  const container4Hours = useRef<HTMLDivElement>(null);
  const container1Day = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [buySignal, setBuySignal] = useState<boolean>(false);

  useEffect(() => {
    const addTradingViewScript = (containerRef: React.RefObject<HTMLDivElement>, symbol: string, indicator: any) => {
      if (containerRef.current && !containerRef.current.querySelector("script")) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "width": "1000",
            "height": "800",
            "symbol": "${symbol}",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "withdateranges": true,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "calendar": false,
            "studies": [
              "STD;MACD"
            ],
            "support_host": "https://www.tradingview.com"
          }`;
        containerRef.current.appendChild(script);
      }
    };

    const simulateMACD = () => {
      setInterval(() => {
        const isUp = Math.random() < 0.5;
        setBuySignal(isUp);
        setTimeout(() => {
          setBuySignal(false);
        }, 20000);
      }, 30000);
    };

    addTradingViewScript(container1Minute, "MEXC:BTCUSDT|1M", {});
    addTradingViewScript(container1Hour, "MEXC:BTCUSDT|1H", {});
    addTradingViewScript(container4Hours, "MEXC:BTCUSDT|4H", {});
    addTradingViewScript(container1Day, "MEXC:BTCUSDT|1D", {});

    simulateMACD();
  }, []);

  return (
    <Container className="divide-y-2">
      <Row>
        <Col>
          <h1 className="text-center my-4 bold d-flex gap-2 align-items-center justify-content-center text-capitalize">
            <small className="text-secondary">BTC</small>
            to
            <small className="text-primary">USDT</small>
            live data
          </h1>
        </Col>
      </Row>
      {buySignal !== null && (
        <Row>
          <Col className="mb-4">
            <div className={`rounded-circle ${buySignal ? "bg-success" : "bg-danger"}`} style={{ width: "77px", height: "80px" }}></div>
            <strong>
              <span className={buySignal ? "text-success" : "text-danger"}>{buySignal ? "positive" : "negative"}</span>
            </strong>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <h5 className="text-start fw-bold d-flex align-items-center gap-1">
            <span>MACD</span>
            <small className="text-primary">(1 Minute )</small>
          </h5>
          <div className="tradingview-widget-container w-100" ref={container1Minute} id="technical-analysis-chart-demo-1m">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-messages">
              {messages.map((message, index) => (
                <div key={index} className="tradingview-widget-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-start fw-bold d-flex align-items-center gap-1">
            <span>MACD</span>
            <small className="text-primary">(1 Hour )</small>
          </h5>
          <div className="tradingview-widget-container w-100" ref={container1Hour} id="technical-analysis-chart-demo-1h">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-messages">
              {messages.map((message, index) => (
                <div key={index} className="tradingview-widget-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-start fw-bold d-flex align-items-center gap-1">
            <span>MACD</span>
            <small className="text-primary">(4 Hours )</small>
          </h5>
          <div className="tradingview-widget-container w-100" ref={container4Hours} id="technical-analysis-chart-demo-4h">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-messages">
              {messages.map((message, index) => (
                <div key={index} className="tradingview-widget-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-start fw-bold d-flex align-items-center gap-1">
            <span>MACD</span>
            <small className="text-primary">(1 Day )</small>
          </h5>
          <div className="tradingview-widget-container w-100" ref={container1Day} id="technical-analysis-chart-demo-1d">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-messages">
              {messages.map((message, index) => (
                <div key={index} className="tradingview-widget-message">
                  {message}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TradingViewWidget1Hours;
