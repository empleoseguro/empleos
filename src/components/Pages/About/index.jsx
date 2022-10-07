import React, { useState } from 'react'
import BaseTemplate from '../../templates/BaseTemplate'
import './about.css'

const About = () => {
    const [mode, setMode] = useState('politics')

    const handleOnClick = (param) => {
        setMode(param)
    }

    return (
        <BaseTemplate>
            <div className='container'>
                <div className='bg-light row row-cols-2'>
                    <div className='w-auto border-end'>
                        <ul className="nav flex-column">
                            <li className="nav-item border-bottom">
                                <a className="nav-link fs-6 text-dark active" aria-current="page" onClick={() => handleOnClick('politics')} href="#">Política de privacidad</a>
                            </li>
                            <li className="nav-item border-bottom">
                                <a className="nav-link fs-6 text-dark" href="#" onClick={() => handleOnClick('conditions')}>Condiciones de uso</a>
                            </li>
                            <li className="nav-item border-bottom">
                                <a className="nav-link fs-6 text-dark" href="#" onClick={() => handleOnClick('contact')}>Contacto</a>
                            </li>
                            <li className="nav-item border-bottom">
                                <a className="nav-link fs-6 text-dark" href="#" onClick={() => handleOnClick('cookies')}>Política de cookies</a>
                            </li>
                            <li className="nav-item border-bottom">
                                <a className="nav-link fs-6 text-dark" href="#" onClick={() => handleOnClick('aboutus')}>¿Quiénes somos?</a>
                            </li>
                         
                        </ul>
                    </div>
                    <div className='container col-8'>
                        {
                            evaluate(mode)
                        }
                    </div>

                </div>
            </div>
        </BaseTemplate>
    )
}

const evaluate = (type) => {
    let component
    switch (type) {
        case 'politics':
            component = <Politics />
            break;
        case 'conditions':
            component = <Conditions />
            break;
        case 'aboutus':
            component = <AboutUs />
            break;
        case 'contact':
            component = <Contact />
            break;
        case 'cookies':
            component = <Cookies />
            break;
        default:
            component = <Politics />
            break;
    }

    return component
}

const Politics = () => {
    return (<div className='mt-3' >
        <h4>
            <strong>Política de Privacidad</strong>
        </h4>
        <p>
            El presente Política de Privacidad establece los términos en que Empleo seguro usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p><h5><strong>Información que es recogida</strong></h5><p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,&nbsp; información de contacto como&nbsp; su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</p><h5><strong>Uso de la información recogida</strong></h5><p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. &nbsp;Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.</p><p>Empleo seguro está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p><h5><strong>Enlaces a Terceros</strong></h5><p>Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los <a href="https://plantillaterminosycondicionestiendaonline.com/" target="_blank">términos o privacidad</a> ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p><h5><strong>Control de su información personal</strong></h5><p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.&nbsp; Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. &nbsp;En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.</p><p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p><p>Empleo seguro Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p><p>Esta politica de privacidad se han generado en <a href="https://politicadeprivacidadplantilla.com/" target="_blank">politicadeprivacidadplantilla.com</a>.<br />
        </p>
    </div>
    )
}

const Conditions = () => {
    return (
        <div className='mt-3' >
            <h1><strong>Condiciones de uso</strong></h1>
            <p>Empleo Seguro es un sitio web creado a fin de orientar, motivar y enseñar a nuestro público en el ámbito laboral, disponemos de información que creemos que será útil para vosotros y consecuente para tu empleador, dicha información recogida de múltiples sitios web, libros reconocidos y basándonos en experiencia propia, como podremos ayudaros, inclusivamente os mantendremos informados sobre lo que pasa en el mundo relacionado con el trabajo, además disponemos de un formulario sencillo para llevaros a Google y buscar empleadores en tu zona. Hacemos énfasis, Empleo Seguro no ofrece un empleo a disposición ni mucho menos garantiza que vosotros encontréis dicho requerimiento propio, solo es una página informativa.
            </p>
        </div>
    )
}
const AboutUs = () => {
    return (
        <div className='mt-3' >
            <h1><strong>¿Quiénes somos?</strong></h1>
            <p>Empleo Seguro es un blog informativo cuya función es optimizar, orientar, motivar, enseñar a que usted
                lector, tenga un mejor desempeño en su trabajo, les mostraremos unas pequeñas estrategias y Ttips
                para su día a día, esperamos que les sea útil la información que disponemos, tenemos una sección
                de noticias, para que este al tanto de lo que pasa en el mundo laboralmente, estaremos implementando
                Cosas nuevas, para que su visita sea recurrente. Esperamos que nuestro contenido sea de su agrado
                Y mejor aún, le ayude para crecer.
            </p>
        </div>
    )
}

const Cookies = () => {
    return (
        <div className='mt-3' >
            <h1><strong>Cookies</strong></h1>
            <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para
                almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para
                tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente.
                Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente
                y por tanto brindarte el mejor servicio personalizado de su web.</p><p>Nuestro sitio web emplea
                    las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información
                    es empleada únicamente para análisis estadístico y después la información se elimina de forma
                    permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador.
                    Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan
                    acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la
                    proporcione directamente <a href="https://noticiasvillarrealcf.es/" target="_blank">noticias</a>.
                Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan
                cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede
                cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible
                que no pueda utilizar algunos de nuestros servicios.</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='mt-3' >
            <h1><strong>Contacto</strong></h1>
            <p>Disponemos de distintas redes sociales, correo electrónico y número de teléfono para atender
                cualquier duda que tengan sobre nosotros, así como también estamos abiertos ampliamente a
                recibir consejos o críticas sobre nuestro sitio, sugerencias, errores, entre otras cosas.
            </p>
            <ul>
                <li> <p><strong>Correo</strong>: <a href='#'>empleoseguro@gmail.com</a></p></li>
                <li> <p><strong>Número</strong>: <a href='#'>+1 132 1421 2123</a></p></li>
                <li> <p><strong>Instagram</strong>: <a href='#'>@empleosegurosas</a></p></li>
                <li> <p><strong>Twitter</strong>: <a href='#'>@empleosegurosas</a></p></li>
                <li> <p><strong>Facebook</strong>: <a href='#'>@empleosegurosas</a></p></li>
            </ul>





        </div>
    )
}

export default About
