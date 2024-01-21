import './TextContent1.css';

import { InfoBasic } from '@/app/InfoBasic'

const TextContent1: React.FC<{ InfoBasic: InfoBasic }> = ({ InfoBasic }) => {
  return (
    <aside className='TextContent1 adaptation'>
      <div className='imageMain'></div>

      <br />
      <hr className='bordeInferior' />
      <br />

      <p>{InfoBasic.developer}</p>

      <br />

      <p>{InfoBasic.name}</p>

      <br />

      <p>{InfoBasic.residencia}</p>

      <br />
      <h2>Contact me</h2>
      <br />

      <p>{InfoBasic.correo}</p>

      <br />

      <p>{InfoBasic.fechaNacimiento}</p>
    </aside>
  );
};

export default TextContent1;
