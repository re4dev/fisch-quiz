using FischQuizAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;

namespace FischQuizAPI.Tests
{
    public class UserControllerTests
    {
        private readonly IConfiguration configuration;

        [Fact]
        public async Task TestLoginWithCorrectCredentials()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabaseTest1")
                .Options;

            byte[] salt;
            byte[] hash;

            using (var hmc = new HMACSHA512())
            {
                salt = hmc.Key;
                hash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes("testpassword"));
            }

            // Arrange
            using (var context = new AppDbContext(options))
            {
                var user = new User
                {
                    Username = "testuser",
                    UserMail = "test@test.de",
                    UserPasswordSalt = salt,
                    UserPasswordHash = hash
                };

                context.Users.Add(user);
                await context.SaveChangesAsync();

                var controller = new UserController(context, configuration);

                // Act
                var request = new UserDto
                {
                    Username = "testuser",
                    Password = "testpassword"
                };

                var result = await controller.Login(request);

                // Assert
                var okResult = Assert.IsType<OkObjectResult>(result);
                Assert.Equal(user.UserId, okResult.Value);
            }

        }


        [Fact]
        public async Task TestLoginWithUnknownUsername()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabaseTest2")
                .Options;
            byte[] salt;
            byte[] hash;

            using (var hmc = new HMACSHA512())
            {
                salt = hmc.Key;
                hash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes("testpassword"));
            }

            // Arrange
            using (var context = new AppDbContext(options))
            {
                var user = new User
                {
                    Username = "testuser",
                    UserMail = "test@test.de",
                    UserPasswordSalt = salt,
                    UserPasswordHash = hash
                };

                context.Users.Add(user);
                await context.SaveChangesAsync();

                var controller = new UserController(context, configuration);

                // Act
                var request = new UserDto
                {
                    Username = "testuser2",
                    Password = "testpassword"
                };

                var result = await controller.Login(request);

                // Assert
                var notOkResult = Assert.IsType<BadRequestObjectResult>(result);
                Assert.Equal("User not found!", notOkResult.Value);
            }
        }

        [Fact]
        public async Task TestLoginWithIncorrectPassword()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabaseTest3")
                .Options;

            byte[] salt;
            byte[] hash;

            using (var hmc = new HMACSHA512())
            {
                salt = hmc.Key;
                hash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes("testpassword"));
            }

            // Arrange
            using (var context = new AppDbContext(options))
            {
                var user = new User
                {
                    Username = "testuser",
                    UserMail = "test@test.de",
                    UserPasswordSalt = salt,
                    UserPasswordHash = hash
                };

                context.Users.Add(user);
                await context.SaveChangesAsync();

                var controller = new UserController(context, configuration);

                // Act
                var request = new UserDto
                {
                    Username = "testuser",
                    Password = "testpassword2"
                };

                var result = await controller.Login(request);

                // Assert
                var notOkResult = Assert.IsType<BadRequestObjectResult>(result);
                Assert.Equal("Wrong password!", notOkResult.Value);
            }
        }


        [Fact]
        public async Task TestRegisterNewUser()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabaseTest4")
                .Options;

            // Arrange
            var context2 = new AppDbContext(options);
            var controller = new UserController(context2, configuration);

            // Act
            var request = new UserDto
            {
                Username = "testuser",
                Password = "testpassword"
            };

            var result = await controller.Register(request);

            // Assert
            var OkResult = Assert.IsType<OkResult>(result);
            Assert.Equal(StatusCodes.Status200OK, OkResult.StatusCode);
            
        }


        [Fact]
        public async Task TestRegisterUserNameAlreadyInUse()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabaseTest5")
                .Options;

            byte[] salt;
            byte[] hash;

            using (var hmc = new HMACSHA512())
            {
                salt = hmc.Key;
                hash = hmc.ComputeHash(System.Text.Encoding.UTF8.GetBytes("testpassword"));
            }

            // Arrange
            using (var context = new AppDbContext(options))
            {
                var user = new User
                {
                    Username = "testuser",
                    UserMail = "test@test.de",
                    UserPasswordSalt = salt,
                    UserPasswordHash = hash
                };

                context.Users.Add(user);
                await context.SaveChangesAsync();

                var controller = new UserController(context, configuration);

                // Act
                var request = new UserDto
                {
                    Username = "testuser",
                    Password = "testpassword"
                };

                var result = await controller.Register(request);

                // Assert
                var notOkResult = Assert.IsType<BadRequestObjectResult>(result);
                Assert.Equal("Username already in use!", notOkResult.Value);
            }
        }


    }
}
