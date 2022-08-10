import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <VisualSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24}></Icon>
        </IconWrapper>
      </VisualSelect>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const RealSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisualSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${RealSelect}:focus + & {
    outline: 1px dotted ${COLORS.primary};
  }
`;

export default Select;
