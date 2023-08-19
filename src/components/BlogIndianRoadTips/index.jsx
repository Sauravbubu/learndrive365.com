import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-top: 30px;
`;

const SubSectionTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;

const Emoji = styled.span`
  margin-right: 8px;
`;

const GuideComponent = () => {
  return (
    <GuideContainer>
      <h1>Guide to Learning to Drive on Indian Roads</h1>
      
      <SectionTitle>Getting Started</SectionTitle>
      <p><Emoji>🚦</Emoji> Obtaining a Learner's License</p>
      <p><Emoji>🏫</Emoji> Choosing a Driving School</p>
      <p><Emoji>🚗</Emoji> Enrolling in a Driving Course</p>

      <SectionTitle>Road Rules and Traffic Signs</SectionTitle>
      <p><Emoji>🚥</Emoji> Understanding Traffic Signals</p>
      <p><Emoji>🛑</Emoji> Identifying Road Signs and Markings</p>
      <p><Emoji>🚧</Emoji> Yielding Right of Way</p>

      <SubSectionTitle>Understanding Traffic Signals</SubSectionTitle>
      <p>Traffic signals play a vital role in regulating traffic flow and ensuring safety. Here's what each color means:</p>
      <ul>
        <li><strong>Red:</strong> Stop. You must come to a complete halt.</li>
        <li><strong>Yellow (Amber):</strong> Prepare to stop. The signal is about to change to red.</li>
        <li><strong>Green:</strong> Go if the way is clear. Yield to pedestrians and vehicles that may still be in the intersection.</li>
      </ul>
      <p>Remember to obey traffic signals at all times and avoid jumping red lights.</p>

      <SubSectionTitle>Identifying Road Signs and Markings</SubSectionTitle>
      <p>Road signs and markings convey important information to drivers. Some common road signs include:</p>
      <ul>
        <li><strong>Stop Sign:</strong> A red octagon that indicates you must come to a complete stop.</li>
        <li><strong>Speed Limit Sign:</strong> Indicates the maximum speed allowed on that road.</li>
        <li><strong>No Entry Sign:</strong> A red circle with a white horizontal bar, indicating entry is prohibited.</li>
      </ul>
      <p>Stay attentive to road signs and markings to ensure safe driving.</p>

      <SubSectionTitle>Yielding Right of Way</SubSectionTitle>
      <p>Yielding right of way means giving other road users priority in certain situations. Always yield to:</p>
      <ul>
        <li>Pedestrians at zebra crossings.</li>
        <li>Other vehicles that have the right of way, such as emergency vehicles or vehicles already in a roundabout.</li>
      </ul>
      <p>Yielding helps prevent accidents and promotes smooth traffic flow.</p>

      {/* Repeat similar structure for other sections and subsections */}
      
      <SectionTitle>Conclusion</SectionTitle>
      {/* ... Conclusion content ... */}
    </GuideContainer>
  );
};

export default GuideComponent;
