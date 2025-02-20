import PropTypes from 'prop-types';

import { CloseButton } from './CloseButton';

export const Modal = ({ show = false, onClose, children }) => {
    const handleEscapePress = (e) => {
        if (e.key === 'Escape') {
            e.stopPropagation();
            onClose?.();
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose?.();
        }
    };

    return (
        <div
            className={`fixed cursor-pointer flex-1 inset-0 z-50 bg-gray-500/50 backdrop-blur transform transition-all duration-300 ${
                show ? 'flex' : 'hidden'
            }`}
            role="dialog"
            aria-modal="true"
            onKeyDown={handleEscapePress}
            onClick={handleBackdropClick}
        >
            <div className="relative cursor-auto max-w-[95vw] m-auto max-h-[95vh] flex flex-1 p-4 items-center justify-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                <div className="absolute top-2.5 right-2.5 -ml-8 flex pt-4 sm:-ml-10 pr-4">
                    <CloseButton onClick={onClose} />
                </div>

                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    backdropClose: PropTypes.bool,
};
