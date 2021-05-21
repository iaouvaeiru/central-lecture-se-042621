import React from 'react';
import Painting from './Painting';

// Breakout Activity #2: Convert Simple Class Component to Function Component
// https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component
// See "Quick steps to convert to a function component" section

const PaintingsList = (props) => {
    return(
      <div>
        <h1>Paintings</h1>
        {
          props.paintings.map(painting => (
            <Painting
              key={painting.id}
              painting={painting}
            />
          ))
        }
      </div>
    );
}

export default PaintingsList;
