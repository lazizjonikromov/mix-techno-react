import React from 'react'

const Send = () => {
    return (
        <>
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
