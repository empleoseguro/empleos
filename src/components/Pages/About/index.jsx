import React, { useState } from 'react'
import { scrollToTop } from '../../../utils/functions'
import ImageLazyLoad from '../../atoms/ImageLazyLoad/ImageLazyLoad'
import MiniTips from '../../molecules/MiniTips'
import './about.css'

const About = () => {

    const [mode, setMode] = useState('politics')

    scrollToTop()


    const handleOnClick = (param) => {
        setMode(param)
    }



    return (
        <div>
            <div className=' justify-content-around align-items-center d-flex flex-column flex-sm-row px-sm-3 mt-1 bg-dark' style={{maxHeight:280}}>
                <div className='d-flex flex-column w-100 align-items-center' style={{maxWidth:700}}>
                    <div className='fs-3 fw-bold text-center portada-text '>Todo lo que necesitas saber sobre nosotros y nuestra comunidad en línea</div>
                    <div className='d-none d-sm-flex fs-6 text-secondary'>¡Bienvenido a nuestra sección de políticas, cookies, contacto, sobre nosotros y redes sociales! Aquí encontrarás información importante sobre nuestras políticas y prácticas, cómo nos comunicamos contigo, quiénes somos y cómo puedes encontrarnos en las redes sociales. Si tienes alguna pregunta o comentario, no dudes en contactarnos. ¡Gracias por visitarnos!</div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center w-sm-25'>
                    <ImageLazyLoad
                        className='img-fluid'
                        src="https://i.ibb.co/87N80dD/Security-On-bro.webp"
                        alt='Imagen de un hombre trabajando en seguridad informática para un empleo seguro'
                    />
                    <a href="https://storyset.com/work" className='text-decoration-none text-secondary w-100'>Work illustrations by Storyset</a>
                </div>

            </div>
            <div className='container-sm aboutus mt-2 fs-5 d-flex flex-column flex-sm-row p-0'>
                <div className='d-flex flex-column flex-lg-row w-100 bg-light'>
                    <div className='border-end w-auto'>
                        <nav>
                            <ul className="nav flex-column">
                                <li className="nav-item border-bottom">
                                    <button className="border-0 w-100 nav-link fs-6 text-dark cursor-pointer" onClick={() => handleOnClick('politics')}>Politícas de privacidad</button>
                                </li>
                                <li className="nav-item border-bottom">
                                    <button className="border-0 w-100 nav-link fs-6 text-dark cursor-pointer" onClick={() => handleOnClick('conditions')}>Condiciones de uso</button>
                                </li>
                                <li className="nav-item border-bottom">
                                    <button className="border-0 w-100 nav-link fs-6 text-dark cursor-pointer" onClick={() => handleOnClick('contact')}>Contacto</button>
                                </li>
                                <li className="nav-item border-bottom">
                                    <button className="border-0 w-100 nav-link fs-6 text-dark cursor-pointer" onClick={() => handleOnClick('cookies')}>Política de cookies</button>
                                </li>
                                <li className="nav-item border-bottom">

                                    <button className="border-0 w-100 nav-link fs-6 text-dark cursor-pointer" onClick={() => handleOnClick('aboutus')}>¿Quiénes somos?</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='container w-100 p-2'>
                        {
                            evaluate(mode)
                        }
                    </div>

                </div>
                <div className='ms-2 '>
                    <MiniTips />
                </div>
            </div>
        </div>
    )
}



const evaluate = (type) => {
    let component
    switch (type) {
        case 'politics':
            component = <AdsPolitics />
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
            component = <Cookiess />
            break;
        default:
            component = <Politics />
            break;
    }

    return component
}

const AdsPolitics = () => {
    return (
        <div>
            <h3>Política de privacidad</h3>
            <p>Última actualización: 31 de marzo de 2023</p>

            <p>Gracias por visitar la Política de Privacidad de Empleo Seguro. Esta Política de privacidad explica cómo Empleo Seguro (colectivamente, “Empleo Seguro”, “nosotros”, “nos” o “nuestro”) recopila, usa y comparte información sobre usted (“usted”, “suyo” o “usuario”) cuando accede o utiliza nuestros sitios web (“Servicios”).</p>
            <p>Los usuarios son responsables de los datos de terceros que proporcionen o compartan a través de los Servicios y confirman que cuentan con el consentimiento del tercero para proporcionarnos dichos datos.</p>
            <br />

            <h3>Información que recopilamos</h3>
            <p>Podemos recopilar y combinar información sobre usted cuando accede o utiliza los Servicios, incluidos:</p>
            <p><strong>Información de contacto</strong>: como:</p>
            <ul>
                <li>
                    <p>nombre y apellido</p>
                </li>
                <li>
                    <p>dirección de correo electrónico</p>
                </li>
                <li>
                    <p>número de teléfono</p>
                </li>
                <li>
                    <p>dirección (calle, ciudad, estado, código postal)</p>
                </li>
            </ul>
            <p><strong>Información de registro y uso: </strong>como el tipo de navegador que usa, el modelo de hardware, el sistema operativo, la dirección IP, los identificadores únicos del dispositivo, los tiempos de acceso, las páginas visitadas, los enlaces en los que se hizo clic y el comportamiento de navegación, como el tiempo gastado, de qué sitio proviene, qué sitio visita cuando nos deja y comportamiento de navegación.</p>


            <br />

            <h3>Fuentes de información y Tecnologías de Seguimiento</h3>

            <p>Recopilamos información que usted nos proporciona directamente, como cuando envía un formulario o nos envía un mensaje con su información.</p>
            <p>También podemos recibir información sobre usted de nuestros socios, incluidos, entre otros, socios de distribución, servicios de datos y empresas de marketing. Podemos combinar esta información con otra información que recopilamos de usted o sobre usted. En estos casos, nuestra Política de privacidad rige el manejo de la información combinada.</p>
            <p>Nosotros y nuestros socios podemos recopilar la información indicada en esta política de privacidad mediante cookies, balizas web, píxeles y otras tecnologías similares. Estas tecnologías se utilizan para la autenticación, para almacenar sus preferencias o progreso, para análisis y para publicidad y análisis. Las cookies son pequeños archivos de texto que se almacenan en el ordenador del Usuario. Los usuarios pueden configurar su navegador para rechazar las cookies por completo, rechazar nuestras cookies en particular o eliminar las cookies. Sin embargo, esto puede causar que algunos o todos nuestros Servicios no funcionen en la computadora o dispositivo de dicho usuario.</p>
            <br />
            <h3>Cómo usamos su información</h3>
            <p>Utilizamos la información que recopilamos sobre usted para proporcionar, mantener y mejorar nuestros Servicios y otras interacciones que tenemos con usted. Por ejemplo, usamos la información recopilada para:</p>
            <ul>
                <li>
                    <p>Facilitar y mejorar nuestra experiencia en línea;</p>
                </li>
                <li>
                    <p>Proporcionar y entregar productos y servicios, realizar autenticación, procesar transacciones y devoluciones, y enviarle información relacionada, incluidas confirmaciones, recibos, facturas, encuestas de experiencia del cliente y avisos relacionados con productos o Servicios;</p>
                </li>
                <li>
                    <p>Procesar y entregar promociones;</p>
                </li>
                <li>
                    <p>Responder a sus comentarios y preguntas y brindar servicio al cliente;</p>
                </li>
                <li>
                    <p>Si nos ha indicado que desea recibir notificaciones o mensajes promocionales;</p>
                </li>
                <li>
                    <p>Detectar, investigar y prevenir transacciones fraudulentas y otras actividades ilegales y proteger nuestros derechos y propiedad y otros;</p>
                </li>
                <li>
                    <p>Cumplir con nuestras obligaciones legales y financieras;</p>
                </li>
                <li>
                    <p>Supervisar y analizar tendencias, uso y actividades;</p>
                </li>
                <li>
                    <p>Proporcionar y permitir que nuestros socios proporcionen publicidad y marketing dirigido a sus intereses.</p>
                </li>
            </ul>
            <br />
            <h3>Cómo podemos compartir información</h3>
            <p>Podemos compartir su información personal en las siguientes situaciones:</p>
            <ul>
                <li>
                    <p><strong>Proveedores de servicios de terceros. </strong>Podemos compartir datos con proveedores de servicios, vendedores, contratistas o agentes que completan transacciones o prestan servicios en nuestro nombre, como aquellos que nos ayudan con nuestro negocio y operaciones internas como envío y entrega, procesamiento de pagos, prevención de fraude , atención al cliente, tarjetas regalo, experiencias, personalización, marketing y publicidad;</p>
                </li>
                <li>
                    <p><strong>Cambio en el negocio. </strong>Podemos compartir datos en relación con una transacción comercial corporativa, como una fusión o adquisición de todo o una parte de nuestro negocio a otra empresa, empresa conjunta, reorganización corporativa, insolvencia o quiebra, financiación o venta de activos de la empresa. ;</p>
                </li>
                <li>
                    <p><strong>Para cumplir con la ley. </strong>Podemos compartir datos para facilitar el proceso legal a partir de solicitudes legales de las autoridades públicas, incluso para cumplir con las demandas de seguridad nacional o de aplicación de la ley, según lo permita la ley.</p>
                </li>
                <li>
                    <p><strong>Con su consentimiento. </strong>Podemos compartir datos con terceros cuando contamos con su consentimiento.</p>
                </li>
                <li>
                    <p><strong>Con socios de publicidad y análisis. </strong>Consulte la sección titulada "Publicidad y análisis" a continuación.</p>
                </li>
            </ul>
            <br />
            <h3>Publicidad y análisis</h3>
            <p>
            </p>
            <p>Utilizamos tecnologías de publicidad y análisis para comprender mejor su actividad en línea en nuestros Servicios para brindarle productos y servicios personalizados que puedan interesarle.</p>
            <p>Podemos permitir que empresas de terceros, incluidas las redes publicitarias, publiquen anuncios, brinden otros servicios publicitarios y/o recopilen cierta información cuando visite nuestro sitio web. Las empresas de terceros pueden usar datos personales seudonimizados (p. ej., información de flujo de clics, tipo de navegador, hora y fecha, tema de los anuncios en los que se hizo clic o se desplazó) durante su visita a este sitio web para proporcionar anuncios sobre bienes y servicios que probablemente sean de su interés. interés para usted, en este sitio web y otros. Para obtener más información sobre la publicidad basada en intereses o para darse de baja de este tipo de publicidad, puede visitar <a href="http://optout.aboutads.info/?c=2&lang=EN">AboutAds.info /opciones</a> o <a href="http://optout.networkadvertising.org/?c=1">www.networkadvertising.org/choices</a>.</p>
            <p>Algunas empresas de terceros también pueden usar tecnologías que no son cookies, como identificaciones estadísticas. Tenga en cuenta que es posible que su navegador web no le permita bloquear el uso de estas tecnologías que no son cookies, y es posible que la configuración del navegador que bloquea las cookies no tenga ningún efecto sobre dichas técnicas. Si la empresa de terceros utiliza tecnologías que no son cookies para publicidad basada en intereses, puede cancelar su suscripción en <a href="http://optout.networkadvertising.org/?c=1">www.networkadvertising.org/ elecciones</a>. Tenga en cuenta que la opción de exclusión de la industria solo se aplica al uso de publicidad basada en intereses y es posible que no se aplique al uso de análisis o atribución.</p>
            <p>Algunos sitios web tienen funciones de "no rastrear" que le permiten indicarle a un sitio web que no lo rastree. Estas características no son todas uniformes. Actualmente no respondemos a esas señales.</p>
            <p></p>
            <br />
            <h3>Google Analytics</h3>
            <p>Utilizamos Google Analytics, un servicio de análisis proporcionado por Google LLC. Usamos este servicio para ayudar a analizar cómo los usuarios usan el Servicio, con miras a analizar el uso en todos los dispositivos y ofrecer mejoras para todos los usuarios. Para obtener más información sobre Google Analytics, visite su <a href="https://support.google.com/analytics/answer/6004245#zippy=%2Cour-privacy-policy">Política de privacidad</a>. Para optar por no participar en esta función mediante la instalación del complemento de exclusión de navegador de Google Analytics, haga clic <a href="https://tools.google.com/dlpage/gaoptout?hl=en">aquí</a >.</p>
            <br />
            <h3>Anuncios en el Servicio</h3>
            <p>Podemos utilizar empresas de publicidad de terceros para publicar contenido y anuncios cuando visita nuestro sitio web. Para optar por no recibir publicidad basada en intereses, consulte la sección titulada "Publicidad y análisis" más arriba.</p>
            <br />
            <h3>Seguridad de datos</h3>
            <p>Implementamos medidas de seguridad comercialmente razonables diseñadas para proteger su información. Sin embargo, a pesar de nuestros mejores esfuerzos, ninguna medida de seguridad es completamente impenetrable.</p>
            <br />
            <h3>Retención de datos</h3>
            <p>Almacenamos la información que recopilamos sobre usted durante el tiempo que sea necesario para los fines para los que la recopilamos o para otros fines comerciales legítimos, incluido el cumplimiento de nuestras obligaciones legales, reglamentarias u otras.</p >
            <br />
            <h3>Derechos de privacidad de California</h3>

            <p>Si es residente de California y el procesamiento de su información personal está sujeto a la Ley de Privacidad del Consumidor de California ("CCPA"), tiene ciertos derechos con respecto a esa información personal. Bajo la CCPA, sujeto a ciertas excepciones, la "información personal" es cualquier información que identifique, se relacione, describa, sea razonablemente capaz de asociarse o razonablemente podría vincularse, directa o indirectamente, con un residente u hogar particular de California. </p>
            <p>Si es residente de CA, tiene derecho a solicitar que le proporcionemos la siguiente información:</p>
            <ul>
                <li>
                    <p>Las categorías y piezas específicas de información personal que hemos recopilado sobre usted. Hemos divulgado las categorías de información en "Información que recopilamos", arriba.</p>
                </li>
                <li>
                    <p>Las categorías de fuentes de las que recopilamos información personal. Hemos revelado las categorías de fuentes en "Fuente de información y tecnologías de seguimiento", arriba.</p>
                </li>
                <li>
                    <p>Los propósitos para recopilar, usar o vender información personal. Hemos divulgado estos propósitos en "Cómo usamos su información" y "Cómo podemos compartir información" más arriba.</p>
                </li>
                <li>
                    <p>Las categorías de terceros con los que compartimos información personal. Hemos revelado las categorías de terceros en "Cómo podemos compartir información" arriba.</p>
                </li>
                <li>
                    <p>Las categorías de información personal divulgada sobre usted con fines comerciales. Hemos revelado las categorías de terceros en "Cómo podemos compartir información" arriba.</p>
                </li>
            </ul>

            <p>También tiene derecho a solicitar que eliminemos su información personal de la CCPA en determinadas circunstancias, sujeto a determinadas excepciones.</p>
            <p>Además, tiene derecho a decirnos que no vendamos su información personal de CCPA comunicándose con nosotros a kevindosmartinfenixzone@gmail.com o comunicándose con nosotros al +584124585154.</p>
            <p>Por último, tiene derecho a no ser discriminado por ejercer los derechos establecidos en la CCPA.</p>
            <p>Tenga en cuenta que tenemos derecho a tomar medidas razonables para verificar su identidad y la autenticidad de su solicitud.</p>
            <br />
            <h3>Derechos de privacidad de la UE</h3>

            <p>Las personas ubicadas en ciertos países, incluidos el Espacio Económico Europeo (EEE) y el Reino Unido, tienen ciertos derechos legales en virtud del Reglamento general de protección de datos (GDPR) en relación con sus datos personales.</p>
            <p>En la medida en que la información que recopilamos esté asociada con una persona física identificada o identificable y esté protegida como datos personales en virtud del RGPD, en esta Política de privacidad se la denominará "Datos personales".</p>
            <p><strong>Solicitudes de acceso de interesados</strong></p>
            <p>Sujeto a las exenciones previstas por la ley, puede tener derecho a solicitar:</p>
            <ul>
                <li>
                    <p>una copia de los Datos personales que tenemos sobre usted;</p>
                </li>
                <li>
                    <p>para corregir los Datos personales que tenemos sobre usted;</p>
                </li>
                <li>
                    <p>para eliminar su Cuenta o Datos Personales;</p>
                </li>
                <li>
                    <p>objetar el procesamiento de sus Datos Personales para ciertos fines;</p>
                </li>
            </ul>

            <p>Para acceder a sus derechos de privacidad, envíenos un correo electrónico a kevindosmartinfenixzone@gmail.com o escríbanos a Caracas Venezuela,
                Caracas, Distrito Capital 1060 Venezuela.</p>
            <p>Por lo general, procesamos las solicitudes en el plazo de un mes. Es posible que necesitemos solicitarle información específica para ayudarnos a confirmar su identidad y/o la jurisdicción en la que reside. Si su solicitud es complicada o si ha realizado una gran cantidad de solicitudes, es posible que nos lleve más tiempo. Le informaremos si necesitamos más de un mes para responder.</p>
            <p><strong>Bases legales para el procesamiento de datos personales</strong></p>
            <p>Podemos procesar sus Datos Personales bajo la ley de protección de datos aplicable en los siguientes fundamentos legales:</p>
            <ul>
                <li>
                    <p><strong>Necesidad contractual: </strong>podemos procesar sus Datos personales para celebrar o ejecutar un contrato con usted.</p>
                </li>
                <li>
                    <p><strong>Consentimiento: </strong>cuando haya dado su consentimiento para procesar sus Datos personales. Puede retirar su consentimiento en cualquier momento.</p>
                </li>
                <li>
                    <p><strong>Interés legítimo: </strong>procesamos sus Datos personales para brindarle nuestros Servicios, como para brindarle nuestra experiencia de usuario en línea, comunicarnos con usted, brindarle servicio al cliente, comercializar, analizar y mejorar nuestro negocio, y para proteger nuestros Servicios.</p>
                </li>
            </ul>
            <br />
            <h3>Limitaciones de edad</h3>
            <p>Nuestro Servicio está destinado a adultos mayores de 18 años. No recopilamos a sabiendas información de identificación personal de niños. Si usted es padre o tutor legal y cree que su hijo menor de 13 años nos ha proporcionado información, envíenos un correo electrónico o escríbanos a la dirección que figura al final de esta Política de privacidad. Marque sus consultas como "Solicitud de información de COPPA".</p>
            <br />
            <h3>Cambios a esta Política de Privacidad</h3>
            <p>Empleo Seguro puede cambiar esta Política de Privacidad de vez en cuando. Le animamos a visitar esta página para mantenerse informado. Si los cambios son importantes, podemos enviarle un aviso adicional a su dirección de correo electrónico o a través de nuestros Servicios. Su uso continuado de los Servicios indica su aceptación de la Política de Privacidad modificada.</p>
            <br />

            <h3>Almacenamiento de Información en los Estados Unidos</h3>
            <p>La información que mantenemos puede almacenarse tanto dentro como fuera de los Estados Unidos. Si vive fuera de los Estados Unidos, comprende y acepta que podemos transferir su información a los Estados Unidos y que es posible que las leyes estadounidenses no brinden el mismo nivel de protección que las de su país.</p>
            <br />
            <h3>Contáctenos</h3>
            <p>Si tiene preguntas, comentarios o inquietudes sobre esta Política de privacidad, puede contactarnos en:</p>
            <ul>
                <li>
                    <p>Caracas Venezuela,
                        Caracas, Distrito Capital 1060 Venezuela</p>
                </li>
                <li>
                    <p>https://empleoseguro.tech/#/acerca/contacto</p>
                </li>
                <li>
                    <p>kevindosmartinfenixzone@gmail.com</p>
                </li>
                <li>
                    <p>+584124585154</p>
                </li>
            </ul>
            <br />

        </div>
    )
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
            y por lo tanto no somos responsables de los <a href="https://plantillaterminosycondicionestiendaonline.com/" rel="noopener noreferrer">
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
                                privacidad se han generado en <a href="https://politicadeprivacidadplantilla.com/" rel="noopener noreferrer">
                politicadeprivacidadplantilla.com</a>.<br />
        </p>
        <p>
            Este sitio web cumple con los requisitos del California Consumer Privacy Act (CCPA). El CCPA otorga a los residentes de California ciertos derechos con respecto a sus datos personales. Si eres un residente de California, tienes derecho a solicitar acceso a tus datos personales, solicitar su eliminación y solicitar información sobre la forma en que se comparten tus datos personales. Para ejercer tus derechos de CCPA, por favor ponte en contacto con nosotros a través de los medios que aparecen en la sección de contacto de nuestro sitio web.
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
            <h4><strong>Condiciones de uso</strong></h4>
            <p>Empleo Seguro, como su nombre lo indica es un sitio web creado a fin de tener un empleo seguro para usted mismo y para su empleador, nuestra función principal orientar, motivar y enseñar a nuestro público en el ámbito laboral, disponemos de información que creemos que será útil para vosotros y consecuente para tu empleador, dicha información recogida de múltiples sitios web, libros reconocidos y basándonos en experiencia propia, como podremos ayudaros, inclusivamente os mantendremos informados sobre lo que pasa en el mundo relacionado con el trabajo, además disponemos de un formulario sencillo para llevaros a Google y buscar empleadores en tu zona. Hacemos énfasis, Empleo Seguro no ofrece un empleo a disposición ni mucho menos garantiza que vosotros encontréis dicho requerimiento propio, solo es una página informativa.</p>

            <h5>Estados Unidos</h5>

            <p>Los siguientes son términos y condiciones específicas para los usuarios en los Estados Unidos de nuestros sitios web y aplicaciones móviles:</p>

            <ol>
                <li>
                    <strong>Propiedad y uso del contenido:</strong> Todos los contenidos, información, imágenes, videos, gráficos, textos y otros materiales exhibidos están protegidos por las leyes de marcas registradas y derechos de autor. Estos materiales solo pueden ser utilizados para uso personal y no comercial de los usuarios. El uso comercial está prohibido sin previa autorización escrita de nuestra empresa.
                </li>
                <li>
                    <strong>Información de cuenta:</strong> Cada usuario es responsable de mantener la privacidad de su cuenta y cualquier actividad relacionada con ella. Cualquier uso no autorizado de una cuenta debe ser reportado inmediatamente. No nos hacemos responsables de las consecuencias de un uso no autorizado de una cuenta.
                </li>
                <li>
                    <strong>Propiedad intelectual:</strong> Todos los derechos de propiedad intelectual pertenecen a nuestra empresa. Los usuarios no tienen derecho a reproducir, modificar, distribuir, vender o usar el contenido con fines comerciales. Cualquier uso no autorizado de propiedad intelectual será sancionado legalmente.
                </li>
                <li>
                    <strong>Política de privacidad:</strong> Nuestra empresa tiene una política de privacidad que protege la información personal del usuario. Los usuarios deben leer y entender esta política antes de utilizar el sitio o la aplicación.
                </li>
                <li>
                    <strong>Responsabilidad limitada:</strong> No somos responsables de cualquier daño o perjuicio directo o indirecto que puedan causar los contenidos del sitio, incluyendo virus, pérdida de datos, interrupciones de servicio, retrasos en la transmisión de información, errores u omisiones o cualquier otro tipo de pérdida directa o indirecta.
                </li>
                <li>
                    <strong>Jurisdicción:</strong> Estos términos están sujetos a las leyes de los Estados Unidos. Si surge algún conflicto legal entre el usuario y nuestra empresa, se debe resolver de acuerdo con las leyes de los Estados Unidos y la jurisdicción de los tribunales federales y estatales de los Estados Unidos.
                </li>
                <li>
                    <p><strong>Modificaciones</strong>: Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento y sin previo aviso. Los usuarios deben verificar periódicamente cualquier cambio en los términos y condiciones.</p>
                </li>
                <li>
                    <p><strong>Cesión</strong>: No se permite la cesión o transferencia de los derechos otorgados por estos términos y condiciones ni del sitio web ni de la aplicación.</p>
                </li>
                <li>
                    <p><strong>Rescisión</strong>: Nos reservamos el derecho de rescindir cualquier cuenta en cualquier momento y sin previo aviso si consideramos que el usuario ha violado cualquiera de los términos y condiciones de uso del sitio. También nos reservamos el derecho de eliminar la información provista por el usuario en la plataforma sin previo aviso.</p>
                </li>
                <li>
                    <p><strong>Soporte al cliente</strong>: Para cualquier ayuda o soporte relacionado con el sitio o la aplicación, los usuarios pueden contactarnos por correo electrónico o por otras opciones de contacto que se proporcionen en el sitio web.</p>
                </li>
            </ol>
            <p>Al hacer uso de nuestro sitio web o nuestra aplicación, el usuario acepta automáticamente los términos y condiciones establecidos. Si el usuario no está de acuerdo con estos términos, lamentablemente no podrá utilizar nuestro sitio web o nuestra aplicación.</p>
        </div>
    )
}
const AboutUs = () => {
    return (
        <div className='mt-3' >
            <h4><strong>¿Quiénes somos?</strong></h4>
            <p>Es mucho más que un simple blog informativo. Nuestro objetivo principal es brindarte las herramientas y consejos necesarios para mejorar tu desempeño en el trabajo y alcanzar el éxito profesional que tanto anhelas. Sabemos que el mundo laboral puede ser complicado y abrumador, y es por eso que nos enfocamos en ofrecer información valiosa que puedas aplicar en tu día a día laboral.</p>
            <p>Nuestra amplia variedad de estrategias y tips han sido cuidadosamente seleccionados para que puedas ser más efectivo y productivo en el trabajo. Y eso no es todo: también contamos con una sección de noticias para que siempre estés actualizado sobre lo que sucede en el mundo laboral y puedas tomar decisiones informadas.</p>
            <p>En <strong>Empleo Seguro</strong> nos esforzamos por ofrecer contenido útil y relevante que te ayude a crecer tanto personal como profesionalmente. Nos tomamos muy en serio tu opinión, por lo que estamos en constante evolución e implementando nuevas secciones para que tu visita sea recurrente y enriquecedora.</p>
            <p>En resumen, nuestro objetivo es ayudarte a alcanzar tus metas laborales y proporcionarte el conocimiento y la confianza que necesitas para triunfar. Esperamos que nuestro contenido sea de tu agrado y que nos acompañes en esta aventura hacia el éxito profesional. ¡Bienvenido a <em>Empleo Seguro</em>!</p>
            <p>
                Ubicación: Venezuela, Caracas, Distrito Capital, La Castellana 1060
            </p>
        </div>
    )
}

const Cookiess = () => {

    return (
        <div className='mt-3' >
            <h4><strong>Cookies</strong></h4>
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
                    proporcione directamente <a href="https://noticiasvillarrealcf.es/" rel="noopener noreferrer">noticias</a>.
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
            <h4><strong>Contacto</strong></h4>
            <p>En <strong>Empleo Seguro</strong>, estamos comprometidos en brindarte el mejor servicio posible. Por eso, nos hemos asegurado de estar disponibles en diversas redes sociales, así como a través de correo electrónico y nuestro número de teléfono para cualquier consulta o inquietud que tengas. Creemos que la comunicación es fundamental para construir relaciones duraderas y satisfactorias con nuestros usuarios.</p>
            <p>Además, en <strong>Empleo Seguro</strong> valoramos mucho la opinión de nuestros usuarios. Creemos que sus comentarios y sugerencias son esenciales para poder mejorar y ofrecer un mejor servicio. Por ello, nos encantaría recibir cualquier consejo, crítica constructiva, sugerencia o reporte de errores que nos ayude a mejorar continuamente nuestro sitio web y brindarles una mejor experiencia. Nos tomamos muy en serio todas las opiniones y estamos siempre dispuestos a escucharlas.</p>
            <p>Ponemos a tu disposición diferentes medios para comunicarte con nosotros, como nuestras redes sociales, correo electrónico y número de teléfono. Estamos aquí para ayudarte y responder cualquier pregunta o inquietud que tengas. No dudes en contactarnos si necesitas ayuda en cualquier momento.</p>
            <p>En resumen, nuestro objetivo es brindarte la mejor experiencia posible en <strong>Empleo Seguro</strong>, y para ello, estamos siempre disponibles para recibir tus comentarios y sugerencias. Creemos que la comunicación es esencial para construir una relación duradera y satisfactoria con nuestros usuarios, y estamos dispuestos a escucharte en todo momento. ¡No dudes en ponerte en contacto con nosotros!</p>
            <ul>
                <li> <p><strong>Correo</strong>: <button href='#'>kevindosmartinfenixzone@gmail.com</button></p></li>
                <li> <p><strong>WhatsApp</strong>: <button href='#'>+57 311 2313082</button></p></li>
                <li> <p><strong>Instagram</strong>: <button href='https://www.instagram.com/empleoseguroes/' rel="noopener noreferrer">@empleoseguroes</button></p></li>
                <li> <p><strong>Facebook</strong>: <button href='https://www.facebook.com/vidasinmaduro/' rel="noopener noreferrer">@empleosegurosas</button></p></li>
            </ul>
        </div>
    )
}

export default About
