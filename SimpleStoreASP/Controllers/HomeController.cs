using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Web.UI;
using System.Web.Script.Serialization;
using SimpleStoreASP.Services;
using CompropagoSdk.Factory;
using CompropagoSdk.Factory.Models;
using CompropagoSdk;
using SimpleStoreASP.Models;

namespace SimpleStoreASP.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

			return View();
        }

        public ActionResult Pelicula()
        {
            var peliculasServices = new PeliculasServices();
            var model = peliculasServices.ObtenerPeliculas();

            var client = new Client(
                ConfigModel.publicKey,
                ConfigModel.privateKey,
                ConfigModel.mode
            );

            var providers = client.Api.ListProviders();

            ViewData["providers"] = providers;
            return View(model);
        }
    }
}
