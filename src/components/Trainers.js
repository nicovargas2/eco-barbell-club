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
                <div class="card">
                    <h1>Enzo Escobar</h1>
                    <img class="imagenPerfil" src='../images/EnzoEscobar.jpeg' alt='Jeremias Olmedo'></img>
                    <p className="title"> Socio Fundador</p>
                    <p>Edad: </p>
                    <p>Trayectoria: </p>
                    <p>Estudios: Profesor de educación Física</p>
                    <p>Contacto: </p>
                    <a href="https://www.instagram.com/enzo.xx4/"><i class='fab fa-instagram' /></a>
                </div>

                <div class="card">
                    <h1>Ema Cascallar</h1>
                    <img class="imagenPerfil" src='../images/EmaCascallar.jpeg' alt='Ema Cascallar'></img>
                    <p className="title"> Socio Fundador, Atleta de Pitbull Barbel Club</p>
                    <p>Edad: </p>
                    <p>Especialidad: Conditioning - Strength</p>
                    <p>Estudios: Profesor de educación Física</p>
                    <p>Contacto: </p>
                    <a href="https://www.instagram.com/emacascallar/"><i class='fab fa-instagram' /></a>
                </div>

                <div class="card">
                    <h1>Jeremias Olmedo</h1>
                    <img class="imagenPerfil" src='../images/JeremiasOlmedo.jpeg' alt='Jeremias Olmedo'></img>
                    <p className="title"> Socio Fundador, Atleta de Pitbull Barbel Club</p>
                    <p>Edad: </p>
                    <p>Especialidad: Strength</p>
                    <p>Estudios: Profesor de Educación Física </p>
                    <p>Contacto: +549-11-3205-1512</p>
                    <a href="https://www.instagram.com/olmedo_jremias/"><i class='fab fa-instagram' /></a>
                </div>
            </div>
        </>
    );
}

export default Trainers;