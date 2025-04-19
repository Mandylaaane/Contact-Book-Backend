import React, { useState, useEffect } from "react";

export default function CreateOrEdit({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: {
      street: "",
      city: "",
      zip: "",
      country: "",
    },
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "zip", "country"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="street"
        value={form.address.street}
        onChange={handleChange}
        placeholder="Street"
      />
      <input
        name="city"
        value={form.address.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        name="zip"
        value={form.address.zip}
        onChange={handleChange}
        placeholder="ZIP"
      />
      <input
        name="country"
        value={form.address.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <button type="submit">{initialData ? "Update" : "Create"}</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "1rem" }}>
        CANCEL
      </button>
    </form>
  );
}
