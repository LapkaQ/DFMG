import "./components.css";
export default function Header(props) {
  return (
    <header className={props.height > 0 && `h-[${props.height}px]`}>
      {props.custom == "True" ? (
        <p className="text-7xl font-[300] gg-sans">{props.text}</p>
      ) : (
        <p className="text-7xl font-[300] gg-sans">
          Discord <span className="FakeText">Tool</span>
        </p>
      )}
    </header>
  );
}
