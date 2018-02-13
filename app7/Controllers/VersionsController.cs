using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using app7.Models;
using app7;

namespace app7.Controllers
{
    [Route("api/[controller]/[action]")]
    public class VersionsController : Controller
    {
         // GET api/versions/get
        [HttpGet]
        public string Get()
        {
            return new Version(0, 7).ToString();
        }
    }
}
