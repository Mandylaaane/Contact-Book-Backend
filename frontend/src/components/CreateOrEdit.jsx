import React, { useState, useEffect } from "react";
import "./CreateOrEdit.css";

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
    <form onSubmit={handleSubmit} className="create-edit-form">
      <div>
        <input
          id="create-form-inputs"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="street"
          value={form.address.street}
          onChange={handleChange}
          placeholder="Street"
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="city"
          value={form.address.city}
          onChange={handleChange}
          placeholder="City"
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="zip"
          value={form.address.zip}
          onChange={handleChange}
          placeholder="ZIP"
        />
      </div>
      <div>
        <input
          id="create-form-inputs"
          name="country"
          value={form.address.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>
      <div id="create-form-buttons">
        <button type="submit">{initialData ? "Update" : "SAVE"}</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "1rem" }}>
          CANCEL
        </button>
      </div>
    </form>
  );
}
