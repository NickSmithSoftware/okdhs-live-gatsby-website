import React from 'react';
import { LoginModal } from '../components/display/login-modal';

export const getModal = (modalName) => {
    switch (modalName.toLowerCase()) {
        case 'login':
            return LoginModal;
        break;
    }
}