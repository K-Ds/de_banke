import React from 'react';
import clsx from 'clsx';

const Button = ({ name, primary, secondary, onClick, styles }) => {
    return (
        <div className={clsx('px-6 py-2', primary && 'bg-primary', secondary && 'bg-secondary', styles)} onClick={onClick}>
            {name}
        </div>
    )
}

export default Button