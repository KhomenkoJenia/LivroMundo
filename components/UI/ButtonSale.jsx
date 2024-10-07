export default function ButtonSale({ children, ...props }) {
  return (
    <button className="sale-button" {...props}>
      <div>
        <span>
          <p>{children}</p>
        </span>
      </div>
      <div>
        <span>
          <p>ADD</p>
        </span>
      </div>
    </button>
  );
}
