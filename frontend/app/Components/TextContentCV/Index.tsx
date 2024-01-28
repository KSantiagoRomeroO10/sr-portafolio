import './Index.css';
import TextContent1 from './TextContent1';
import TextContent2 from './TextContent2';
import Section from './Section';

import { SectionInfo } from '@/app/About/Sections';
import { InfoBasic } from '@/app/About/InfoBasic';

interface IndexProps {
  Sections: SectionInfo[];
  InfoBasic: InfoBasic;
}

const Index: React.FC<IndexProps> = ({ Sections, InfoBasic }) => {
  return (
    <section className="align">
      <TextContent1 InfoBasic={InfoBasic} />
      <TextContent2 section={<Section Sections={Sections} />} />
    </section>
  );
};

export default Index