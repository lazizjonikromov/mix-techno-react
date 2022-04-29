import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';

const Send = () => {
    const [loader, setLoder] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoder(false);
        }, 2000);
    }, []);
    return (
        <>
            {loader ?
                <div className="loader">
                    <img src="/image/logo.svg" alt="" />
                    <SpinnerDotted size={99} thickness={100} speed={100} color="#ffa616" />
                </div> : ''
            }
            <div className="send">
                <div className="header">

                </div>

                <div className="send-main">
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center">
                                <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                                <div className="img"><img src="/image/send.png" alt="" /></div>
                            </div>
                            <p>Оставьте номер телефона и мы перезвоним вам в течение 15 минут.</p>
                        </div>

                        <div className="row form-send">
                            <form action="" method="post">
                                <div className="input">
                                    <input className='form-control' type="text" name='name' placeholder='Ваше имя*' required autoComplete='off' />
                                    <input className='form-control' type="number" name='email' placeholder='Ваше телефон*' required autoComplete='off' />
                                </div>

                                <button className='btn myBtn' type='submit'>Оставить Заявку</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Send
