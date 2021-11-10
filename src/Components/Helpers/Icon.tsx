import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";

interface IconProps {
  iconSource: IconDefinition;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ iconSource, className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <FontAwesomeIcon icon={iconSource} className="icon" size="1x" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--borderRadius);
  .icon {
    color: white;
  }
`;

export default Icon;
