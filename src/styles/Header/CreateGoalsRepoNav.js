import styled from "styled-components";
import MEDIA from "../mediaTemplates";

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    
    ${MEDIA.TABLET`
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    `};

    * {
        padding-right: 10px;
    }
`;

export default Container;