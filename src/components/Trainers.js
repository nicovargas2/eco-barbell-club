import React from 'react';
import '../App.css';
import './Trainers.css';

function Trainers() {
    return (
        <>
            <div className='Trainers-container'>
                <div className='TrainersTitle'>
                    <h1>Entrenadores</h1>
                </div>
                <div className="card">
                    <h1>Enzo Escobar</h1>
                    <img class="imagenPerfil" src='../images/EnzoEscobar.jpeg' alt='Jeremias Olmedo'></img>
                    <p className="title"> Socio Fundador</p>
                    <p>Edad: </p>
                    <p>Trayectoria: </p>
                    <p>Estudios: Profesor de educación Física</p>
                    <p>Contacto: &nbsp;&nbsp;
                    <a href="https://wa.me/+5491132051512?text=hola"  target='_blank' rel="noreferrer"><i class='fab fa-whatsapp' /></a>&nbsp;&nbsp;
                    <a href="https://www.instagram.com/enzo.xx4/" target='_blank' rel="noreferrer"><i class='fab fa-instagram' /></a></p>
                </div>

                <div className="card">
                    <h1>Ema Cascallar</h1>
                    <img class="imagenPerfil" src='../images/EmaCascallar.jpeg' alt='Ema Cascallar'></img>
                    <p className="title"> Socio Fundador, Atleta de Pitbull Barbell Club</p>
                    <p>Edad: </p>
                    <p>Especialidad: Acondicionamiento, Fuerza </p>
                    <p>Estudios: Profesor de educación Física</p>
                    <p>Contacto: &nbsp;&nbsp;
                    <a href="https://wa.me/+5491132051512?text=hola" target='_blank' rel="noreferrer"><i class='fab fa-whatsapp' /></a>&nbsp;&nbsp;
                    <a href="https://www.instagram.com/emacascallar/" target='_blank' rel="noreferrer"><i class='fab fa-instagram' /></a></p>
                </div>

                <div className="card">
                    <h1>Jeremias Olmedo</h1>
                    <img class="imagenPerfil" src='../images/JeremiasOlmedo.jpeg' alt='Jeremias Olmedo'></img>
                    <p className="title"> Socio Fundador, Atleta de Pitbull Barbell Club</p>
                    <p>Edad: </p>
                    <p>Especialidad: Acondicionamiento, Fuerza </p>
                    <p>Estudios: Profesor de Educación Física </p>
                    <p>Contacto: &nbsp;&nbsp;
                    <a href="https://wa.me/+5491132051512?text=hola" target='_blank' rel="noreferrer"><i class='fab fa-whatsapp' /></a>&nbsp;&nbsp;
                    <a href="https://www.instagram.com/olmedo_jremias/" target='_blank' rel="noreferrer"><i class='fab fa-instagram' /></a></p>
                </div>
            </div>
        </>
    );
}

export default Trainers;