"use client";
import { useState } from "react";

export default function InputIdForm({ onFormSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Ensure preventDefault is called on the event object
    onFormSubmit(e); // Pass the event object to the parent component's handler
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="Podaj ID" />
      <button type="submit">Wyślij</button>
    </form>
  );
}
