import React from 'react';
import { Button, Container } from '@edx/paragon'; // eslint-disable-line

const MyComponent = () => {
  return (
    <Container size="lg" className="py-5">
      <h1 className="mb-3">Example Component</h1>
      <Button>Hello world</Button>
    </Container>
  );
};

export default MyComponent;
