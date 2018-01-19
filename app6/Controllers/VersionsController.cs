using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app6.Models;
using app6;

namespace app6.Controllers
{
    [Route("api/[controller]/[action]")]
    public class VersionsController : Controller
    {
         // GET api/versions/get
        [HttpGet]
        public string Get()
        {
            return new Version(0, 6).ToString();
        }
    }
}
