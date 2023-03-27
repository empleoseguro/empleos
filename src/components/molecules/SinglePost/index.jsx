import React, { useEffect, useState } from "react";
import './SinglePost.css'
import BaseTemplate from "../../templates/BaseTemplate";
import { ShareButton } from "../../atoms/ShareButton";
import ParagraphPost from "../../atoms/ParagraphPost";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../../../utils/actions";
import PostImage from "../../atoms/PostImage/PostImage";
import moment from "moment";
import { readingTime } from "../../../utils/functions";
import Sidebar from "../Sidebar";
import Whatsapp from '../../../images/whatsapp.svg'
import Facebook from '../../../images/facebook.svg'
import Twitter from '../../../images/twitter.svg'

const SinglePost = ({ data: datos }) => {

    const [data, setdata] = useState([])
    const { postId } = useParams()

    useEffect(() => {
        const response = fetchPostById(postId)
        setdata(response.data[0]['attributes'])




    }, [postId])


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
                                    <div>{moment(data?.publishedAt).format('MMM Do YYYY')}</div>

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

                                <div className="card-footer postFooter bg-dark mt-5 p-3 pe-0">
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className=" align-self-center">
                                            Compartir post
                                        </div>
                                        <div className="row row-cols-3 gx-4 me-1">
                                            <img src={Whatsapp} loading="lazy" alt="icon-share"  style={{width:'60px', height:'60px'}}/>
                                            <img src={Twitter} loading="lazy" alt="icon-share"  style={{width:'60px', height:'60px'}}/>
                                            <img src={Facebook} loading="lazy" alt="icon-share"  style={{width:'60px', height:'60px'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border  mx-sm-5" style={{ width: '380px', height: '400px' }}></div>
                    </div>
                </article>

            </div>
    )
}

export default SinglePost;