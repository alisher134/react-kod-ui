import clsx from 'clsx';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const renderRootRef = useRef(document.body);
  const rootEl = renderRootRef.current;
  const overlayRef = useRef<HTMLDivElement>(null);

  const createPortalRoot = () => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');

    return modalRoot;
  };

  const portalRootRef = useRef(document.getElementById('modal-root') || createPortalRoot());

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (rootEl) {
      rootEl.style.overflow = isOpen ? 'hidden' : '';

      return () => {
        rootEl.style.overflow = '';
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && rootEl) {
      rootEl.appendChild(portalRootRef.current);
      const portal = portalRootRef.current;

      return () => {
        portal.remove();
        rootEl.style.overflow = '';
      };
    }
  }, [isOpen]);

  return createPortal(
    <div
      className={clsx(styles.overlay, className, { [styles['modal-open']]: isOpen })}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal} ref={overlayRef}>
        <div className={styles.top}>
          <button onClick={handleClose} className={styles.close}>
            <X />
          </button>
        </div>

        {children}
      </div>
    </div>,
    portalRootRef.current,
  );
};
