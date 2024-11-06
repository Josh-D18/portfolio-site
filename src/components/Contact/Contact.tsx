"use client";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Contact.module.css";
import Input from "./ui/Input";
import TextBox from "./ui/TextBox";
import Button from "../Utlis/Button";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notification, setNotification] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "email") {
      setEmail(e.target.value);
    }

    if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setName("");
      setEmail("");
      setMessage("");
      setNotification("Success!");
      setTimeout(() => {
        setNotification("");
      }, 1000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (__) {
      setNotification("Error! Please try again later");
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>Contact</h3>
          <p className={styles.description}>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className={styles.inputContainer}>
          <Input
            name="name"
            id="name"
            placeholder="name"
            value={name}
            type="text"
            handleChange={handleChange}
          />
          <Input
            name="email"
            id="email"
            placeholder="email"
            value={email}
            type="email"
            handleChange={handleChange}
          />
          <TextBox
            name="message"
            id="message"
            placeholder="message"
            value={message}
            handleChange={handleChange}
          />
          <Button content="Send Message" />
          <p>{notification}</p>
        </div>
      </form>
      <span className={styles.line}></span>
      <Navigation />
    </section>
  );
};

export default Contact;
