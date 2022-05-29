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
  FormErrorMessage
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

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const cancelHandler = () => {
    setFormState({ name: '', email: '', message: '' });
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

    // fetch based on name input
    // https://form-froggy.herokuapp.com/
    if (name === '') {
      setLoading(true);
      const response = await fetch('http://localhost:3001/no-name', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          text: message
        })
      });
      setLoading(false);
      console.log(response);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Thank you for visiting! Please leave a message with any questions.
        </ModalHeader>
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
