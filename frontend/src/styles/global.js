import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
    margin: 0;
    padding:0;
    font-family: 'Mukta', 'Helvetica', 'Arial', sans-serif;
}

a{
    text-decoration: none;
    color: rgb(128, 128, 128);
}

/* content que contem os formulários */
.content{
  width: 500px;
  margin: 0px auto;
  position: relative;	
}

/* formatando o cabeçalho dos formulários */
h1{
  font-size: 2.2rem;
  color: #069356;
  padding: 10px 0;
  font-family: 'Mukta', 'Helvetica', 'Arial', sans-serif;
  font-weight: 550;
  text-align: center;
  padding-bottom: 1.5rem;
}
h1:after{
  content: ' ';
  display: block;
  width: 100%;
  height: 4px;
  margin-top: .25rem;
  background: -webkit-linear-gradient(left, rgba(6, 126, 147,0) 0%,rgba(6, 147, 86, 1) 20%,rgba(147,184,189,1) 53%,rgba(6, 147, 86, 1) 79%,rgba(6, 126, 147,0) 100%); 
  background: linear-gradient(left, rgba(6, 126, 147,0) 0%,rgba(6, 147, 86, 1) 20%,rgba(147,184,189,1) 53%,rgba(6, 147, 86, 1) 79%,rgba(6, 126, 147,0) 100%); 
}

p{
  margin-bottom:1rem;
}
p:first-child{
  margin: 0px;
}
label{
  color: #069356;
  position: relative;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder  {
  color: #818b8d; 
  font-style: italic;
}

input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #818b8d;
  font-style: italic;
} 

input {
  cursor: pointer;
  outline: none;
}

input:not([type="checkbox"]){
  width: 95%;
  margin-top: 4px;
  padding: 10px;	
  border: 1px solid #000;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"]{
  width: 100%!important;
  cursor: pointer;	
  background: #099533;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 1px;
  border-radius: 1px;
  
  transition: all 0.2s linear;
}

input[type="submit"]:hover{
  background: #39db69;
}

input[type="button"]{
  width: 100%!important;
  cursor: pointer;	
  background: #f73d15;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 1px;
  border-radius: 1px;
  
  transition: all 0.2s linear;
}

input[type="button"]:hover{
  background: #e7684d;
}

/* estilos para o formulário */
#cadastro, 
#atualizar{
  position: absolute;
  top: 2rem;
  width: 90%;	
  padding: 18px 6% 10px 6%;
  margin: 0;
  background: rgba(0, 0, 0, .05);
  border: 1px solid #099533;
  
  box-shadow: 5px;
  border-radius: 5px;
  
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

#cadastro:target ~ .content #cadastro,
#atualizar:target ~ .content #atualizar{
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

#registro:target ~ .content #atualizar,
#atualizar:target ~ .content #cadastro{
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

table {
  font-weight: 400;
  min-width: 600px;
  width: 100%;
  
  thead {
    display: none;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
  }
  
  tbody {
    
    tr {
      border-radius: 5px;
      display: block;
      padding: 30px;
      margin-bottom: 30px;
      
      td {
        display: block;
        font-weight: 500;
        font-size: 1rem;
        padding: 5px;
        position: relative;
        text-align: center !important;
        
        button {
          border-radius: 5px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);          
          width: 50%;
          margin:3px;          
        }
        
      }
    }
  }
}

@media all and (min-width: 768px) {
  table {
    border: 1px solid #000;
    border-collapse: collapse;
    max-width: 992px;
    text-align: left;
    width: 100%;
    
    thead {
      display: table-header-group;
      
      th {
        background: #cee93b;
        padding: 10px;
      }
    }
    
    tbody {
      font-size: .875em;
      
      tr {
        border: none;
        display: table-row;
        
        &:nth-child(even) {
          background: #f7ffcb;
        }

        /* &:nth-child(odd) {
          background: #cee93b8c;
        } */
        
        td {
          display: table-cell;
          font-weight: 400;
          padding: 10px;
          text-align: left;
          
          button {
            display: inline-block;
            padding: 10px 15px;
            position: initial;
            transform: translate(0);
            width: auto;
          }
          
          &:before {
            display: none;
          }
          
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}

`
