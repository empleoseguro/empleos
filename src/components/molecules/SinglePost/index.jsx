import React from "react";
import './SinglePost.css'

import BaseTemplate from "../../templates/BaseTemplate";
import ButtonIcon from "../../atoms/ButtonIcon";


const SinglePost = ({ title }) => {
    return (
        <BaseTemplate>

            <div className="card rounded-0 shadow bg-light">
                <img src={require('../../../images/trabajo3.webp')} className="img-fluid" alt="imagen del post" />

                <div className="card-title titleSinglePost ps-3 mt-3">
                    My Firts Post!
                </div>

                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.</p><br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.
                        .</p><br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.</p>
                </div>
                <div className="card-footer postFooter bg-dark p-3 pe-0">
                    <div className='d-flex flex-row justify-content-between'>
                        <div className=" align-self-center">
                            Compartir post
                        </div>
                        <div className="d-flex flex-row">
                            <div className="me-4">
                                <ButtonIcon icon='twitter' />
                            </div>
                            <div className="me-4">
                                <ButtonIcon icon='facebook' />
                            </div>
                            <div className="me-4">
                                <ButtonIcon icon='instagram' />

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </BaseTemplate>
    )
}

export default SinglePost;