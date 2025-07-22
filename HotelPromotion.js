
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function HotelPromotion() {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (chat.trim() !== "") {
      setMessages([...messages, { text: chat, fromUser: true }]);
      setChat("");
    }
  };

  const cities = ["Patna", "Delhi", "Mumbai", "Bangalore", "Kolkata"];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 text-center text-2xl font-bold">
        BharatComfort — Hotel & Restaurant Promotions
      </header>

      <nav className="flex justify-center gap-4 p-4 bg-gray-200 text-sm">
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#cities">Cities</a>
        <a href="#contact">Contact</a>
        <a href="#chat">Chat</a>
      </nav>

      <section id="home" className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Welcome to BharatComfort</h2>
        <p>Your trusted partner in promoting the best hotels and restaurants across India.</p>
      </section>

      <section id="gallery" className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`https://source.unsplash.com/400x300/?hotel,restaurant,food,${n}`}
            alt="Gallery image"
            className="rounded-2xl shadow"
          />
        ))}
      </section>

      <section id="services" className="p-6">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Hotel and restaurant photography & videography</li>
          <li>Instagram & social media promotion</li>
          <li>Reel making & viral content creation</li>
          <li>Influencer collaborations</li>
        </ul>
      </section>

      <section id="cities" className="p-6">
        <h2 className="text-xl font-semibold mb-4">Cities We Serve</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {cities.map((city) => (
            <li key={city} className="bg-white p-3 rounded-xl shadow text-center">
              {city}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="grid gap-4 max-w-md mx-auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Email or Phone" />
          <Textarea placeholder="Message" />
          <Button>Send Message</Button>
        </div>
      </section>

      <section id="chat" className="p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Live Chat</h2>
        <div className="h-40 overflow-y-auto border rounded p-2 mb-2 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-1 p-2 rounded-xl max-w-xs ${
                msg.fromUser ? "bg-blue-100 self-end ml-auto" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            placeholder="Type your message..."
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </section>

      <footer className="p-4 text-center text-sm bg-gray-200 mt-6">
        © 2025 BharatComfort. All rights reserved.
      </footer>
    </div>
  );
}
