import React, { useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';

import { socialsData } from '../data/socialsData';
import { contactsData } from '../data/contactsData';
import ContactImg from '../assets/svg/contact.svg';

function Contact() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.formspreeAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className='mx-auto min-h-screen flex flex-col md:flex-row items-center justify-start relative' id="contact">
            <img
                src={ContactImg}
                alt='contacts'
                className='hidden md:block absolute right-0 bottom-0 w-280 pointer-events-none'/>

            <div className='md:w-3/4'>
                <div className='p-8'>
                    <h1 className='text-violet-400 text-4xl font-bold mb-2.5 text-center'>Contact</h1>
                    <div className='flex flex-col md:flex-row items-start justify-start w-full'>
                        <div className='md:flex-1 w-full'>
                            <form
                                onSubmit={handleContactForm}
                                className='flex flex-col items-start justify-evenly w-full'>

                                <div className='w-full mb-2'>
                                    <label
                                        htmlFor='Name'
                                        className='font-semibold text-0.9rem px-5 py-1 transform translate-x-1/4 inline-flex'>
                                        Name
                                    </label>
                                    <input
                                        placeholder='John Doe'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='Name'
                                        className='form-input border-4 bg-[#FFFBF9] border-violet-300 focus:border-violet-400 focus:outline-none h-50px px-7 py-7 rounded-lg w-full resize-none'/>
                                </div>

                                <div className='w-full mb-2'>
                                    <label
                                        htmlFor='Email'
                                        className='font-semibold text-0.9rem px-5 py-1 transform translate-x-1/4 inline-flex'>
                                        Email
                                    </label>
                                    <input
                                        placeholder='John@doe.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='Email'
                                        className='form-input border-4 bg-[#FFFBF9] border-violet-300 focus:border-violet-400 focus:outline-none h-50px px-7 py-7 rounded-lg w-full resize-none'/>
                                </div>

                                <div className='w-full mb-2'>
                                    <label
                                        htmlFor='Message'
                                        className='font-semibold text-0.9rem px-5 py-1 transform translate-x-1/4 inline-flex'>
                                        Message
                                    </label>
                                    <textarea
                                        placeholder='Type your message....'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type='text'
                                        name='Message'
                                        className='form-message border-4 bg-[#FFFBF9] border-violet-300 focus:border-violet-400 focus:outline-none h-150px px-7 py-7 rounded-lg w-full resize-none'/>
                                </div>

                                <div className='w-1/2 mx-auto'>
                                    <button type='submit'
                                            className='w-full bg-violet-400 text-white hover:bg-pink-300 transform hover:scale-105 transition-transform px-4 py-2 rounded-lg font-semibold flex items-center justify-center'>
                                        {!success ? (
                                            <>
                                                <span>{'Send '}</span>
                                                <span className={`send-icon ${success ? 'hidden' : ''}`} 
                                                      style={{ animation: !success ? 'initial' : 'fly 0.8s linear both' }}>
                                                    <AiOutlineSend />
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{'Sent '}</span>
                                                <span className='success-icon inline-flex' 
                                                      style={{ opacity: !success ? '0' : '1' }}>
                                                    <AiOutlineCheckCircle />
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>

                            </form>

                            <Snackbar
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                open={open}
                                autoHideDuration={4000}
                                onClose={handleClose}>
                                <SnackbarContent
                                    action={
                                        <React.Fragment>
                                            <IconButton
                                                size='small'
                                                aria-label='close'
                                                color='inherit'
                                                onClick={handleClose}>
                                                <CloseIcon fontSize='small'/>
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                    message={errMsg}/>
                            </Snackbar>
                        </div>

                        <div className='md:flex md:w-1/2 md:mt-1.2rem mt-5'>
                            <div className='contacts-details flex flex-col items-center justify-evenly w-full pl-7'>
                                <a href={`mailto:${contactsData.email}`}
                                   className='personal-details flex items-center justify-start w-full mb-2.5'>
                                    <div className='detailsIcon bg-violet-400 text-white p-2 hover:bg-pink-300 rounded-full font-extrabold transform hover:scale-105 transition-transform w-45px h-45px'>
                                        <FiAtSign/>
                                    </div>
                                    <p className='ml-1.5 text-18px font-medium break-words'>
                                        {contactsData.email}
                                    </p>
                                </a>

                                <a href={`tel:${contactsData.phone}`}
                                   className='personal-details flex items-center justify-start w-full mb-2.5'>
                                    <div className='detailsIcon bg-violet-400 text-white p-2 hover:bg-pink-300 rounded-full font-extrabold transform hover:scale-105 transition-transform w-45px h-45px'>
                                        <FiPhone/>
                                    </div>
                                    <p className='ml-1.5 text-18px font-medium break-words'>
                                        {contactsData.phone}
                                    </p>
                                </a>

                                <div className='socialmedia-icons w-90% flex flex-wrap items-center justify-center mt-4rem'>
                                    {socialsData.github && (
                                        <a href={socialsData.github}
                                           target='_blank'
                                           rel='noreferrer'
                                           className='socialIcon m-2 bg-violet-400 text-white p-2 hover:bg-pink-300 rounded-full font-extrabold transform hover:scale-105 transition-transform w-45px h-45px'>
                                            <FaGithub aria-label='GitHub'/>
                                        </a>
                                    )}

                                    {socialsData.linkedIn && (
                                        <a href={socialsData.linkedIn}
                                           target='_blank'
                                           rel='noreferrer'
                                           className='socialIcon bg-violet-400 text-white p-2 hover:bg-pink-300 rounded-full font-extrabold transform hover:scale-105 transition-transform w-45px h-45px'>
                                            <FaLinkedinIn aria-label='LinkedIn'/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
