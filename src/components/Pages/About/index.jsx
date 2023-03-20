import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BaseTemplate from '../../templates/BaseTemplate'
import './about.css'

const About = ({ data }) => {

    const { section } = useParams()

    const [mode, setMode] = useState('politics')

    const navigate = useNavigate()

    const handleOnClick = (param) => {
        navigate(`/about/${param}`)
    }

    useEffect(() => {
        handleOnClick(section)
    }, [])




    return (
        <BaseTemplate mostViewed={data}>
            <div className='container  p-0'>
                <div className='d-flex flex-column flex-lg-row bg-light'>
                    <div className='border-end w-auto'>
                        <ul className="nav flex-column">
                            <li className="nav-item border-bottom">
                                <Link className="nav-link fs-6 text-dark active" to="/about/politics">Política de privacidad</Link>
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
                    <div className='container w-100 p-2'>
                        {
                            evaluate(mode)
                        }
                    </div>

                </div>
            </div>
        </BaseTemplate >
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
            El presente Política de Privacidad establece los términos en que Empleo seguro usa y protege la
            información que es proporcionada por sus usuarios al momento de utilizar su sitio web.
            Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos
            llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos
            asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta
            Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y
            enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
        </p><h5><strong>Información que es recogida</strong>
        </h5>
        <p>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,&nbsp; información
            demográfica. Así mismo cuando sea necesario podrá ser requerida información específica
            para procesar algún pedido o realizar una entrega o facturación.</p><h5><strong>
                Uso de la información recogida</strong></h5><p>Nuestro sitio web emplea la información
                    con el fin de proporcionar el mejor servicio posible, particularmente para mantener
                    un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y
                    servicios. &nbsp; nuevos productos y otra información publicitaria que
                    consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos
                    electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en
                    cualquier momento.</p><p>Empleo seguro está altamente comprometido para cumplir con el
                        compromiso de mantener su información segura. Usamos los sistemas más avanzados y los
                        actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
        </p><h5><strong>Enlaces a Terceros</strong></h5><p>Este sitio web pudiera contener
            en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos
            enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido
            y por lo tanto no somos responsables de los <a href="https://plantillaterminosycondicionestiendaonline.com/" target="_blank">
                términos o privacidad</a> ni de la protección de sus datos en esos otros sitios terceros

            . Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los
            consulte para confirmar que usted está de acuerdo con estas.</p><h5><strong>Control de su información
                personal</strong></h5><p>En cualquier momento usted puede restringir la recopilación o el uso de
                    la información personal que es proporcionada a nuestro sitio web.&nbsp; Cada vez que se le solicite
                    rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir
                    información por correo electrónico. &nbsp;En caso de que haya marcado la opción de recibir nuestro
                    boletín o publicidad usted puede cancelarla en cualquier momento.</p><p>Esta compañía no venderá,
                        cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea
                        requerido por un juez con un orden judicial.</p><p>Empleo seguro Se reserva el derecho de cambiar
                            los términos de la presente Política de Privacidad en cualquier momento.</p><p>Esta politica de
                                privacidad se han generado en <a href="https://politicadeprivacidadplantilla.com/" target="_blank">
                politicadeprivacidadplantilla.com</a>.<br />
        </p>
        <p>
            Política de privacidad de empleoseguro.tech
            Esta Aplicación recoge algunos Datos Personales de sus Usuarios.</p>

        <p> Datos Personales tratados para las siguientes finalidades y utilizando los siguientes servicios:
            Contactar con el Usuario
            Formulario de contacto
            Datos Personales: apellido(s); país; razón social; área de actividad
        </p>
        <p>
            Gestión de Etiquetas
            Google Tag Manager
            Datos Personales: Datos de uso
        </p>
        <p>
            Publicidad
            Publicidad directa
            Datos Personales: Datos de uso; Identificador único universal (UUID); identificadores únicos de dispositivo para publicidad (ID de publicidad de Google o IDFA, por ejemplo); información del dispositivo; Rastreadores
        </p>
        <p>
            Visualizar contenidos de plataformas externas
            Google Fonts
            Datos Personales: Datos de uso; Rastreadores
        </p>
        <p>
            Información sobre la inhabilitación de la publicidad basada en intereses
            Además de las funcionalidades de inhabilitación ofrecidas por cualquiera de los servicios enumerados en el presente documento, los Usuarios podrán seguir las instrucciones facilitadas por YourOnlineChoices (UE), la Network Advertising Initiative (EE. UU.) y la Digital Advertising Alliance (EE. UU.), DAAC (Canadá), DDAI (Japón) u otros servicios similares. Tales iniciativas permiten a los Usuarios seleccionar sus preferencias de seguimiento para la mayoría de las herramientas de publicidad. El Titular, por tanto, recomienda que los Usuarios utilicen estos recursos además de la información proporcionada en el presente documento.
        </p>
        <p>
            La Digital Advertising Alliance ofrece una aplicación denominada AppChoices que ayuda a los Usuarios a controlar la publicidad basada en intereses en aplicaciones móviles.
        </p>
        <p>
            Los Usuarios también podrán inhabilitar determinadas funcionalidades publicitarias mediante las correspondientes opciones de configuración de los dispositivos, como las opciones de configuración de publicidad del dispositivo para teléfonos móviles o la configuración de publicidad en general.
        </p>
        <p>
            Datos de contacto
            Titular y Responsable del tratamiento de los Datos
            Adprosoft, La Castellana 1060, Caracas, Venezuela.
        </p>
        <p>
            Correo electrónico de contacto del Titular: kevindosmartinfenixzone@gmail.com
        </p>
    </div>
    )
}

const Conditions = () => {
    return (
        <div className='mt-3' >
            <h1><strong>Condiciones de uso</strong></h1>
            <p>Empleo Seguro, como su nombre lo indica es un sitio web creado a fin de tener un empleo seguro para usted mismo y para su empleador, nuestra función principal orientar, motivar y enseñar a nuestro público en el ámbito laboral, disponemos de información que creemos que será útil para vosotros y consecuente para tu empleador, dicha información recogida de múltiples sitios web, libros reconocidos y basándonos en experiencia propia, como podremos ayudaros, inclusivamente os mantendremos informados sobre lo que pasa en el mundo relacionado con el trabajo, además disponemos de un formulario sencillo para llevaros a Google y buscar empleadores en tu zona. Hacemos énfasis, Empleo Seguro no ofrece un empleo a disposición ni mucho menos garantiza que vosotros encontréis dicho requerimiento propio, solo es una página informativa.
            </p>
            <p>Estados Unidos</p>
            <p>Los siguientes son términos y condiciones específicas para los usuarios en los Estados Unidos de nuestros sitios web y aplicaciones móviles:

                1. Propiedad y uso del contenido: Todos los contenidos, información, imágenes, videos, gráficos, textos y otros materiales exhibidos están protegidos por las leyes de marcas registradas y derechos de autor. Estos materiales solo pueden ser utilizados para uso personal y no comercial de los usuarios. El uso comercial está prohibido sin previa autorización escrita de nuestra empresa.

                2. Información de cuenta: Cada usuario es responsable de mantener la privacidad de su cuenta y cualquier actividad relacionada con ella. Cualquier uso no autorizado de una cuenta debe ser reportado inmediatamente. No nos hacemos responsables de las consecuencias de un uso no autorizado de una cuenta.

                3. Propiedad intelectual: Todos los derechos de propiedad intelectual pertenecen a nuestra empresa. Los usuarios no tienen derecho a reproducir, modificar, distribuir, vender o usar el contenido con fines comerciales. Cualquier uso no autorizado de propiedad intelectual será sancionado legalmente.

                4. Política de privacidad: Nuestra empresa tiene una política de privacidad que protege la información personal del usuario. Los usuarios deben leer y entender esta política antes de utilizar el sitio o la aplicación.

                5. Responsabilidad limitada: No somos responsables de cualquier daño o perjuicio directo o indirecto que puedan causar los contenidos del sitio, incluyendo virus, pérdida de datos, interrupciones de servicio, retrasos en la transmisión de información, errores u omisiones o cualquier otro tipo de pérdida directa o indirecta.

                6. Jurisdicción: Estos términos están sujetos a las leyes de los Estados Unidos. Si surge algún conflicto legal entre el usuario y nuestra empresa, se debe resolver de acuerdo con las leyes de los Estados Unidos y la jurisdicción de los tribunales federales y estatales de los Estados Unidos.

                7. Modificaciones: Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento y sin previo aviso. Los usuarios deben verificar periódicamente cualquier cambio en los términos y condiciones.

                8. Cesión: No se permite la cesión o transferencia de los derechos otorgados por estos términos y condiciones ni del sitio web ni de la aplicación.

                9. Rescisión: Nos reservamos el derecho de rescindir cualquier cuenta en cualquier momento y sin previo aviso si consideramos que el usuario ha violado cualquiera de los términos y condiciones de uso del sitio. También nos reservamos el derecho de eliminar la información provista por el usuario en la plataforma sin previo aviso.

                10. Soporte al cliente: Para cualquier ayuda o soporte relacionado con el sitio o la aplicación, los usuarios pueden contactarnos por correo electrónico o por otras opciones de contacto que se proporcionen en el sitio web.

                Al utilizar nuestro sitio web o nuestra aplicación, el usuario acepta estos términos y condiciones. Si no aceptas estas cláusulas, no podrás usar nuestro sitio web o nuestra aplicación.
            </p>
        </div>
    )
}
const AboutUs = () => {
    return (
        <div className='mt-3' >
            <h1><strong>¿Quiénes somos?</strong></h1>
            <p>Empleo Seguro es un blog informativo cuya función es optimizar, orientar, motivar, enseñar a que usted
                lector, tenga un mejor desempeño en su trabajo, les mostraremos unas pequeñas estrategias y tipsips
                para su día a día, esperamos que les sea útil la información que disponemos, tenemos una sección
                de noticias, para que este al tanto de lo que pasa en el mundo laboralmente, estaremos implementando
                Cosas nuevas, para que su visita sea recurrente. Esperamos que nuestro contenido sea de su agrado
                Y mejor aún, le ayude a crecer.
            </p>
            <p>
                Ubicación: Colombia, Norte de Santander, Villa del Rosario, Barrio San Martín.
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
                <li> <p><strong>Correo</strong>: <a href='#'>galbaneduardoenrique11@gmail.com</a></p></li>
                <li> <p><strong>WhatsApp</strong>: <a href='#'>+57 311 2313082</a></p></li>
                <li> <p><strong>Instagram</strong>: <a href='https://www.instagram.com/empleoseguroes/' target="_blank">@empleoseguroes</a></p></li>
                <li> <p><strong>Facebook</strong>: <a href='https://www.facebook.com/vidasinmaduro/' target="_blank">@empleosegurosas</a></p></li>
            </ul>
        </div>
    )
}

export default About
