import React, { useState } from "react";
import styled from "styled-components";

const ExpandableItemContainer = styled.div`
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ArrowIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
`;

const ItemContent = styled.div`
  flex: 1;
`;

const MoreInfoText = styled.div`
  display: ${({ expanded }) => (expanded ? "block" : "none")};
  margin-top: 8px;
  padding-left: 24px;
  background-color: orange;
  color: #555;
`;

const ExpandableList = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setExpandedItem((prevItem) => (prevItem === itemIndex ? null : itemIndex));
  };

  return (
    <>
      {Array.isArray(items) &&
        items?.map((item, index) => (
          <div key={index}>
            <ExpandableItemContainer onClick={() => handleItemClick(index)}>
              <ArrowIcon>{expandedItem === index ? "▼" : "▶"}</ArrowIcon>
              <ItemContent>{item.name}</ItemContent>
            </ExpandableItemContainer>
            {expandedItem === index && (
              <MoreInfoText expanded={expandedItem === index}>
                {item.address}
              </MoreInfoText>
            )}
          </div>
        ))}
    </>
  );
};

export default ExpandableList;
