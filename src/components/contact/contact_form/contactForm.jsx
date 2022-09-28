import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const navigate = useNavigate

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm("service_oegagkw", "template_bl13n9t", event.target, "oafmxIG_22WznoJL0")
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });

        Swal.fire({
            title: "Gracias por tu mensaje, en breve me pondre en contacto contigo :)",
            icon: "success"
        }).then(response => {
            if (response) {
                document.getElementById("company").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                navigate("/home");
            }
        });
    };

    return (
        <div className={styles.container} id="contact">
            <h2 className={styles.title}>Contacto</h2>
            <form onSubmit={sendEmail}>
                <div className={styles.subcontainer}>
                    <label htmlFor="company">Nombre o empresa</label>
                    <input className={styles.box} name="name" type="text" id='company' required/>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="mail">Correo de contacto</label>
                    <input className={styles.box} name="email" type="text" id='mail' required/>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="subject">¿Qué tema deseas tratar?</label>
                    <select className={styles.box} name="subject" id="subject" required>
                        <option value=" " disabled selected></option>
                        <option value="information">Información</option>
                        <option value="jobOffer">Oferta laboral</option>
                        <option value="freelance">Trabajo independiente</option>
                    </select>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea className={styles.boxMessage} name="message" id='message' required></textarea>
                </div>

                <input className={styles.button} type="submit" value="Enviar"/>
            </form>
        </div>
    );
};

export default ContactForm;
