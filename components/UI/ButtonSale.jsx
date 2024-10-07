export default function ButtonSale({ children }) {
  return (
    <button className="sale-button">
      <div>
        <span>
          <p>{children}</p>
        </span>
      </div>
      <div>
        <span>
          <p>YEP</p>
        </span>
      </div>
    </button>
  );
}
