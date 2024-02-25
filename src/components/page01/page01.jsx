import pinIcon from '../../assets/images/svgs/pin.svg'
import './page01.css'
export function Page01() {
    return (
        <section>
            <h1 className="title">Aplicação para o programa <span className="bold"> TREND TESTER 2024</span></h1>
            <p className="f18">Seja um(a) avaliador(a) oficial da SHEIN</p>

            <section id="p01-down">
                <button className="mainButton f16">INICIAR APLICAÇÃO</button>

                <div className="countryBadge">
                    <img src={pinIcon} width={20} height={20} />
                    <p>Brasil</p>
                </div>

                <div id="terms" className='f12 lightweight'>
                    Ao continuar, você concorda com nossa <span className='bluelink'>Política de Privacidade e Cookies</span>  e <span className='bluelink'> Termos e condições.</span>
                </div>
            </section>

        </section >
    )
}