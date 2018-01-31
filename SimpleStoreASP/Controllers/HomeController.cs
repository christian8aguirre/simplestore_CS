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
	public class Usuario
	{
		public string Nombre { get; set; }
		public string Twitter { get; set; }
		public DateTime Alta { get; set; }
	}


	public class HomeController : Controller
    {
        public ActionResult Index()
        {

			return View();
        }

        public ActionResult Pelicula()
        {

	
            return View();
        }
    }
}
