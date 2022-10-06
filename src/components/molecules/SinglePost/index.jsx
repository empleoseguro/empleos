import React from "react";
import './SinglePost.css'
import Twitter from '../../../images/twitter.svg'
import Facebook from '../../../images/facebook.svg'
import Instagram from '../../../images/instagram.svg'
import BaseTemplate from "../../templates/BaseTemplate";


const SinglePost = ({ title }) => {
    return (
        <BaseTemplate>
            <div className="">
                <div className="card rounded-0 shadow bg-light">
                    <img src={require('../../../images/trabajo3.webp')} className="img-fluid" alt="imagen del post" />

                    <div className="card-title titleSinglePost ps-3 mt-3">
                        My Firts Post!
                    </div>

                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero. <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.
                        . <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur dolor metus,
                        in semper purus tempus nec. Nunc porta maximus nisi eget tempus. Maecenas tellus ligula,
                        porttitor ut ligula vitae, porta malesuada libero.
                    </div>
                    <div className="card-footer postFooter bg-dark p-3 pe-0">
                        <div className="row pe-0">
                            <div className="col-4 align-self-center">
                                Compartir este post
                            </div>
                            <div className="col-2">
                                <img src={Twitter} alt="icono de twitter" className='socialIconsFooterPost' />
                            </div>
                            <div className="col-2">
                                <img src={Facebook} alt="icono de facebook" className='socialIconsFooterPost' />
                            </div>
                            <div className="col-2">
                                <img src={Instagram} alt="icono de instagram" className='socialIconsFooterPost' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </BaseTemplate>
    )
}

export default SinglePost;