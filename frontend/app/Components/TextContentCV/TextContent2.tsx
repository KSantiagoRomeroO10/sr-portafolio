import './TextContent2.css';

interface TextContent2Props {
  section: React.ReactNode;
}

const TextContent2: React.FC<TextContent2Props> = ({ section }) => {
  return (
    <article className='TextContent2 adaptation'>
      {section}
    </article>
  );
};

export default TextContent2;

