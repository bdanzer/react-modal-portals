import React from 'react';

import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import ImageItem from './image-item.component';

const testData = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
};

afterEach(cleanup);

test("<ImageItem>", async () => {
    const { queryByTestId } = render(<ImageItem image={testData}/>);

    let imageItemWrap = queryByTestId('image-1-test');

    expect(imageItemWrap.querySelector('img').src).toBe(testData.thumbnailUrl);
});