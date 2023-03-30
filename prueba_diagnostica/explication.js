// Que son los patrones de diseños ?

// Como funciona un array Function JS ?

// Funcion anonima auto ejecutable
(()=>{
    const App = { // tipo de datos primitivos (enteros, string, ect), no primitivos()
        htmlElements:{
            form:document.getElementById("form"),
            name:document.getElementById("name")      
        },
        handlers:{
            onFormSubmit: async (e)=>{
                
                e.preventDefault(); // Sirve para que no recargue la pagina
                const pokemonName = App.htmlElements.name.value;
                const url = `https://pokeapi.co/api/v2/pokemon${pokemonName}`
                const rawResponse = await fetch(url);
                const { id } = await rawResponse.json();

                console.log({pokemonName});
                
            }
        },
        init:()=>{
            App.htmlElements.form.addEventListener("submit", App.handlers.onFormSubmit);
        },
    };

    App.init();

}) ()

// Variables AutoHosting => las variables se corren arriba automaticamente; Una de las formas para controlar 