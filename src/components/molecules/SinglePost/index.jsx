import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useGetPosts";
import './SinglePost.css'

import BaseTemplate from "../../templates/BaseTemplate";
import { ShareButton } from "../../atoms/ShareButton";
import ParagraphPost from "../../atoms/ParagraphPost";
import { useParams } from "react-router-dom";
import { API } from "../../../utils/config";
import { fetchPostById } from "../../../utils/actions";
import { readingTime } from "../../../utils/functions";


const SinglePost = ({ data: datos }) => {

    const [data, setdata] = useState([])

    const { postId } = useParams()

    useEffect(() => {

        const response = fetchPostById(postId)
        
        setdata(response.data[0])


    }, [postId])

    return (
        <BaseTemplate mostViewed={datos}>

            <div className="card rounded-0 shadow bg-light">
               <div className="contenedor">
               <img loading='lazy' src={data['attributes']?.image} className="img-fluid" alt="imagen del post" />
                <a className="text-imagen" href={`https://www.freepik.es/autor/${data['attributes']?.image_autor}`} target="_blank">freepik image by: {data['attributes']?.image_autor}</a>
               </div>
               
                <article>
                    <h1 className="ps-3 mt-3">
                        {data?.attributes?.title}
                    </h1>

                    <ParagraphPost text={data?.attributes?.description} />
                </article>


                <div className="card-footer postFooter bg-dark mt-5 p-3 pe-0">
                    <div className='d-flex flex-row justify-content-between'>
                        <div className=" align-self-center">
                            Compartir post
                        </div>
                        <div className="row row-cols-3 gx-4 me-1">
                            <ShareButton type='facebook' />
                            <ShareButton type='twitter' />
                            <ShareButton type='whatsapp' />
                        </div>

                    </div>

                </div>
            </div>

        </BaseTemplate>
    )
}

export default SinglePost;