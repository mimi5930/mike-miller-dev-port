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
  Textarea
} from '@chakra-ui/react';

const Contact = ({ isOpen, onClose }) => {
  const initialRef = useRef();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

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
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} />
          </FormControl>
          <FormControl pb="6">
            <FormLabel>Email *</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Message *</FormLabel>
            <Textarea resize="none" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="purple" mr={3}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Contact;
