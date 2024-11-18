"use client";
import { useState } from "react";

const cartItems = [
  { id: 1, name: "Laptop Reacondicionada", price: 599, quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Smartphone Nuevo", price: 799, quantity: 1, image: "/placeholder.svg" },
];

export default function CheckoutPage() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleCheckout = () => {
    // Simular la creación de una preferencia
    const simulatedPreferenceId = "SIMULATED-PREF-ID-12345";
    setPreferenceId(simulatedPreferenceId);
  };

  return (
    <div className="container">
      <h1>Checkout (Simulado)</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckout();
        }}
      >
        <h2>Información del cliente</h2>
        <input
          type="text"
          placeholder="Nombre completo"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <button type="submit">Simular Pago</button>
      </form>

      {preferenceId && (
        <div>
          <p>Preferencia creada (Simulada): {preferenceId}</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("¡Redirigiendo al flujo de pago simulado!");
            }}
          >
            Ir al pago (Simulado)
          </a>
        </div>
      )}

      <div>
        <h2>Resumen del carrito</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: "50px" }} />
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <h3>
          Total: $
          {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h3>
      </div>
    </div>
  );
}
