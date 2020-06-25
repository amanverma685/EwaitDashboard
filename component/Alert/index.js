import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Alert = ({title, message, type }) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: <p>Success</p>,
        onOpen: () => {
            MySwal.clickConfirm(),
                MySwal.clickCancel()
        }
    }).then(() => {
        return MySwal.fire(<p>{title}</p>, <p className='mb-8 '>{message}</p>, type)
    });
}

export default Alert;