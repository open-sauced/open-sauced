import styled from "styled-components";
import {size} from "./variables";

const Loader = styled.div`
  padding: 0px ${size.small} 0 ${size.micro};

  .meta, .label {
    margin-top: ${size.tiny}
  }
`;

export default Loader;
