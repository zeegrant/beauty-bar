import './BarList.css';
import BarListItem from '../BarListItem/BarListItem';

export default function BarList({ barItems, handleAddToOrder }) {
  const items = barItems.map(item =>
    <BarListItem
      key={item._id}
      barItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="BarList">
      {items}
    </main>
  );
}
