import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <>
            <div className='foot-icon'>
                <a href="https://www.linkedin.com/in/nhora-mbemba-b878b2207" target="_blank"><Icon icon="simple-icons:linkedin" color="white" width="32" /></a>
                <a href="https://github.com/Nhoni" target="_blank"><Icon icon="mdi:github" color="white" width="32" /></a>
            </div><p id="copyright" style={{ color: '#fff' }}>© Copyright 2023 - MBEMBA Nhora. Tous droits réservés.</p>
        </>
    
    )
}
export default Footer