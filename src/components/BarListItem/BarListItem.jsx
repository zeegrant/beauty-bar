import './BarListItem.css';

export default function BarListItem({ barItem, handleAddToOrder }) {
  return (
    <div className="BarListItem">
      <div className="emoji flex-ctr-ctr">{barItem.emoji}</div>
      <div className="name">{barItem.name}</div>
      <div className="buy">
        <span>${barItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(barItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}