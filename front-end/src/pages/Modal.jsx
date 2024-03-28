import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          {/* Modal içeriği buraya gelecek */}
          <div class="bABA-DW" id="zindex1"></div>
          <div class="bABA-DW" id="zindex2"></div>
          <div class="bABA-DW" id="zindex3">
            <div class="fillScreen">
              <div class="fillScreen" id="opacity1">
                <div class="overlayPos">
                  <div class="overlayContainer">
                    <div class="overlayContent"></div>
                    <div kind="OVERLAY/DARK" class="overlayLayer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fillScreen" id="modalFillScreen">
            <div data-prism-focus-guard="true" tabindex="0" id="dataPrism"></div>
            <div tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="ModalContent" data-anchor-id="ItemModal" class="modalContainer">
              <span tabindex="-1" data-prism-modal-initial-focus="" id="ModalContent-1-Title" aria-hidden="false" class="VisuallyHiddenText">Chicken Caesar Salad</span>
              <div class="ModalCloseButtonContainer">
                <button size="16" shape="Circle" kind="BUTTON/PLAIN" aria-label="Close Caesar Salad" type="button" class="StyledButtonRoot" onClick={onClose}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="StyledInlineSvg">
                    <path d="M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z" fill="currentColor"></path>
                  </svg>
                </button>
              </div>
              <div class="ModalContentContainer">
                <div data-testid="itemHeader" class="styledInset">
                  <div class="dhXlc">
                    <h2 overflow="normal" display="block" class="gNWMJn">
                      <span>Chicken Caesar Salad</span>
                    </h2>
                  </div>
                  <div class="Stack__StyledStack">
                    <div class="iAOYpG"></div>
                  </div>
                  <span overflow="normal" display="block" data-testid="nestedItemHeader_subtitle" class="modalExp">
                    Romaine lettuce, chicken, French bread, parmesan cheese, anchovies,
                    yogurt then a few more food staples like garlic, olive oil, mayonnaise
                  </span>
                </div>
                <div class="modalContent">
                  {/* Modal içeriği buraya gelecek */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
