import React, { useRef, useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import * as EmailValidator from 'email-validator';

const Contact = ({ isOpen, onClose }) => {
  const initialRef = useRef();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loadingState, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [submitStatus, setSubmit] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const cancelHandler = () => {
    setFormState({ name: '', email: '', message: '' });
    setSubmit(null);
    setError('');
    onClose();
  };

  const handleSubmit = async () => {
    const { name, email, message } = formState;

    if (email === '') {
      setError('email');
      return;
    }

    // validate email
    let validEmail = EmailValidator.validate(email);

    if (!validEmail) {
      setError('notEmail');
      console.log(validEmail);
      return;
    }
    if (message === '') {
      setError('message');
      return;
    }

    // send submission to form-froggy
    setLoading(true);
    try {
      await fetch('https://form-froggy.herokuapp.com/dev-port', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          text: message
        })
      });
      // if successful
      setSubmit('success');
    } catch (error) {
      setSubmit('error');
      console.log(error);
      return;
    }
    setLoading(false);
    return;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Leave a Message</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl pb="6">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              name="name"
              type="text"
              ref={initialRef}
              onChange={handleChange}
              value={formState.name}
            />
          </FormControl>

          <FormControl
            isInvalid={error === 'email' || error === 'notEmail'}
            pb="6"
          >
            <FormLabel htmlFor="email">Email *</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={handleChange}
              value={formState.email}
            />
            <FormErrorMessage>
              {error === 'email' && 'Please enter your email'}
              {error === 'notEmail' && 'Email is not valid'}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={error === 'message'}>
            <FormLabel htmlFor="message">Message *</FormLabel>
            <Textarea
              name="message"
              onChange={handleChange}
              resize="none"
              value={formState.message}
            />
            <FormErrorMessage>
              Please enter a message or question
            </FormErrorMessage>
          </FormControl>
          {submitStatus === 'success' && (
            <Alert status="success">
              <AlertIcon />
              Message sent!
            </Alert>
          )}
          {submitStatus === 'error' && (
            <Alert status="error">
              <AlertIcon />
              Message could not be sent. Please email mikej.miller440@gmail.com
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="purple"
            mr={3}
            onClick={handleSubmit}
            isLoading={loadingState}
          >
            Submit
          </Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Contact;
