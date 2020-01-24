import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import Modal from './modal.component';

afterEach(cleanup);

test('<Modal/> calls callBack and has children', () => {
    // Arrange
    const callBack = jest.fn()
  
    // Act
    const { getByText, getByTestId } = render(
      <Modal callBack={callBack}>
        <div>test</div>
      </Modal>,
    )
    // Assert
    expect(getByText('test')).toBeTruthy()
  
    // Act
    fireEvent.click(getByTestId("modal-backdrop-test"))
  
    // Assert
    expect(callBack).toHaveBeenCalledTimes(1)
  })
  