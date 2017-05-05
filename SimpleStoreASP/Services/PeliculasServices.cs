using System;
using SimpleStoreASP.Models;

namespace SimpleStoreASP.Services
{
    public class PeliculasServices
    {
            public Pelicula obtenerPelicula()
            {
                return new Pelicula()
                {
                    Titulo = "Escape Plan",
                    Duracion = 115,
                    Pais = "USA",
                    Publicacion = new DateTime(2013,12,3)
                };
            }
    }
}
