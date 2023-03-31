import React, { useEffect, useState } from "react";
import './SinglePost.css'
import ParagraphPost from "../../atoms/ParagraphPost";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../../../utils/actions";
import PostImage from "../../atoms/PostImage/PostImage";
import moment from "moment";
import Sidebar from "../Sidebar";
import Whatsapp from '../../../images/whatsapp.svg'
import Facebook from '../../../images/facebook.svg'
import Twitter from '../../../images/twitter.svg'
import { readingTime, scrollToTop } from "../../../utils/functions";
import AnuncioText from "../../atoms/AnuncioTest/AnuncioText";

const SinglePost = ({ data: datos }) => {

    const [data, setdata] = useState([])
    const { postId } = useParams()
    scrollToTop()
    useEffect(() => {
        const response = fetchPostById(postId)
        setdata(response.data[0]['attributes'])


    }, [postId, datos])

    const url = `https://empleoseguro.tech/#/post/${postId}`


    return (
        <div className="card rounded-0 shadow bg-light">
            <article>
                <div className="d-flex container-title py-4 px-sm-5">
                    <div className="container d-flex  justify-content-between flex-column flex-sm-row">
                        <div className="d-flex flex-column justify-content-between">
                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb ">
                                    <li className="breadcrumb-item fw-bold">
                                        <Link to="/" style={{ textDecoration: 'none' }}>Inicio</Link>
                                    </li>
                                    <li className="breadcrumb-item active fw-bold" aria-current="page">
                                        Post
                                    </li>
                                </ol>
                            </nav>
                            <div className="d-flex align-items-center h-auto">
                                <h1 className="">
                                    {data?.title}
                                </h1>
                            </div>
                            <div className="h-auto row row-cols-3 w-100">
                                <div>{data?.autor}</div>
                                <div>{moment(data?.publishedAt).format('dddd, MMMM Do YYYY, h a')}</div>
                                <div>Lectura {readingTime(data?.description)}m</div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <PostImage />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row mt-3 justify-content-center">
                    <div className="d-flex flex-column-reverse  flex-sm-row justify-content-center">
                        <div className="w-auto bg-light mb-2 ms-sm-3"><Sidebar mostViewed={datos} /></div>
                        <div className="w-auto bg-light me-sm-5 ms-sm-5 ">
                            <ParagraphPost text={data?.description} />
                            <div className="postFooter mt-1 pt-2 pe-0">
                                <div className='d-flex flex-row justify-content-between'>
                                    <div className=" align-self-center text-dark">
                                        Compartir post
                                    </div>
                                    <div className="row row-cols-3 gx-4 me-1">

                                        <img src={Whatsapp} loading="lazy" alt="icon-share" style={{ width: '60px', height: '60px' }}
                                            className="cursor-pointer"
                                            onClick={() => shareOnWhatsApp(url, data?.title)}
                                        />

                                        <img src={Twitter} loading="lazy" alt="icon-share" style={{ width: '60px', height: '60px' }}
                                            className="cursor-pointer"
                                            onClick={() => shareOnTwitter(url, data?.title)}
                                        />
                                        <img src={Facebook} loading="lazy" alt="compartir post de empleo seguro en facebook"
                                            className="cursor-pointer"
                                            onClick={() => shareOnFacebook(url)}
                                            style={{ width: '60px', height: '60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex mx-sm-5" style={{ width: '380px', height: '400px' }}>
                        <AnuncioText />
                    </div>
                </div>
            </article>
        </div>
    )
}

function shareOnFacebook(url) {

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}



function shareOnTwitter(url, text) {
    // Abre una ventana emergente para compartir el enlace en Twitter
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), 'Compartir en Twitter', 'width=600,height=400');
}

function shareOnWhatsApp(url, text) {
    // Genera el enlace de WhatsApp con la URL y el texto a compartir
    var message = encodeURIComponent(text) + '%0A' + encodeURIComponent(url);
    var whatsappUrl = 'https://api.whatsapp.com/send?text=' + message;

    // Abre una ventana emergente para compartir el enlace en WhatsApp
    window.open(whatsappUrl, 'Compartir en WhatsApp', 'width=600,height=400');
}

export default SinglePost;