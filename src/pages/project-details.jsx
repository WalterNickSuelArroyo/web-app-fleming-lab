import ProjectDetails from '@/components/project-details';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
      <Wrapper>
            <SEO pageTitle="Detalles del Proyecto" />
            <ProjectDetails />
      </Wrapper>
    );
};

export default index;