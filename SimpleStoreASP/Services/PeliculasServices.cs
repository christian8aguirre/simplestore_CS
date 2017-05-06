using System;
using SimpleStoreASP.Models;
using System.Collections.Generic;
using CompropagoSdk.Factory;
using CompropagoSdk.Factory.Models;

namespace SimpleStoreASP.Services
{
    public class PeliculasServices
    {

        public List<Pelicula> ObtenerPeliculas()
        {
            var pelicula1 = new Pelicula()
            {
                Titulo = "Escape Plan",
                Duracion = 115,
                Pais = "USA",
                Publicacion = new DateTime(2013, 12, 3)
            };

            var pelicula2 = new Pelicula()
            {
                Titulo = "Captian America",
                Duracion = 160,
                Pais = "USA/CAN",
                Publicacion = new DateTime(2016, 2, 28)
            };

            return new List<Pelicula> { pelicula1, pelicula2 };

        }
    }
}
