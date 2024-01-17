import './TextContent1.css'

const TextContent1 = ( { InfoBasic } ) => {
    
  return (
    <aside className='TextContent1 adaptation'>
      <div className='imageMain'></div>

      <br />
      <hr className='bordeInferior'/>
      <br />

      { InfoBasic.developer }

      <br />

      { InfoBasic.name }

      <br />

      { InfoBasic.residencia }

      <br />
      <h2> Contact me </h2>
      <br />

      { InfoBasic.correo }

      <br />

      { InfoBasic.fechaNacimiento }
         
    </aside>
  )

}

export default TextContent1;