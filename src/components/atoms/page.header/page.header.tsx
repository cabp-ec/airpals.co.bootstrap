import React, { ReactNode } from 'react';
import { PageHeaderInterface } from './page.header.interface';

export const PageHeader: React.FC<PageHeaderInterface> = ({ title, paragraphs }: PageHeaderInterface) => {
  /**
   * Render paragraphs
   *
   * @return ReactNode[]
   */
  const renderParagraphs = (): ReactNode[] => {
    const nodes: ReactNode[] = [];

    paragraphs.forEach((paragraph, index) => {
      nodes.push(<p key={ `paragraph_${ index }` } className={ index === 0 ? 'fw-bold' : '' }>{ paragraph }</p>);
    });

    return nodes;
  };

  return <div className="text-center mt-5 ">
    <h4>{ title }</h4>
    { renderParagraphs() }
  </div>;
};
