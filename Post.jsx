import React, { useState } from 'react';

const Post = ({ titulo, descricao }) => {
  const [curtido, setCurtido] = useState(false);

  const handleCurtirClick = () => {
    setCurtido(!curtido); // Alternar entre true e false
  };

  return (
    <div className="post">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <button onClick={handleCurtirClick}>
        {curtido ? 'Descurtir' : 'Curtir'}
      </button>
      {curtido && <p>Curtido!</p>}
    </div>
  );
};

export default Post;