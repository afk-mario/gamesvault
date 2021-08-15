import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/modal';

import Button from 'components/button';

import GamePublishManuallyModal from './game-publish-manually-modal';

function GamePublishManuallyButton({ id }) {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <>
      <Button onClick={open}>Publish Game</Button>
      <Modal
        title="Publish Game"
        aria-label="publish-game-modal"
        onDismiss={close}
        isOpen={showModal}
      >
        <GamePublishManuallyModal id={id} />
      </Modal>
    </>
  );
}

GamePublishManuallyButton.propTypes = {
  id: PropTypes.string.isRequired,
};

GamePublishManuallyButton.defaultProps = {};

export default GamePublishManuallyButton;
