import "../css/componentes.css";
/*import logo from '../assets/img/webpack-logo.png';*/

export const saludo = ( name ) => {
    console.log('Creando H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${name} !`;
    document.body.append( h1 );

    //IMG
    /*const img = document.createElement('img');
    img.src = logo;
    document.body.append(img);*/

}