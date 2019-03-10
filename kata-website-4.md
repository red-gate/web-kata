# Website Kata 4

This Kata is designed to introduce you to using Authentication and Authorization for a .NET core Web API using JWTs

## Resources

[Introduction to JWT](https://jwt.io/introduction/)

## Prepare

### The server

1. verify dotnet version `dotnet --version` is higher than 2.0.0
1. navigate to `.\app-website-4\ProductsApi`
1. run `dotnet restore`
1. run `dotnet build`
1. run `dotnet run`
1. Navigate to `http://localhost:5000/api/Products` to check the starting code works for you.

## Kata

### What is JSON Web Token?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

By far the most common usage of JWT is Authorization. In this kata we will create a route to allow a user to log in and get a token from our Web API.

Then each subsequent request require the JWT, allowing the user (we will use Postman) to access all the routes, that are permitted with that token.

For more information on what comprises a JWT visit [jwt.io](https://jwt.io/introduction/).

### Task

The first thing we are going to do is to create a `POST` route that will eventually return a JWT that we will generate.

To control access to this route we will use [Basic Authentication](https://swagger.io/docs/specification/authentication/basic-authentication/) which will require us to pass a username and password in the header along with our `POST` request. 

In the `AuthController`:
1. Check that the header of the request contains Basic Authentication. If not return `Bad Request`.
1. If the correct authentication is present in the header, check for a correct username and password using the `UserStore` provided. If not, return `Unauthorized`. If it is then, for now, return `OK`. 

You can test this using Postman. If you've not used Postman before I recommend reading the [documentation on sending API Requests](https://learning.getpostman.com/docs/postman/sending_api_requests/).

Send `POST` requests to test all paths of the route:
* A request with the correct authentication and credentials returns Status Code `200`
* A request with the correct authentication type but incorrect credentials returns Status Code `401`
* A request with an incorrect authentication type returns Status Code `400`


Now that we have the route we next need to generate the JWT and provide it along with the`OK` response.

In `TokenManager`, located in the Auth directory, implement `GenerateToken`.

A simple example implementation of this for a claim that uses email and a shorter lived token might be:

```cs
var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is a secret key"));
var signingCredentials= new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
var claimsdata = new[] { new Claim(ClaimTypes.Email, email) };
var token = new JwtSecurityToken(
      issuer: "My App",
      audience: "My App",
      claims: claimsdata,
      expires: DateTime.Now.AddMinutes(1),
      signingCredentials: signingCredentials
);
var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
return tokenString;
```

In this example there is:  
1. An encrypted key that is used to sign the token
    * There are many ways to do this, such as using a certificate, or a public/private key pair. For this example our token will be encoded and decoded by our Web API so a symetric private key will do the job. Most applications use the [HS256](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.hmacsha256.-ctor?view=netframework-4.7.2#System_Security_Cryptography_HMACSHA256__ctor) algorithm. 
1. A new [SigningCredentials](https://docs.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens.signingcredentials?view=netframework-4.7.2) object containing the key and the algorithm used to encrypt it
1. A new [JwtSecurityToken](https://docs.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens.jwt.jwtsecuritytoken.-ctor?view=azure-dotnet#System_IdentityModel_Tokens_Jwt_JwtSecurityToken__ctor_System_String_System_String_System_Collections_Generic_IEnumerable_System_Security_Claims_Claim__System_Nullable_System_DateTime__System_Nullable_System_DateTime__Microsoft_IdentityModel_Tokens_SigningCredentials_) containing the following:
    * An issuer
    * An audience ()
    * A new [Claim]() of type `Name` (to whom does the token belong)
    * An expiry of 30 minutes
    * The signing credentials object
    
1. A [JwtSecurityTokenHandler](https://docs.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens.jwt.jwtsecuritytokenhandler?view=azure-dotnet) that serializes (writes) the token from the descriptor we've defined

Using the example as a guide implement the `GenerateToken` method to return a token.
