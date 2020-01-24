import React from 'react';

import { render, cleanup, waitForElement } from '@testing-library/react';
import App from './App';
import axiosMock from 'axios';

let testData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
];

afterEach(cleanup);

test('<App/>', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: testData });

    const { queryByTestId } = render(<App/>);
    
    expect(queryByTestId("spinner-test")).toHaveTextContent("Loading...");

    const resolvedElement = await waitForElement(() => {
        return queryByTestId("image-collection-test");
    });

    expect(resolvedElement.querySelectorAll('.image-item').length).toBe(5);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=25");
});