"use client";
import { useState, useCallback } from "react";
import { useQuery, useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { HeadingText, ActionButton } from "@/components/UI";
import { ACTION_BUTTON_TYPE } from "@/components/types";
import { FormState, SubmitStatus, GetUsersData, GetUserData, GetUserVars, CreateUserData, CreateUserVars, User } from "./types";
import "./styles.scss";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      userName
      email
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      userName
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($userName: String!, $email: String!, $message: String!) {
    createUser(userName: $userName, email: $email, message: $message) {
      id
      userName
      email
      message
    }
  }
`;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    mail: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [lastSubmittedUser, setLastSubmittedUser] = useState<User | null>(null);

  const [createUser] = useMutation<CreateUserData, CreateUserVars>(CREATE_USER);

  const { data: UsersData, loading: UsersLoading, error: UsersError } = useQuery<GetUsersData>(GET_USERS);
  const { data: UserData, loading: UserLoading, error: UserError } = useQuery<GetUserData, GetUserVars>(GET_USER_BY_ID, {
    variables: { id: "42353" },
  });

  console.log('data', UsersData?.getUsers);
  console.log('get user data', UserData?.getUserById);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { data } = await createUser({
        variables: {
          userName: form.firstName,
          email: form.mail,
          message: form.message,
        },
      });

      if (data?.createUser) {
        setLastSubmittedUser(data.createUser);
        setStatus("success");
        setForm({ firstName: "", mail: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }, [form, createUser]);

  return (
    <section className="contact-section">
      <HeadingText
        title="Get in Touch"
        label="// CONTACT"
      />
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__row">
          <div className="field-group">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-group">
            <input
              id="email"
              name="mail"
              type="email"
              placeholder="Email"
              value={form.mail}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field-group">
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about your project or question..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <ActionButton
          type="submit"
          buttonType={ACTION_BUTTON_TYPE.PRIMARY}
          className="submit-btn"
          title={status === "loading" ? "Sending…" : "Send Message →"}
          disabled={status === "loading"}
        />
        {status === "success" && (
          <p className="form-feedback form-feedback--success">
            ✓ Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback form-feedback--error">
            ✗ Something went wrong. Please try again.
          </p>
        )}
      </form>

      {status === "success" && lastSubmittedUser && (
        <div className="submission-result">
          <h3>Submission Successful!</h3>
          <p><strong>Name:</strong> {lastSubmittedUser.userName}</p>
          <p><strong>Message:</strong> {lastSubmittedUser.message}</p>
        </div>
      )}
    </section>
  );
}
