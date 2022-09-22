import { useForm } from 'react-hook-form';
import styles from './contactForm.module.css';

function ContactForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.container} id="contact">
            <h2 className={styles.title}>Contacto</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.subcontainer}>
                    <label htmlFor="company">Nombre o empresa</label>
                    <input className={styles.box} type="text" id='company' {...register('name')}/>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="mail">Correo de contacto</label>
                    <input className={styles.box} type="email" id='mail' {...register('email')}/>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="subject">¿Qué tema deseas tratar?</label>
                    <select className={styles.box} id="subject" {...register('subject')}>
                        <option value="freelance">Trabajo independiente</option>
                        <option value="jobOffer">Oferta laboral</option>
                        <option value="information" selected>Información</option>
                    </select>
                </div>

                <div className={styles.subcontainer}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea className={styles.boxMessage} id='message' {...register('message')}></textarea>
                </div>

                <input className={styles.button} type="submit" value="Enviar"/>
            </form>
        </div>
    );
};

export default ContactForm;