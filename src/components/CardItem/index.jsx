import { useState } from "react";
import Card from "../Card";

const CardItem = ({ historyItem, history, setHistory }) => {
  const [editCity, setEditCity] = useState(false);
  const [city, setCity] = useState(historyItem.city);
  const onEditClick = (data) => {
    setEditCity(!editCity);
    const filterData = history.map((ele) => {
      if (historyItem.id == ele.id) {
        return {
          ...ele,
          city: city,
        };
      } else {
        return ele;
      }
    });
    setHistory(filterData);
  };
  const handleDelete = (data) => {
    const filterData = history.filter((ele) => ele.id != data.id);
    setHistory(filterData);
  };
  return (
    <Card>
      <div className="seach-info">
        <div>
          {editCity ? (
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          ) : (
            <span> {`${historyItem.city} `}</span>
          )}
          <span>{historyItem.temp} °C, </span>
          <span>{historyItem.date} </span>
        </div>
        <div>
          <span
            onClick={onEditClick}
            style={{
              marginRight: "10px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            {editCity ? "save" : "Edit"}
          </span>
          <span
            onClick={() => handleDelete(historyItem)}
            style={{ cursor: "pointer" }}
          >
            delete
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
