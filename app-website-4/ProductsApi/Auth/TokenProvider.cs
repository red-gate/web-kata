using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProductsApi.Auth
{
    public class TokenProvider
    {
        public string GenerateToken(string[] usernameAndPassword)
        {
            if (usernameAndPassword[0] == "admin" && usernameAndPassword[1] == "password")
            {
                var claimsdata = new[] { new Claim(ClaimTypes.Name, usernameAndPassword[0]) };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is a secret key"));
                var signInCred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
                var token = new JwtSecurityToken(
                     issuer: "Products API",
                     audience: "Products App",
                     expires: DateTime.Now.AddMinutes(30),
                     claims: claimsdata,
                     signingCredentials: signInCred
                    );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                return tokenString;
            }

            return null;
        }
    }
}
