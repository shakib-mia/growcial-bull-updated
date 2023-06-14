import React from 'react';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Disclaimer from '../Disclaimer/Disclaimer';
import RefundPolicy from '../RefundPolicy/RefundPolicy';
import Terms from '../Terms/Termsone';

const Policies = () => {
    return (
        <>
            <Terms />
            <PrivacyPolicy />
            <Disclaimer />
            <RefundPolicy />
        </>
    );
};

export default Policies;