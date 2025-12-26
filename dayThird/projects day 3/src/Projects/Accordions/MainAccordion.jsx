import Accordion from "./Accordion";
import { accordionData } from "./content";

const MainAccordion = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default MainAccordion;