// src/components/Inscripcion.js
import React, { useState } from 'react';
import styles from './.Inscripcion.module.css'; // Asegúrate de que la ruta sea correcta

const Inscripcion = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleAcceptTerms = () => {
        setTermsAccepted(!termsAccepted);
    };

    return (
        <section className={styles.contactBox} id='inscripcion'>
            <div className={`row no-gutters ${styles.bgDark}`}>
                <div className={`col-xl-5 col-lg-12 ${styles.registerBg}`}>
                    <div className={`position-absolute ${styles.testiomonial} p-4`}>
                        <h3 className="font-weight-bold text-light"></h3>
                        <p className="lead text-light"></p>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-12 d-flex">
                    <div className={`container align-self-center ${styles.p6}`}>
                        <h1 className="font-weight-bold mb-3">Formulario de Inscripción al Gimnasio</h1>

                        <form>
                            <h2>Información Personal</h2>
                            <label htmlFor="nombreCompleto">Nombre Completo:</label>
                            <input type="text" id="nombreCompleto" name="nombreCompleto" className="form-control" /><br /><br />
                            <label htmlFor="correoElectronico">Correo Electrónico:</label>
                            <input type="email" id="correoElectronico" name="correoElectronico" className="form-control" /><br /><br />
                            <label htmlFor="numeroTelefono">Número de Teléfono:</label>
                            <input type="tel" id="numeroTelefono" name="numeroTelefono" className="form-control" /><br /><br />
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-control" /><br /><br />

                            <h2>Información de Membresía</h2>
                            <label htmlFor="nuevoMiembro">¿Eres un nuevo miembro?:</label>
                            <select id="nuevoMiembro" name="nuevoMiembro" className="form-control">
                                <option value=""></option>
                                <option value="Sí">Sí</option>
                                <option value="No">No</option>
                            </select><br /><br />
                            <label htmlFor="comoTeEnteraste">¿Cómo te enteraste de nosotros?:</label>
                            <select id="comoTeEnteraste" name="comoTeEnteraste" className="form-control">
                                <option value=""></option>
                                <option value="Amigos/Familia">Amigos/Familia</option>
                                <option value="Redes Sociales">Redes Sociales</option>
                                <option value="Publicidad">Publicidad</option>
                                <option value="Otros">Otros</option>
                            </select><br /><br />

                            <h2>Selección de Clases y Membresía</h2>
                            <label htmlFor="clasesDisponibles">Clases Disponibles:</label>
                            <select id="clasesDisponibles" name="clasesDisponibles" className="form-control">
                                <option value=""></option>
                                <option value="Yoga">Yoga ($50)</option>
                                <option value="Crossfit">Crossfit ($75)</option>
                                <option value="Cardio">Cardio ($45)</option>
                            </select><br /><br />

                            <h2>Horarios de Clases</h2>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Día</th>
                                        <th>Clase</th>
                                        <th>Hora</th>
                                        <th>Seleccionar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lunes</td>
                                        <td>Cardio</td>
                                        <td>7:00 AM - 9:00 AM</td>
                                        <td><input type="checkbox" name="horario[]" value="Lunes - Cardio - 7:00 AM - 9:00 AM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Lunes</td>
                                        <td>Boxing</td>
                                        <td>2:00 PM - 4:00 PM</td>
                                        <td><input type="checkbox" name="horario[]" value="Lunes - Boxing - 2:00 PM - 4:00 PM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Martes</td>
                                        <td>Yoga</td>
                                        <td>7:00 AM - 9:00 AM</td>
                                        <td><input type="checkbox" name="horario[]" value="Martes - Yoga - 7:00 AM - 9:00 AM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Martes</td>
                                        <td>Power Fitness</td>
                                        <td>7:00 AM - 9:00 AM</td>
                                        <td><input type="checkbox" name="horario[]" value="Martes - Power Fitness - 7:00 AM - 9:00 AM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Martes</td>
                                        <td>Boxing</td>
                                        <td>11:00 AM - 2:00 PM</td>
                                        <td><input type="checkbox" name="horario[]" value="Martes - Boxing - 11:00 AM - 2:00 PM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Martes</td>
                                        <td>Power lifting</td>
                                        <td>3:00 PM - 6:00 PM</td>
                                        <td><input type="checkbox" name="horario[]" value="Martes - Power lifting - 3:00 PM - 6:00 PM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Miércoles</td>
                                        <td>Boxing</td>
                                        <td>8:00 AM - 9:00 AM</td>
                                        <td><input type="checkbox" name="horario[]" value="Miércoles - Boxing - 8:00 AM - 9:00 AM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Miércoles</td>
                                        <td>Aerobic</td>
                                        <td>11:30 AM - 3:30 PM</td>
                                        <td><input type="checkbox" name="horario[]" value="Miércoles - Aerobic - 11:30 AM - 3:30 PM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Jueves</td>
                                        <td>Aerobic</td>
                                        <td>8:00 AM - 9:00 AM</td>
                                        <td><input type="checkbox" name="horario[]" value="Jueves - Aerobic - 8:00 AM - 9:00 AM" /></td>
                                    </tr>
                                    <tr>
                                        <td>Jueves</td>
                                        <td>Cardio</td>
                                        <td>6:00 PM - 9:00 PM</td>
                                        <td><input type="checkbox" name="horario[]" value="Jueves - Cardio - 6:00 PM - 9:00 PM" /></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className={styles.terminos}>
                                <h2>Términos y Condiciones</h2>
                                <label>
                                    <input type="checkbox" checked={termsAccepted} onChange={handleAcceptTerms} /> He leído y acepto los términos y condiciones.
                                </label>
                            </div>
                            <button type="submit" className={`btn btn-danger`} disabled={!termsAccepted}>Inscribirse</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inscripcion;
