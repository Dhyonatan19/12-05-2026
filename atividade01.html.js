const elementoForm  = document.getElementById('formulario');

elementoForm.addEventListener('submit', ()=> e.preventDefault()
);
 const elementoCor = document.getElementById('cor');
 elementoCor.addEventListener("input", (e) => {
 let corNova = e.target.value;
  document.documentElement.style.setProperty("--primary-color", corNova);
 });

 document.addEventListener('DOMContentLoaded', ()=>
 {
     const rootStyles =window.getComputedStyle(document.documentElement)
   const_primaryColor = rootStyles.getPropertyValue('--primary-color').trim();
  elementoCor.VALUE =
      PRIMARYCOLOR;                    
 });