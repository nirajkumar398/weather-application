import { useState } from "react";
import Card from "../Card";
import './style.css'
const CardItem = ({ historyItem, history, setHistory }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [city, setCity] = useState(historyItem.city);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    const updatedHistory = history.map((item) =>
      item.id === historyItem.id ? { ...item, city } : item
    );
    setHistory(updatedHistory);
  };

  const handleDelete = () => {
    const updatedHistory = history.filter((item) => item.id !== historyItem.id);
    setHistory(updatedHistory);
  };

  return (
    <Card>
      <div className="search-info">
        <div>
          {isEditing ? (
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          ) : (
            <span>{`${historyItem.city} `}</span>
          )}
          <span>{`${historyItem.temp} °C, `}</span>
          <span>{historyItem.date}</span>
        </div>
        <div className="action-buttons">
          <span onClick={handleEditClick} className="edit-button">
            {isEditing ? "Save" : "Edit"}
          </span>
          <span onClick={handleDelete} className="delete-button">
            Delete
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
