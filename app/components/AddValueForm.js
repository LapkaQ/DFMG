import React, { useState } from "react";

const AddValueForm = ({ onSuccess }) => {
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/addvalue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, time }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add value");
      }

      const data = await res.json();
      setResponse(data);
      setMessage("");
      setTime("");
      onSuccess(); // Wywołanie funkcji przekazanej przez props onSuccess po sukcesie
      setError(null);
    } catch (err) {
      console.error("Error during submission:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Value"}
        </button>
      </form>
      {response && (
        <p>
          {response.message}: {response.value.message} - {response.value.time}
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddValueForm;
