import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";
import "./style.css";
import CardItem from "../components/CardItem";

const HistoryPage = ({ history = [], setHistory }) => {
  return (
    <div className="history-container">
      <div style={{width:'800px', textAlign:'center'}}>
      <div onClick={() => window.history.back()} className="back">
        Back
      </div>
      <h1>Search History</h1>

      {history && history.length > 0 && (
        <div className="history-list-item">
          {history.map((historyItem, index) => (
            <CardItem
              history={history}
              setHistory={setHistory}
              historyItem={historyItem}
              key={index}
            />
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default HistoryPage;
