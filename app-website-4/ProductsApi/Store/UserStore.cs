using ProductsApi.Model;
using System.Collections.Generic;
using System.Linq;

namespace ProductsApi.Store
{
    public class UserStore
    {
        public List<User> Users;
        public UserStore()
        {
            Users = new List<User>();
            Users.Add(new User() { Username = "Admin", Password = "Peruzzi1" });
        }
        public User GetUser(string username)
        {
            try
            {
                return Users.First(user => user.Username.Equals(username));
            }
            catch
            {
                return null;
            }
        }
    }
}
