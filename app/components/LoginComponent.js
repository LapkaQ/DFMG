import { useState } from "react";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      localStorage.setItem(
        "isLoggedIn",
        process.env.NEXT_PUBLIC_LOGIN_PASSWORD
      );
      onLogin(true);
    } else {
      alert("Nieprawidłowe hasło");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center items-center"
    >
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Podaj hasło"
        className="p-2 rounded-xl"
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default Login;
