import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    EmailShareButton,
} from 'react-share';

// ** react icons
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';

const SocialShareButton = ({ url, title }) => {

    const fontSize = '2rem';

    return (
        <div className='d-flex justify-content-between'>
            <FacebookShareButton url={url} quote={title} className='social-share-button' >
                <AiOutlineFacebook fontSize={fontSize} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <AiFillTwitterSquare fontSize={fontSize} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title}>
                <AiOutlineLinkedin fontSize={fontSize} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={title}>
                <AiOutlineWhatsApp fontSize={fontSize} />
            </WhatsappShareButton>
            <EmailShareButton url={url} subject={title} body="Check out this link:">
                <AiOutlineMail fontSize={fontSize} />
            </EmailShareButton>
        </div>
    );
};

export default SocialShareButton;
