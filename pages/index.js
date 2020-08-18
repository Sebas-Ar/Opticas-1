import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';

const index = () => {

  const [angulo, setAngulo] = useState(0)
  const [numMedios, setnumMedios] = useState(0)
  const [medios, setMedios] = useState([])
  const [angulos, setangulos] = useState([])
  const [moveX, setMoveX] = useState([])
  const [distancia, setDistancia] = useState([])

  const [indice, setIndice] = useState([1,1,1,1,1,1,1,1,1,1])


  const changeAngulo = (e) => {
    setAngulo(e.target.value)
  }

  const changeNumMedios = (e) => {
    setnumMedios(e.target.value)
  }

  const changeSelect = e => {
    let num = e.target.name;
    let value = parseFloat(e.target.value);
    let vector = [];
    vector = [indice[0], indice[1], indice[2], indice[3], indice[4], indice[5], indice[6], indice[7], indice[8], indice[9]];
    vector[num] = value;
    setIndice(vector);
  }

  const agregarMedios = (e) => {
    e.preventDefault()
    var vector = [];
    for (var i = 0; i < numMedios; i++) {
      vector[i] = {
        name :"Medio-"+(i+1),
        number: i,
      }
    }
    setMedios(vector)
  }
  
  useEffect(() => {
    if(angulo>90) {
      alert('El angulo no puede exeder los 90°')
      setAngulo(0)
    }
  }, [angulo]);

  useEffect(() => {
    if (numMedios>10) {
      alert('No puede haber mas de 10 medios')
      setnumMedios(0);
    }
  }, [numMedios])

  useEffect(() => {
    
    let ang1 = Math.asin(Math.sin(angulo * (Math.PI / 180)) * (1 / indice[0])) * (180 / Math.PI)
    let ang2 = Math.asin(Math.sin(ang1 * (Math.PI / 180)) * (indice[0] / indice[1])) * (180 / Math.PI)
    let ang3 = Math.asin(Math.sin(ang2 * (Math.PI / 180)) * (indice[1] / indice[2])) * (180 / Math.PI)
    let ang4 = Math.asin(Math.sin(ang3 * (Math.PI / 180)) * (indice[2] / indice[3])) * (180 / Math.PI)
    let ang5 = Math.asin(Math.sin(ang4 * (Math.PI / 180)) * (indice[3] / indice[4])) * (180 / Math.PI)
    let ang6 = Math.asin(Math.sin(ang5 * (Math.PI / 180)) * (indice[4] / indice[5])) * (180 / Math.PI)
    let ang7 = Math.asin(Math.sin(ang6 * (Math.PI / 180)) * (indice[5] / indice[6])) * (180 / Math.PI)
    let ang8 = Math.asin(Math.sin(ang7 * (Math.PI / 180)) * (indice[6] / indice[7])) * (180 / Math.PI)
    let ang9 = Math.asin(Math.sin(ang8 * (Math.PI / 180)) * (indice[7] / indice[8])) * (180 / Math.PI)
    let ang10 = Math.asin(Math.sin(ang9 * (Math.PI / 180)) * (indice[8] / indice[9])) * (180 / Math.PI)
    
    let vector = [
      ang1,
      ang2,
      ang3,
      ang4,
      ang5,
      ang6,
      ang7,
      ang8,
      ang9,
      ang10,
    ]
    setangulos(vector)

    let mov1 = Math.tan(ang1 * (Math.PI / 180)) * 100;
    let mov2 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100);
    let mov3 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100);
    let mov4 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100);
    let mov5 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100);
    let mov6 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100) + (Math.tan(ang6 * (Math.PI / 180)) * 100);
    let mov7 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100) + (Math.tan(ang6 * (Math.PI / 180)) * 100) + (Math.tan(ang7 * (Math.PI / 180)) * 100);
    let mov8 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100) + (Math.tan(ang6 * (Math.PI / 180)) * 100) + (Math.tan(ang7 * (Math.PI / 180)) * 100) + (Math.tan(ang8 * (Math.PI / 180)) * 100);
    let mov9 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100) + (Math.tan(ang6 * (Math.PI / 180)) * 100) + (Math.tan(ang7 * (Math.PI / 180)) * 100) + (Math.tan(ang8 * (Math.PI / 180)) * 100) + (Math.tan(ang9 * (Math.PI / 180)) * 100);
    let mov10 = (Math.tan(ang1 * (Math.PI / 180)) * 100) + (Math.tan(ang2 * (Math.PI / 180)) * 100) + (Math.tan(ang3 * (Math.PI / 180)) * 100) + (Math.tan(ang4 * (Math.PI / 180)) * 100) + (Math.tan(ang5 * (Math.PI / 180)) * 100) + (Math.tan(ang6 * (Math.PI / 180)) * 100) + (Math.tan(ang7 * (Math.PI / 180)) * 100) + (Math.tan(ang8 * (Math.PI / 180)) * 100) + (Math.tan(ang9 * (Math.PI / 180)) * 100) + (Math.tan(ang10 * (Math.PI / 180)) * 100);

    let vector2 = [
      mov1,
      mov2,
      mov3,
      mov4,
      mov5,
      mov6,
      mov7,
      mov8,
      mov9,
      mov10,
    ]

    setMoveX(vector2)

    let dis1 = 100 / Math.cos(ang1 * (Math.PI / 180));
    let dis2 = 100 / Math.cos(ang2 * (Math.PI / 180));
    let dis3 = 100 / Math.cos(ang3 * (Math.PI / 180));
    let dis4 = 100 / Math.cos(ang4 * (Math.PI / 180));
    let dis5 = 100 / Math.cos(ang5 * (Math.PI / 180));
    let dis6 = 100 / Math.cos(ang6 * (Math.PI / 180));
    let dis7 = 100 / Math.cos(ang7 * (Math.PI / 180));
    let dis8 = 100 / Math.cos(ang8 * (Math.PI / 180));
    let dis9 = 100 / Math.cos(ang9 * (Math.PI / 180));
    let dis10 = 100 / Math.cos(ang10 * (Math.PI / 180));

    let vector3 = [
      dis1,
      dis2,
      dis3,
      dis4,
      dis5,
      dis6,
      dis7,
      dis8,
      dis9,
      dis10,
    ]

    setDistancia(vector3)
  }, [angulo, indice])


  return (
    <div className="content">
      <div className="img">
        <img src="/img/indice.jpeg" alt=""/>
        <br/><br/>
        <p>Ancho de cada uno de los medios: 100 mm *</p>
      </div>
      <br/>
      <h1>LABORATORIO 1 <br/> COMUNICACIONES OPTICAS</h1>
      <br/>
      <div className="panel">
        <input autoFocus onChange={changeAngulo} type="number" placeholder="Angulo Inicial" value={angulo ? angulo : ''}/>
        <p>Maximo 90° *</p>
        <form>
          <input onChange={changeNumMedios} type="number" placeholder="Numero de Medios" value={ numMedios ? numMedios : '' }/>
          <p>Maximo 10 medios *</p>
          <button onClick={agregarMedios}>Agregar Medios</button>
        </form>
      </div>
      <br/>

      <br/>
      <br/>
      <div className="indice">
        <div className="cuadricula">
          <div className="primerAngulo linea"></div>
        </div>
      </div>

      {
        medios.map(med => (<div className="indice">
          <div key={med.name} className="cuadricula">
            <div className="angulo linea" id={med.name}>{angulos[med.number].toFixed(2)}°</div>
          </div>
          <label> {med.name} <br/>
            <select name={med.number} onChange={changeSelect}>
              <option value={1.0000}>Vacuum</option>
              <option value={1.0002}>Air</option>
              <option value={1.333}>Water</option>
              <option value={1.452}>Fused Silica</option>
              <option value={1.517}>Crown Glass</option>
              <option value={1.655}>Dense Flint Glass</option>
              <option value={2.421}>Diamond</option>
              <option value={1.360}>Ethyl Alcohol</option>
              <option value={1.405}>Silicone</option>
            </select>
             {"distancia recorrida: "+distancia[med.number].toFixed(2) + "mm"}
          </label>
        </div>
        ))
      }

      <div className="cuadriculafin">
      </div>

      <Footer />

      <style jsx>{`

        :global(body) {
          background: linear-gradient(0deg, rgba(6,21,62,0.43461134453781514) 0%, rgba(226,223,255,1) 100%);
          height: 100%;
          padding: 0;
          margin: 0;
        }

        * {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .content {
          position: relative;
        }

        .indice {
          display: grid;
          grid-template-columns: 2fr 1fr;
        }

        form {
          display: grid;
        }

        label {
          align-self: center;
          justify-self: center;
          display: grid;
          justify-items: center;
        }

        .img {
          position: absolute;
          height: 150px;
          right: 50px;
          top: 50px;
          border: 2px solid rgb(11, 67, 99);
          box-shadow: 5px 5px 5px -2px #333333aa;
        }

        img {
          height: 150px;
        }

        h1 {
          text-align: center;
          color: #333;
        }  

        p {
          font-size: 12px;
          text-align: center;
          margin-top: -5px;
          color: #333333cc;
          font-weight: 500;
        }

        input {
          border-radius: 20px;
          padding: 10px;
          border: 1px solid #33333377;
          outline: none;
          margin: 10px 0;
          text-align: center;
          box-shadow: 5px 5px 5px -3px #333333aa;
        }

        input::placeholder {
          text-align: center;
        }

        select {
          border-radius: 20px;
          padding: 5px;
          outline: none;
          margin: 5px;
          box-shadow: 5px 5px 5px -3px #333333aa;
        }

        button {
          border: none;
          outline: none;
          border-radius: 20px;
          padding: 10px;
          margin: 10px;
          background: rgb(51, 109, 143);
          color: white;
          cursor: pointer;
          transition: background .5s;
          box-shadow: 5px 5px 5px -3px #333333aa;
        }

        button:hover {
          background: rgb(64, 136, 177);
        }

        .panel {
          display: grid;
          width: 200px;
          margin: auto;
        }

        .cuadricula {
          justify-self: flex-end;
          height: 100px;
          width: 600px;
          border-bottom: 1px solid black;
          display: grid;
          justify-items: center;
        }

        .cuadriculafin {
          margin: auto;
          height: 100px;
          width: 300px;
          display: grid;
          justify-items: center;
        }

        .linea {
          width: 1px;
        }

        .primerAngulo {
          height: 100px;
          transform-origin: bottom;
          background: red;
          transform: rotate(${angulo}deg);
          transition: transform .5s;
        }

        .angulo {
          transform-origin: top;
          background: blue;
          transition: transform .5s;
          
        }

        #Medio-1 {
          transform: rotate(${angulos[0]}deg);
          height: ${distancia[0]}px;
        }

        #Medio-2 {
          transform: translateX(-${moveX[0]}px) rotate(${angulos[1]}deg);
          height: ${distancia[1]}px;
        }

        #Medio-3 {
          transform: translateX(-${moveX[1]}px) rotate(${angulos[2]}deg);
          height: ${distancia[2]}px;
        }

        #Medio-4 {
          transform: translateX(-${moveX[2]}px) rotate(${angulos[3]}deg);
          height: ${distancia[3]}px;
        }

        #Medio-5 {
          transform: translateX(-${moveX[3]}px) rotate(${angulos[4]}deg);
          height: ${distancia[4]}px;
        }

        #Medio-6 {
          transform: translateX(-${moveX[4]}px) rotate(${angulos[5]}deg);
          height: ${distancia[5]}px;
        }

        #Medio-7 {
          transform: translateX(-${moveX[5]}px) rotate(${angulos[6]}deg);
          height: ${distancia[6]}px;
        }

        #Medio-8 {
          transform: translateX(-${moveX[6]}px) rotate(${angulos[7]}deg);
          height: ${distancia[7]}px;
        }

        #Medio-9 {
          transform: translateX(-${moveX[7]}px) rotate(${angulos[8]}deg);
          height: ${distancia[8]}px;
        }

        #Medio-10 {
          transform: translateX(-${moveX[8]}px) rotate(${angulos[9]}deg);
          height: ${distancia[9]}px;
        }

      `}</style>
    </div>
  )
}

export default index
