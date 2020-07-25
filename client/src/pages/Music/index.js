import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

const Music = () => {
  return (
    <PageWrapper>
      <Section>
        <SectionTitle>EPs</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>SINGLES</SectionTitle>
      </Section>
    </PageWrapper>
  )
}

export default Music;