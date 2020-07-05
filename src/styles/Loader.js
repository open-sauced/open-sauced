import styled from "styled-components";
import {size} from "./variables";

const Loader = styled.div`
  padding: 0px 16px;

  .meta, .label {
    margin-top: ${size.tiny}
  }
`;

export default Loader;
