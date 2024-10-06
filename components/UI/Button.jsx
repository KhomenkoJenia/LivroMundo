export default function Button({ children, textOnly, className, ...props }) {
  let cssCalsses = textOnly ? "text-button" : "button";
  cssCalsses += " " + className;

  return (
    <button className={cssCalsses} {...props}>
      {children}
    </button>
  );
}
