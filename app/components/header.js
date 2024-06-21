import "./components.css";

export default function Header(props) {
  return (
    <header className={props.height && `h-[${props.height}px] max-w-[80vw]`}>
      {props.custom === "True" ? (
        <p className="text-6xl font-[300] gg-sans sm:text-7xl md:text-7xl 2xl:text-7xl">
          {props.text}
        </p>
      ) : (
        <p className="text-6xl font-[300] gg-sans sm:text-7xl md:text-7xl 2xl:text-7xl">
          Discord <span className="FakeText">Faker</span>
        </p>
      )}
    </header>
  );
}
