import React from 'react';

const Item = (props) => {
console.log(props.item.completed)
return(
  <div
  className={`task${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
      >

<p>{props.item.task}</p>

  </div>
);

};

export default Item;
