import React, { ReactNode } from 'react';
import { AppModalInterface } from './app.modal.interface';
import { Icon } from '../../particles/icon';

export const AppModal: React.FC<AppModalInterface> = ({ title, closeLabel, paragraphs }: AppModalInterface) => {
  /**
   * Render paragraphs
   *
   * @return ReactNode[]
   */
  const renderParagraphs = (): ReactNode[] => {
    const nodes = [];

    paragraphs.forEach((paragraph, index) => {
      nodes.push(<p key={ `paragraph_${ index }` } className={ index === 0 ? 'fw-bold' : '' }>{ paragraph }</p>);
    });

    return nodes;
  };

  return <div
    id="appModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="appModalLabel"
    aria-hidden="true"
    className="modal fade"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content text-center">
        <div className="modal-header border-0 d-flex justify-content-end p-1 pb-0">
          <button
            type="button"
            className="btn btn-sm border-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <Icon icon="x" className="fs-1"/>
          </button>
        </div>

        <div className="modal-body">
          <h4 id="appModalLabel" className="modal-title fs-5 mb-4">{ title }</h4>
          { renderParagraphs() }
        </div>

        <div
          className="modal-footer border-0 d-flex justify-content-center px-5"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <button type="button" className="btn btn-danger rounded-5 w-100">{ closeLabel }</button>
        </div>
      </div>
    </div>
  </div>;
};
