using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ProductsApi.Auth;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly TokenProvider _tokenProvider;

        public AuthController(TokenProvider tokenProvider)
        {
            _tokenProvider = tokenProvider;
        }

        [HttpPost("token")]
        public IActionResult Token()
        {
            var header = Request.Headers["Authorization"];
            if (header.ToString().StartsWith("Basic"))
            {
                var credentialsEncoded = header.ToString().Substring("Basic ".Length).Trim();
                var credentials = Encoding.UTF8.GetString(Convert.FromBase64String(credentialsEncoded));
                var usernameAndPassword = credentials.Split(":");

                string token = _tokenProvider.GenerateToken(usernameAndPassword);

                if (String.IsNullOrWhiteSpace(token))
                {
                    return Unauthorized();
                }

                return Ok(new { token });
            }
            return BadRequest();
        }
    }
}