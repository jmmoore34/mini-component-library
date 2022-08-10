import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 1,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 1.4,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": styles.height + "px",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize + "rem",
        }}
      ></TextInput>
    </Wrapper>
  );
};

const TextInput = styled.input`
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  $:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
