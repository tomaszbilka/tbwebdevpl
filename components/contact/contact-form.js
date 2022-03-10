import { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import sendContactData from '../../lib/contact-util';
import Image from 'next/image';

import classes from './contact-form.module.css';

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredMessage, setEnteredMessage] = useState();
  const [requestStatus, setRequestStatus] = useState(); // pending, success or error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [requestStatus]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    setRequestStatus('pending');

    try {
      await sendContactData(enteredData);
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message send successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <div className={classes.labelWrap}>
              <label htmlFor='email'>Your email</label>
              <Image
                src='/images/contact/envelope-solid.svg'
                width={30}
                height={30}
              />
            </div>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <div className={classes.labelWrap}>
              <label htmlFor='name'>Your Name</label>
              <Image
                src='/images/contact/user-solid.svg'
                width={30}
                height={30}
              />
            </div>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <div className={classes.labelWrap}>
            <label htmlFor='message'>Your Message</label>
            <Image
              src='/images/contact/pen-fancy-solid.svg'
              width={30}
              height={30}
            />
          </div>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={messageChangeHandler}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>
            <p>Send</p>
            <Image
              src='/images/contact/paper-plane-solid.svg'
              width={20}
              height={20}
            />
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
