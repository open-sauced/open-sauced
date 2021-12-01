import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  zindex: 100;
  position: fixed;
  left: 0;
  top: 0;
`;

const BackdropContent = styled.div`
  position: fixed;
  z-index: 150;
  left: 0%;
  top: 20%;
  overflow: "hidden";
  transition: all 0.3s ease-out;
  width: 300;
  transform: ${(props) => {
    return props.modalOpen ? "translateY(0px)" : "translateY(-1000px)";
  }};

  @media (min-width: 600px) {
    width: 500px;
    left: 20%;
    top: 20%;
  }
`;

export {Backdrop, BackdropContent};
